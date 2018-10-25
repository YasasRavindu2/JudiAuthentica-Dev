import { Component, OnInit } from '@angular/core';
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");


@Component({
  selector: 'app-future-survey-view',
  templateUrl: './future-survey-view.component.html',
  styleUrls: ['./future-survey-view.component.scss']
})
export class FutureSurveyViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.viewSurvey();
    
  }

  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            inputMask: "phone",
            popupdescription: "Some text",
            qid: "q1"
          },
          {
            type: "barrating",
            name: "barrating",
            ratingTheme: "css-stars",
            choices: [1, 2, 3, 4, 5],
            qid: "q2"
          },
          {
            type: "bootstrapslider",
            name: "bootstrapslider",
            qid: "q3"
          },
          {
            type: "radiogroup",
            name: "prettycheckbox",
            renderAs: "prettycheckbox",
            choices: ["One", "Two", "Three"],
            qid: "q4"
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:",
            qid: "q5"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature",
            qid: "q6"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"],
            qid: "q7"
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true,
            qid: "q8"
          }
        ]
      },
      // {
      //   questions: [
      //     {
      //       type: "matrix",
      //       name: "Quality",
      //       title:
      //         "Please indicate if you agree or disagree with the following statements",
      //       columns: [
      //         {
      //           value: 1,
      //           text: "Strongly Disagree"
      //         },
      //         {
      //           value: 2,
      //           text: "Disagree"
      //         },
      //         {
      //           value: 3,
      //           text: "Neutral"
      //         },
      //         {
      //           value: 4,
      //           text: "Agree"
      //         },
      //         {
      //           value: 5,
      //           text: "Strongly Agree"
      //         }
      //       ],
      //       rows: [
      //         {
      //           value: "affordable",
      //           text: "Product is affordable"
      //         },
      //         {
      //           value: "does what it claims",
      //           text: "Product does what it claims"
      //         },
      //         {
      //           value: "better then others",
      //           text: "Product is better than other products on the market"
      //         },
      //         {
      //           value: "easy to use",
      //           text: "Product is easy to use"
      //         }
      //       ]
      //     },
      //     {
      //       type: "rating",
      //       name: "satisfaction",
      //       title: "How satisfied are you with the Product?",
      //       mininumRateDescription: "Not Satisfied",
      //       maximumRateDescription: "Completely satisfied"
      //     },
      //     {
      //       type: "rating",
      //       name: "recommend friends",
      //       visibleIf: "{satisfaction} > 3",
      //       title:
      //         "How likely are you to recommend the Product to a friend or co-worker?",
      //       mininumRateDescription: "Will not recommend",
      //       maximumRateDescription: "I will recommend"
      //     },
      //     {
      //       type: "comment",
      //       name: "suggestions",
      //       title: "What would make you more satisfied with the Product?"
      //     }
      //   ]
      // },
      // {
      //   questions: [
      //     {
      //       type: "radiogroup",
      //       name: "price to competitors",
      //       title: "Compared to our competitors, do you feel the Product is",
      //       choices: [
      //         "Less expensive",
      //         "Priced about the same",
      //         "More expensive",
      //         "Not sure"
      //       ]
      //     },
      //     {
      //       type: "radiogroup",
      //       name: "price",
      //       title: "Do you feel our current price is merited by our product?",
      //       choices: [
      //         "correct|Yes, the price is about right",
      //         "low|No, the price is too low for your product",
      //         "high|No, the price is too high for your product"
      //       ]
      //     },
      //     {
      //       type: "multipletext",
      //       name: "pricelimit",
      //       title: "What is the... ",
      //       items: [
      //         {
      //           name: "mostamount",
      //           title: "Most amount you would every pay for a product like ours"
      //         },
      //         {
      //           name: "leastamount",
      //           title: "The least amount you would feel comfortable paying"
      //         }
      //       ]
      //     },{
      //       "type": "bootstrapslider",
      //       "name": "question4",
      //       "questionId": "QBootstrapslider1"
      //      }
      //   ]
      // },
      // {
      //   questions: [
      //     {
      //       type: "text",
      //       name: "email",
      //       title:
      //         'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
      //     }
      //   ]
      // }
    ]
  };
  
  viewSurvey() {
    const surveyModel = new Survey.Model(this.json);
    
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) return;

      //Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      var question = options.question;
      btn.onclick = function() {
        //showDescription(question);
        alert(options.question.popupdescription);
      };
      var header = options.htmlElement.querySelector("h5");
      var span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });

    
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    Survey.JsonObject.metaData.addProperty("questionbase", {
        name: "qid:text",
        default: "none"
    });

    surveyModel.onComplete.add(function (result) {
        
      var modifiedData = Object.keys(result.data).map(function(qName) {
      
       let questionDet : any = result.getQuestionByName(qName);//resolve Survey.IQuestion interface
       console.log(questionDet);
        return {
          value: result.data[qName],// attached for new output result 
          qid: questionDet.qid
        }
      })
      console.log(modifiedData);
    });

    
  }

}