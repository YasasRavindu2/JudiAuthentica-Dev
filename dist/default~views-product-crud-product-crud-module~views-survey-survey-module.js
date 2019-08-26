(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-product-crud-product-crud-module~views-survey-survey-module"],{

/***/ "./src/app/views/product-crud/product-crud.service.ts":
/*!************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.service.ts ***!
  \************************************************************/
/*! exports provided: ProductCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudService", function() { return ProductCrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductCrudService = /** @class */ (function () {
    function ProductCrudService(http) {
        this.http = http;
        this.productApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "products/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
        console.log("URL : " + this.productApiUrl);
    }
    ProductCrudService.prototype.updateProduct = function (id, item) {
        return this.http.put(this.productApiUrl + id, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.addProduct = function (productObj, items) {
        return this.http.post(this.productApiUrl, productObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(JSON.stringify(response.content.id));
            return response.content.id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getAllProducts = function () {
        return this.http.get(this.productApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.removeProduct = function (row, items) {
        return this.http
            .delete(this.productApiUrl + row.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getAllProductSuggestions = function () {
        return this.http
            .get(this.productApiUrl + "suggestions")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // "?name=" +
    // keyword +
    // --------- BH ----------
    ProductCrudService.prototype.getPageProducts = function (keyword, pageNumber, pageSize, clientId, categories, predefined) {
        return this.http
            .get(this.productApiUrl +
            "?pageNumber=" +
            pageNumber +
            "&pageSize=" +
            pageSize +
            "&clientId=" +
            clientId +
            "&categories=" +
            categories +
            "&name=" +
            keyword +
            "&predefined=" +
            predefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    /** RAVEEN SANKALPA - 2019/05/03
     * Filter products by client id and categories that assigned to user.
     *
     * @param clientId
     *
     * @param categories
     */
    ProductCrudService.prototype.getAllProductsByFilter = function (clientId, categories, isPredefined) {
        return this.http
            .get(this.productApiUrl +
            "?clientId=" +
            clientId +
            "&categories=" +
            categories +
            "&predefined=" +
            isPredefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getProductById = function (proId) {
        return this.http
            .get(this.productApiUrl + proId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.getProductDetails = function (proId) {
        return this.http
            .get(environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "productDetails/" + proId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.authenticate = function (request) {
        return this.http
            .post(environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].productApiURL + "authenticate/customer/", request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductCrudService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ProductCrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductCrudService);
    return ProductCrudService;
}());



/***/ }),

/***/ "./src/app/views/survey/survey.service.ts":
/*!************************************************!*\
  !*** ./src/app/views/survey/survey.service.ts ***!
  \************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.surveyApiUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].surveyApiURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            })
        };
    }
    SurveyService.prototype.getAnswerTemplates = function () {
        return this.http
            .get(this.surveyApiUrl + "answer-templates/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.addNewAnsTemplate = function (templateObj, items) {
        return this.http
            .post(this.surveyApiUrl + "answer-templates/", templateObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateAnsTemplate = function (id, item) {
        return this.http
            .put(this.surveyApiUrl + "answer-templates/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getAnsTemplateById = function (id, items) {
        return this.http
            .get(this.surveyApiUrl + "answer-templates/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            //console.log(data.content);
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.removeAnsTemplate = function (row, items) {
        return this.http
            .delete(this.surveyApiUrl + "answer-templates/" + row.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var i = items.indexOf(row);
            items.splice(i, 1);
            return items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.addNewSurvey = function (surveyObj, items) {
        return this.http.post(this.surveyApiUrl + "surveys", surveyObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            items.unshift(data.content);
            return items.slice();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateSurveyWithQuestions = function (id, item) {
        console.log("update with ques : " + this.surveyApiUrl + "surveys/" + id);
        return this.http
            .put(this.surveyApiUrl + "surveys/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.updateSurveyPopup = function (id, item) {
        return this.http
            .put(this.surveyApiUrl + "surveys/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getAllSurveys = function () {
        return this.http
            .get(this.surveyApiUrl + "surveys")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    SurveyService.prototype.getPageSurveys = function (pageNumber, pageSize) {
        return this.http
            .get(this.surveyApiUrl +
            "surveys?pageNumber=" +
            pageNumber +
            "&pageSize=" +
            pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // --------- BH ----------
    SurveyService.prototype.removeSurvey = function (row, items) {
        return this.http.delete(this.surveyApiUrl + "surveys/" + row.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var i = items.indexOf(row);
            items.splice(i, 1);
            return items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getQuestionById = function (questionId) {
        return this.http
            .get(this.surveyApiUrl + "questions/" + questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.getSurveyById = function (surveyId) {
        return this.http.get(this.surveyApiUrl + "surveys/" + surveyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.submitFeedbackAnswers = function (request) {
        return this.http
            .post(this.surveyApiUrl + "survey/questions/answers", request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            //console.log("submit response");
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SurveyService.prototype.handleError = function (error) {
        //console.log(error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-product-crud-product-crud-module~views-survey-survey-module.js.map