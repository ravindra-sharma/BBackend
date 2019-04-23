webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2 class=\"heading\">Exam Alert</h2>\n  <div class=\".navbar-container\">\n    <div class=\"nav-bar\">\n      <ul class=\"nav-list\">\n        <li><a>Home</a></li>\n        <li><a>Results</a></li>\n        <li><a>Govt.Exams</a></li>\n        <li><a>AboutUs</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"leftcolumn\">\n    <div class=\"card\">\n      <h2>TITLE HEADING</h2>\n      <h5>Title Description 04 Apr, 2019</h5>\n      <div class=\"fakeimg\">Image</div>\n      <p>Some Text...</p>\n    </div>\n    <div class=\"card\">\n      <h2>TITLE HEADING</h2>\n      <h5>Title Description 04 Apr, 2019</h5>\n      <div class=\"fakeimg\">Image</div>\n      <p>Some Text...</p>\n    </div>\n  </div>\n  <div class=\"rightcolumn\">\n    <div class=\"card\">\n      <h2>About Me</h2>\n      <div class=\"fakeimg\" style=\"height:100px;\">Image</div>\n      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n    </div>\n    <div class=\"card\">\n      <h3>Popular Post</h3>\n      <div class=\"fakeimg\">Image</div><br>\n      <div class=\"fakeimg\">Image</div><br>\n      <div class=\"fakeimg\">Image</div>\n    </div>\n    <div class=\"card\">\n      <h3>Follow Me</h3>\n      <p>Some text..</p>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <h2>Footer</h2>\n</div>\n<h2>Here are some links to help you start: </h2>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: #008080; }\n  .header .heading {\n    margin: 0 0 25px 0; }\n  .leftcolumn {\n  width: 75%;\n  float: left; }\n  .rightcolumn {\n  width: 25%;\n  float: right;\n  padding-left: 20px; }\n  .card {\n  background-color: white;\n  padding: 20px;\n  margin-top: 20px; }\n  .fakeimg {\n  background-color: #aaa;\n  padding: 20px;\n  width: 100%;\n  height: 200px; }\n  .row::after {\n  content: '';\n  display: table;\n  clear: both; }\n  .footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px; }\n  .nav-list {\n  list-style-type: none;\n  min-width: 696px;\n  padding-top: 20px;\n  margin: 0; }\n  .nav-list li {\n    display: inline; }\n  .nav-list li a {\n      text-decoration: none;\n      padding: 0 10px 0 10px; }\n  .nav-bar {\n  display: table;\n  margin: 0 auto; }\n  .navbar-container {\n  height: 84px; }\n  @media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {\n    width: 100%;\n    padding: 0; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map