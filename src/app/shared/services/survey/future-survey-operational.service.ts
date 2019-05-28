import { Injectable } from "@angular/core";
import { ChoiceTypeEnum, MatrixTypeEnum, LangJsonWrapper, ValidateLocalizeSurveyRequestWrapper } from "../../../model/FutureSurvey.model";

@Injectable()
export class FutureSurveyOperationalService {

  constructor() { }




  // --------------------------------- validateLocalizeSurveyRequest Start ----------------------------------------------------------------
  public surveyLang;
  public defLang;
  public extraLang;

  validateLocalizeSurveyRequest(jsonObject) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // if anywhere in the survey has been used another language, set selected language value to text directly instead of whole value array.
    // ex: if selected language is italiano, change text values as shown below.
    // "text": "articolo1 A" instead of "text": { "default": "item1 A", "it": "articolo1 A" }.
    // ----------------------------------------------------------------------------------------------------------


    // ------------------ validateLocalizeSurveyRequest input ---------------------------------------------------
    console.log('-------------- validateLocalizeSurveyRequest input', jsonObject);
    // ----------------------------------------------------------------------------------------------------------

    let lang;
    this.defLang = 'en';
    this.extraLang = [];

    if (jsonObject.locale !== undefined) {
      lang = jsonObject.locale;
      this.defLang = lang;
    } else {
      lang = "default";
      this.defLang = 'en';
    }

    if (jsonObject.title !== undefined && typeof (jsonObject.title) !== "string" && lang) {
      this.checkLang(jsonObject.title, lang);
      if (jsonObject.title.hasOwnProperty(lang)) {
        jsonObject.title = jsonObject.title[lang];
      } else {
        jsonObject.title = jsonObject.title['default'];
      }
    }

    jsonObject.pages.forEach(page => {
      const elements = page.elements;


      if (elements) {
        elements.forEach(element => {

          // ...... Validation Rules for all  Question Type Titles
          if (element.title !== undefined && typeof (element.title) !== "string" && lang) {
            this.checkLang(element.title, lang);
            if (element.title.hasOwnProperty(lang)) {
              element.title = element.title[lang];
            } else {
              element.title = element.title['default'];
            }
            if (element.title === undefined) {
              element.title = element.name;
            }
          }

          // ...... Validation Rules for Choice Question Types
          if ((<any>Object).values(ChoiceTypeEnum).includes(element.type)) {
            let choices = element.choices;
            if (choices) {
              choices.forEach(choice => {
                if (choice.text !== undefined && typeof (choice.text) !== "string" && lang) {
                  this.checkLang(choice.text, lang);
                  if (choice.text.hasOwnProperty(lang)) {
                    choice.text = choice.text[lang];
                  } else {
                    choice.text = choice.text['default'];
                  }
                }
              });
            }
          }

          // ....... validation rules for Matrix Question Types ............
          if ((<any>Object).values(MatrixTypeEnum).includes(element.type)) {
            let columns = element.columns;
            let rows = element.rows;
            if (columns) {
              columns.forEach(col => {
                if (col.text !== undefined && typeof (col.text) !== "string" && lang) {
                  this.checkLang(col.text, lang);
                  if (col.text.hasOwnProperty(lang)) {
                    col.text = col.text[lang];
                  } else {
                    col.text = col.text['default'];
                  }
                }
              });
            }

            if (rows) {
              rows.forEach(row => {
                if (row.text !== undefined && typeof (row.text) !== "string" && lang) {
                  this.checkLang(row.text, lang);
                  if (row.text.hasOwnProperty(lang)) {
                    row.text = row.text[lang];
                  } else {
                    row.text = row.text['default'];
                  }
                }
              });
            }

          }
        });
      }
    });

    this.surveyLang = new LangJsonWrapper(this.defLang, this.extraLang);
    let returnVal: ValidateLocalizeSurveyRequestWrapper = new ValidateLocalizeSurveyRequestWrapper(jsonObject, this.surveyLang);

    // ----------------------------------------------------------------------------------------------------------
    console.log('-------------- validateLocalizeSurveyRequest return', returnVal);
    // ----------------------------------------------------------------------------------------------------------

    return returnVal;
  }


  // not tested properly
  // ------------------------------------------------------------------------------------------------------------

  checkLang(array, lang) {
    for (const key in array) {
      if (key !== 'default' && (this.extraLang.indexOf(key) == -1)) {
        this.extraLang.push(key);
      } else if (lang !== 'default' && key === 'default' && (this.extraLang.indexOf('en') == -1)) {
        this.extraLang.push('en');
      }
    }
  }

  // ------------------------------------------------------------------------------------------------------------

  // --------------------------------- validateLocalizeSurveyRequest End ------------------------------------------------------------------









  // --------------------------------- optionUnselect Start -------------------------------------------------------------------------------

  optionUnselect(Survey) {
    // ---------------------------------------------------------------------------------~ HBH ~------------------
    // ---------------------------------------------------------------------------------- Option Unselect -------
    // after add this widget to Survey, all the Radio Button Groups can unselect.
    // ----------------------------------------------------------------------------------------------------------
    let widget = {
      name: "emptyRadio", isFit: function (question) { return question.getType() === 'radiogroup'; }, isDefaultRender: true, afterRender: function (question, el) {
        let lastValue = question.cachedValueForUrlRequests;
        el.onclick = function (e) {

          // ----------------------------------------------------------------------------------------------------------
          console.log('-------------- ------------ optionUnselect lastValue', lastValue);
          console.log('-------------- optionUnselect e.originalTarget.value', e.originalTarget.value);
          // ----------------------------------------------------------------------------------------------------------

          if (e.originalTarget.value !== undefined) {
            if (lastValue === null || lastValue !== e.originalTarget.value) {
              lastValue = question.cachedValueForUrlRequests
            } else {
              lastValue = null;
              question.clearValue();
            }
          }

        }
      }
    };
    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
    // ----------------------------------------------------------------------------------------------------------
  }

  // --------------------------------- optionUnselect End ---------------------------------------------------------------------------------




}
