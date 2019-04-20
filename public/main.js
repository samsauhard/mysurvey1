(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _pages_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/surveys/surveys.component */ "./src/app/pages/surveys/surveys.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_survey_ans_survey_ans_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/survey-ans/survey-ans.component */ "./src/app/pages/survey-ans/survey-ans.component.ts");











var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: 'dashboard', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About' } },
    { path: 'surveys', component: _pages_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_6__["SurveysComponent"], data: { title: 'Surveys' } },
    { path: 'surveys/survey-list/', component: _pages_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_6__["SurveysComponent"], data: { title: 'Surveys' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'surveys/survey-list/:id', component: _pages_survey_ans_survey_ans_component__WEBPACK_IMPORTED_MODULE_10__["SurveyAnsComponent"], data: { title: 'Answer Survey' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/surveys/surveys.component */ "./src/app/pages/surveys/surveys.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_survey_ans_survey_ans_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/survey-ans/survey-ans.component */ "./src/app/pages/survey-ans/survey-ans.component.ts");




















function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _pages_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_11__["SurveysComponent"],
                _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__["PagenotfoundComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _pages_survey_ans_survey_ans_component__WEBPACK_IMPORTED_MODULE_19__["SurveyAnsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/Answers.ts":
/*!***********************************!*\
  !*** ./src/app/models/Answers.ts ***!
  \***********************************/
/*! exports provided: Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
var Answers = /** @class */ (function () {
    function Answers() {
    }
    return Answers;
}());



/***/ }),

/***/ "./src/app/models/Question.ts":
/*!************************************!*\
  !*** ./src/app/models/Question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/models/survey.ts":
/*!**********************************!*\
  !*** ./src/app/models/survey.ts ***!
  \**********************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
var Survey = /** @class */ (function () {
    function Survey() {
    }
    return Survey;
}());



/***/ }),

/***/ "./src/app/models/survey_ans.ts":
/*!**************************************!*\
  !*** ./src/app/models/survey_ans.ts ***!
  \**************************************/
/*! exports provided: SurveyAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAnswer", function() { return SurveyAnswer; });
var SurveyAnswer = /** @class */ (function () {
    function SurveyAnswer() {
    }
    return SurveyAnswer;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"jumbotron\">\n\n             <h1 class=\"display-8\">About US</h1>\n            <br><hr><br>\nAnswer a Survey and We will give a dollar to Charity\n            \n\n\n\n\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent(route) {
        return _super.call(this, route) || this;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"jumbotron\" style=\"padding-left: 18%\">\n        <h1 class=\"display-8\" style=\"padding-left: 20%\">WELCOME TO MY SURVEY</h1>\n      <hr>\n      Take a survey and make this world a better place.\n      <br>\n      <br>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(route) {
        return _super.call(this, route) || this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n          <h1>Please Login</h1>\n          <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n              <fieldset class=\"form-group\">\n                  <label for=\"username\">Username:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.username\"\n                  name=\"username\" placeholder=\"Enter Username\"\n                  id=\"username\" required autofocus autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"password\">Password:</label>\n                  <input type=\"password\" class=\"form-control\"\n                  [(ngModel)]=\"user.password\"\n                  name=\"password\" placeholder=\"Enter Password\"\n                  id=\"password\" required autocomplete=\"off\">\n                  or\n                  <a routerLink=\"/register\">Register Here</a>\n              </fieldset>\n              <fieldset class=\"form-group text-right\">\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n                  <a routerLink=\"/home\">\n                      <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                  </a>\n              </fieldset>\n          </form>\n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pages/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pages/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n          <h1>Please Register</h1>\n          <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n              <fieldset class=\"form-group\">\n                  <label for=\"username\">Username:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.username\"\n                  name=\"username\" placeholder=\"Enter Username\"\n                  id=\"username\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"password\">Password:</label>\n                  <input type=\"password\" class=\"form-control\"\n                  [(ngModel)]=\"user.password\"\n                  name=\"password\" placeholder=\"Enter Password\"\n                  id=\"password\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"email\">Email:</label>\n                  <input type=\"email\" class=\"form-control\"\n                  [(ngModel)]=\"user.email\"\n                  name=\"email\" placeholder=\"Enter Email\"\n                  id=\"email\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <label for=\"displayName\">Dispaly Name:</label>\n                  <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"user.displayName\"\n                  name=\"displayName\" placeholder=\"Enter Display Name\"\n                  id=\"displayName\" required autocomplete=\"off\">\n              </fieldset>\n              <fieldset class=\"form-group text-right\">\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Register\">\n                  <a routerLink=\"/home\">\n                      <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n                  </a>\n              </fieldset>\n          </form>\n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-ans/survey-ans.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/survey-ans/survey-ans.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cnZleS1hbnMvc3VydmV5LWFucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/survey-ans/survey-ans.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/survey-ans/survey-ans.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form autocomplete=\"off\" (submit)=\"onAnswerSubmit()\"  ng-model-options=\"{ form-control : 'standalone' }\">\n    <div class=\"form-group\">\n\n<br><h1>Survey Questions</h1><br>\n  \n    <p>Posted By : {{email}}</p><br>\n    \n\n  <div *ngFor=\"let queslist of questions\" class=\"jumbotron\">\n\n  {{queslist.question}}<br>\n  <fieldset class=\"form-group  text-center\">\n  <input type=\"radio\" [(ngModel)]= \"queslist.ans\" class=\"form-control\" name={{queslist.question}} value={{queslist.option1}}>{{queslist.option1}}<BR>\n  <input type=\"radio\" [(ngModel)]= \"queslist.ans\" class=\"form-control\" name={{queslist.question}} value={{queslist.option2}}>{{queslist.option2}}<BR>\n  <input type=\"radio\" [(ngModel)]= \"queslist.ans\" class=\"form-control\" name={{queslist.question}} value={{queslist.option3}}>{{queslist.option3}}<BR>\n  <input type=\"radio\" [(ngModel)]= \"queslist.ans\" class=\"form-control\" name={{queslist.question}} value={{queslist.option4}}>{{queslist.option4}}<BR>\n  </fieldset>\n   \n  </div>\n  <fieldset class=\"form-group text-center\">\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n      <a routerLink=\"/home\">\n        <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\n      </a>\n  </fieldset>\n</div>\n</form> \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-ans/survey-ans.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/survey-ans/survey-ans.component.ts ***!
  \**********************************************************/
/*! exports provided: SurveyAnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAnsComponent", function() { return SurveyAnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_survey_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey-list.service */ "./src/app/services/survey-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Answers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Answers */ "./src/app/models/Answers.ts");
/* harmony import */ var src_app_models_survey_ans__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/survey_ans */ "./src/app/models/survey_ans.ts");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var src_app_models_Question__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/Question */ "./src/app/models/Question.ts");









var SurveyAnsComponent = /** @class */ (function () {
    function SurveyAnsComponent(activatedRoute, flashMessage, SurveyListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.SurveyListService = SurveyListService;
        this.router = router;
    }
    SurveyAnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.survey = new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"]();
        this.questions = [new src_app_models_Question__WEBPACK_IMPORTED_MODULE_8__["Question"]()];
        this.question = new src_app_models_Question__WEBPACK_IMPORTED_MODULE_8__["Question"]();
        this.build_ans = new src_app_models_survey_ans__WEBPACK_IMPORTED_MODULE_6__["SurveyAnswer"]();
        this.answer = new src_app_models_Answers__WEBPACK_IMPORTED_MODULE_5__["Answers"]();
        this.surveys = [new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"]()];
        this.build_ans.ans = [new src_app_models_Answers__WEBPACK_IMPORTED_MODULE_5__["Answers"]()];
        this.size = 0;
        this.activatedRoute.params.subscribe(function (params) {
            _this.survey.surveyid = params.id;
        });
        this.getSurvey(this.survey);
    };
    SurveyAnsComponent.prototype.getSurvey = function (survey) {
        var _this = this;
        this.SurveyListService.getSurvey(survey).subscribe(function (data) {
            _this.survey = data.survey;
            _this.size = _this.survey[0].questions.length;
            for (var i = 0; i < _this.survey[0].questions.length; i++) {
                _this.questions[i] = _this.survey[0].questions[i];
            }
            _this.email = _this.survey[0].email;
        });
    };
    SurveyAnsComponent.prototype.onAnswerSubmit = function () {
        var _this = this;
        this.build_ans.surveyid = this.survey[0].surveyid;
        for (var i = 0; i < this.size; i++) {
            this.build_ans.ans[i].answer = this.survey[0].questions[i].ans;
            this.build_ans.ans[i].questionid = this.survey[0].questions[i].quesid;
            console.log(this.build_ans);
            console.log(this.survey);
        }
        console.log(this.build_ans);
        this.SurveyListService.addAnswer(this.build_ans).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    SurveyAnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-ans',
            template: __webpack_require__(/*! ./survey-ans.component.html */ "./src/app/pages/survey-ans/survey-ans.component.html"),
            styles: [__webpack_require__(/*! ./survey-ans.component.css */ "./src/app/pages/survey-ans/survey-ans.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_survey_list_service__WEBPACK_IMPORTED_MODULE_2__["SurveyListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SurveyAnsComponent);
    return SurveyAnsComponent;
}());



/***/ }),

/***/ "./src/app/pages/surveys/surveys.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/surveys/surveys.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tr{\r\n    width:40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5cy9zdXJ2ZXlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXJ2ZXlzL3N1cnZleXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cntcclxuICAgIHdpZHRoOjQwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/surveys/surveys.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/surveys/surveys.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <br>\n          <br>\n\n     <h1 style=\"margin-left:60%; width:150%\">Surveys Available</h1>\n          <br>\n          <table class=\"table table-bordered table-striped table-hover\" style=\"width:220%\">\n              <!-- Header Row-->\n              <tr>\n                  <th class=\"text-center\">Time</th>\n                  <th class=\"text-center\">Questions</th>\n                  <th class=\"text-center\">Points</th>\n                  <th class=\"text-center\"></th>\n              </tr>\n\n              <!-- Repeatable Template Row -->\n                  <tr *ngFor=\"let survey of surveys\">\n                      <td class=\"text-center\">{{ survey.time }}</td>\n                      <td class=\"text-center\">{{ survey.questions }}</td>\n                      <td class=\"text-center\">{{ survey.points }}</td>\n\n                      <td class=\"text-center\">\n                      <a routerLink=\"/surveys/survey-list/{{ survey.surveyid }}\"\n                          class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i> Take Survey Now</a>\n                      </td>\n\n\n                  </tr>\n          </table>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/surveys/surveys.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/surveys/surveys.component.ts ***!
  \****************************************************/
/*! exports provided: SurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysComponent", function() { return SurveysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_survey_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey-list.service */ "./src/app/services/survey-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SurveysComponent = /** @class */ (function () {
    function SurveysComponent(SurveyListService, flashMessage, router) {
        this.SurveyListService = SurveyListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    SurveysComponent.prototype.ngOnInit = function () {
        this.surveys = new Array();
        this.displaySurveyList();
    };
    SurveysComponent.prototype.displaySurveyList = function () {
        var _this = this;
        this.SurveyListService.getList().subscribe(function (data) {
            if (data.success) {
                _this.surveys = data.surveyList;
                console.log(data);
            }
            else {
                console.log(data);
                _this.router.navigate(['/login']);
            }
        });
    };
    SurveysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-surveys',
            template: __webpack_require__(/*! ./surveys.component.html */ "./src/app/pages/surveys/surveys.component.html"),
            styles: [__webpack_require__(/*! ./surveys.component.css */ "./src/app/pages/surveys/surveys.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_survey_list_service__WEBPACK_IMPORTED_MODULE_2__["SurveyListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SurveysComponent);
    return SurveysComponent;
}());



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-8\">{{title}}</h1>\n  </div>\n"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(route) {
        this.route = route;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-distributed{\r\n\tbackground-color: #292c2f;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 16px sans-serif;\r\n\r\n\tpadding: 55px 50px;\r\n\tmargin-top: 80px;\r\n}\r\n\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n/* Footer left */\r\n\r\n.footer-distributed .footer-left{\r\n\twidth: 40%;\r\n}\r\n\r\n/* The company logo */\r\n\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\r\n}\r\n\r\n/* Footer links */\r\n\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Footer Center */\r\n\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\theight: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #5383d3;\r\n\ttext-decoration: none;;\r\n}\r\n\r\n/* Footer Right */\r\n\r\n.footer-distributed .footer-right{\r\n\twidth: 20%;\r\n}\r\n\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLDJDQUEyQztDQUMzQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQiwwQkFBMEI7O0NBRTFCLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7OztDQUdDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtDQUNDLFVBQVU7QUFDWDs7QUFFQSxxQkFBcUI7O0FBRXJCO0NBQ0MsZUFBZTtDQUNmLG1DQUFtQztDQUNuQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUEsa0JBQWtCOztBQUVsQjtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0NBQ2QsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCOztBQUdBLGlCQUFpQjs7QUFFakI7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsa0JBQWtCOztDQUVsQixlQUFlO0NBQ2YsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixpQkFBaUI7O0NBRWpCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUEsOEVBQThFOztBQUU5RTs7Q0FFQztFQUNDLDBCQUEwQjtDQUMzQjs7Q0FFQTs7O0VBR0MsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsY0FBYztDQUNmOztBQUVEIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYzJmO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG5cclxuXHRwYWRkaW5nOiA1NXB4IDUwcHg7XHJcblx0bWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLyogRm9vdGVyIGxlZnQgKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0e1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi8qIFRoZSBjb21wYW55IGxvZ28gKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgaDN7XHJcblx0Y29sb3I6ICAjZmZmZmZmO1xyXG5cdGZvbnQ6IG5vcm1hbCAzNnB4ICdDb29raWUnLCBjdXJzaXZlO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCBoMyBzcGFue1xyXG5cdGNvbG9yOiAgIzUzODNkMztcclxufVxyXG5cclxuLyogRm9vdGVyIGxpbmtzICovXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3N7XHJcblx0Y29sb3I6ICAjZmZmZmZmO1xyXG5cdG1hcmdpbjogMjBweCAwIDEycHg7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGF7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDEuODtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG5cdGNvbG9yOiAgIzhmOTI5NjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBDZW50ZXIgKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcblx0d2lkdGg6IDM1JTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHR3aWR0aDogMzhweDtcclxuXHRoZWlnaHQ6IDM4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDogNDJweDtcclxuXHRtYXJnaW46IDEwcHggMTVweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGV7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bWFyZ2luOjA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFue1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRsaW5lLWhlaWdodDoyO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgYXtcclxuXHRjb2xvcjogICM1MzgzZDM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOztcclxufVxyXG5cclxuXHJcbi8qIEZvb3RlciBSaWdodCAqL1xyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG5cdHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0e1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiAgIzkyOTk5ZjtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0IHNwYW57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29sb3I6ICAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnN7XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWljb25zIGF7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAzNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogICMzMzM4M2I7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cclxuXHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qIElmIHlvdSBkb24ndCB3YW50IHRoZSBmb290ZXIgdG8gYmUgcmVzcG9uc2l2ZSwgcmVtb3ZlIHRoZXNlIG1lZGlhIHF1ZXJpZXMgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG5cclxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG5cdFx0Zm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCxcclxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG5cdC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n\n\t\n\n\t<link href=\"http://fonts.googleapis.com/css?family=Cookie\" rel=\"stylesheet\" type=\"text/css\">\n\n</head>\n\n\t<body>\n\n\n\t\t<footer class=\"footer-distributed\">\n\n\t\t\t<div class=\"footer-left\">\n\n\t\t\t\t<h3>My<span>Surveys</span></h3>\n\n\t\t\t\t<p class=\"footer-links\">\n\t\t\t\t\t<a href=\"#\">Home</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">About</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Contact</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Login/Signup</a>\n\t\t\t\t\t\n\t\t\t\t</p>\n\n\t\t\t\t<p class=\"footer-company-name\">My Surveys &copy; 2019</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-center\">\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t<p><span>94.57 Progress Avenue</span> Rome, Italy</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-phone\"></i>\n\t\t\t\t\t<p>+1 420 888 8888</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t<p><a href=\"mailto:s278@my.centennialcollege.ca\">s278@my.centennialcollege.ca</a></p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-right\">\n\n\t\t\t\t<p class=\"footer-company-about\">\n          <span>My Survey</span>\n          Take a Survey and make this world a better place.\n\t\t\t\t\t</p>\n\n\t\t\t\t<div class=\"footer-icons\">\n\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-github\"></i></a>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</footer>\n\n\t</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n    margin-left: 60%;\r\n    \r\n    }\r\n    \r\n    ul{\r\n        display: contents;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztJQUVoQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgdWx7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"    text-align: center;\ndisplay: -webkit-box;\">\n\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t  <img src=\"29f96fda-e01e-4503-8015-b3f0a02affb6.png\" alt=\"\">\n  </a>\n\t\t<button\n\t\t  class=\"navbar-toggler\"\n\t\t  type=\"button\"\n\t\t  data-toggle=\"collapse\"\n\t\t  data-target=\"#navbarSupportedContent\"\n\t\t  aria-controls=\"navbarSupportedContent\"\n\t\t  aria-expanded=\"false\"\n\t\t  aria-label=\"Toggle navigation\"\n\t\t>\n\t\t  <span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n  \n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t  <ul class=\"navbar-nav ml-auto\" style=\"padding-left:100%\">\n\t\t  <li  *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n\t\t\t  <a class=\"nav-link\" routerLink=\"/\">\n\t\t\t\t\t<i class=\"fas fa-archway\"></i> Home</a>\n\t\t\t</li>\n\n\t\t\t<li  *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n\t\t\t  <a class=\"nav-link\" routerLink=\"/dashboard\">\n\t\t\t\t\t<i class=\"fas fa-archway\"></i> Dashboard</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t  <a class=\"nav-link\" routerLink=\"/surveys\"\n\t\t\t\t><i class=\"fas fa-poll\"></i>Surveys</a\n\t\t\t  >\n\t\t\t</li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/about\"\n\t\t\t\t  ><i class=\"fas fa-id-card\"></i> About  </a\n\t\t\t  >\n\t\t\t</li>\n\n\t\t\t<li *ngIf=\"isLoggedIn()\">\n\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t<i class=\"fas fa-user-circle\"></i> {{ user.displayName}}\n\t\t\t\t</button>\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/home\" class=\"dropdown-item\"><i class=\"fas fa-users\"></i> Profile </a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/home\" class=\"dropdown-item\"><i class=\"far fa-plus-square\"></i> Create a Survey </a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/home\" class=\"dropdown-item\"><i class=\"fab fa-accusoft\"></i> My Surveys</a>\n\t\t\t\t\t<a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"dropdown-item\">\n\t\t\t\t\t\t<i class=\"fas fa-lg fa-sign-out-alt\"></i> Logout</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</li>\n\n\n\t\t\t<li *ngIf=\"!isLoggedIn()\" class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\">\n\t\t\t\t<i class=\"fas fa-lg fa-sign-in-alt\"></i> Login</a></li> \n\t\t  </ul>\n\t\t</div>\n\t  </nav>"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return result;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.endpoint = 'https://portfoliomean.herokuapp.com/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + 'register', user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + 'login', user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + 'logout', this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/survey-list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/survey-list.service.ts ***!
  \*************************************************/
/*! exports provided: SurveyListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListService", function() { return SurveyListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var SurveyListService = /** @class */ (function () {
    function SurveyListService(http) {
        this.http = http;
        this.authToken = null;
        this.endpoint = 'https://surveyappmean.herokuapp.com/surveys/survey-list/';
        //private endpoint = 'https://portfoliomean.herokuapp.com/api/contact-list/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SurveyListService.prototype.getList = function () {
        this.loadToken();
        console.log(this.http.get(this.endpoint, this.httpOptions));
        return this.http.get(this.endpoint, this.httpOptions);
    };
    SurveyListService.prototype.getSurvey = function (survey) {
        this.loadToken();
        return this.http.get(this.endpoint + survey.surveyid, this.httpOptions);
    };
    SurveyListService.prototype.addAnswer = function (surveyanswer) {
        this.loadToken();
        surveyanswer.email = this.user.email;
        console.log(JSON.stringify(surveyanswer.ans));
        console.log(this.user);
        return this.http.post(this.endpoint + 'add', JSON.stringify(surveyanswer), this.httpOptions);
    };
    /*
      public editContact(contact: Contact): Observable<any> {
        this.loadToken();
        return this.http.post<any>(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
      }
    
      public deleteContact(contact: Contact): Observable<any> {
        this.loadToken();
        return this.http.get<any>(this.endpoint + 'delete/' + contact._id, this.httpOptions);
      }
    */
    SurveyListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    SurveyListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SurveyListService);
    return SurveyListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mysurvey\mysurvey\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map