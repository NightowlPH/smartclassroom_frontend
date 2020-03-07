(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/PageNotFound/page-not-found.component.html":
/*!************************************************************!*\
  !*** ./src/app/PageNotFound/page-not-found.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center animated fadeInDown\">\n    <h1>404</h1>\n    <h3 class=\"font-bold\">Page Not Found</h3>\n\n    <div class=\"error-desc\">\n        Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/PageNotFound/page-not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/PageNotFound/page-not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/PageNotFound/page-not-found.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/PageNotFound/page-not-found.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/PageNotFound/page-not-found.module.ts ***!
  \*******************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/PageNotFound/page-not-found.component.ts");





var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'PageNotFound', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]],
            exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



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
/* harmony import */ var _PageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageNotFound/page-not-found.component */ "./src/app/PageNotFound/page-not-found.component.ts");




var routes = [
    {
        path: 'home',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { preload: true }
    },
    {
        path: '**',
        component: _PageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet> "

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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.module */ "./src/app/register/register.module.ts");
/* harmony import */ var _internalServerError_internal_serverError_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internalServerError/internal-serverError.module */ "./src/app/internalServerError/internal-serverError.module.ts");
/* harmony import */ var _PageNotFound_page_not_found_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageNotFound/page-not-found.module */ "./src/app/PageNotFound/page-not-found.module.ts");
/* harmony import */ var _tokenRegistration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tokenRegistration.service */ "./src/app/tokenRegistration.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
                _internalServerError_internal_serverError_module__WEBPACK_IMPORTED_MODULE_10__["InternalServerErrorModule"],
                _register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterModule"],
                _PageNotFound_page_not_found_module__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _tokenRegistration_service__WEBPACK_IMPORTED_MODULE_12__["TokenRegistrationService"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/internalServerError/internal-serverError.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/internalServerError/internal-serverError.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"middle-box text-center animated fadeInDown\">\n    <h1>500</h1>\n    <h3 class=\"font-bold\">Internal Server Error</h3>\n\n    <div class=\"error-desc\">\n        The server encountered something unexpected that didn't allow it to complete the request. We apologize.<br/>\n        You can go back to main page: <br/>\n    </div><br><br>\n    <div>\n    \t<div class=\"col-sm-3\"></div>\n    \t<div class=\"col-sm-6\">\n    \t\t<button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click) = \"login()\">Login</button>\n    \t</div>\n    </div>    \n</div>\n"

/***/ }),

/***/ "./src/app/internalServerError/internal-serverError.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/internalServerError/internal-serverError.component.ts ***!
  \***********************************************************************/
/*! exports provided: InternalServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function() { return InternalServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InternalServerErrorComponent = /** @class */ (function () {
    function InternalServerErrorComponent(router) {
        this.router = router;
    }
    InternalServerErrorComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    InternalServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'internal-server-error',
            template: __webpack_require__(/*! ./internal-serverError.component.html */ "./src/app/internalServerError/internal-serverError.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InternalServerErrorComponent);
    return InternalServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/internalServerError/internal-serverError.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/internalServerError/internal-serverError.module.ts ***!
  \********************************************************************/
/*! exports provided: InternalServerErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorModule", function() { return InternalServerErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _internal_serverError_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal-serverError.component */ "./src/app/internalServerError/internal-serverError.component.ts");





var InternalServerErrorModule = /** @class */ (function () {
    function InternalServerErrorModule() {
    }
    InternalServerErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'InternalServerError', component: _internal_serverError_component__WEBPACK_IMPORTED_MODULE_4__["InternalServerErrorComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_internal_serverError_component__WEBPACK_IMPORTED_MODULE_4__["InternalServerErrorComponent"]],
            exports: [_internal_serverError_component__WEBPACK_IMPORTED_MODULE_4__["InternalServerErrorComponent"]]
        })
    ], InternalServerErrorModule);
    return InternalServerErrorModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center\">\n  <div>\n    <h2><b>Nightowl Smartclassroom</b></h2>\n  </div>\n  <div class=\"ibox-content\">\n   <p style=\"color: red\">{{message}}</p>\n    <div class=\"login-box\">    \n      <div class=\"login-box-body\">\n        <p class=\"login-box-msg\">Sign in to start your session</p>\n        <form #input=\"ngForm\" (ngSubmit)=\"submitAccount(input)\">\n          <div class=\"form-group has-feedback\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" id=\"username\"  ngModel>\n            <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n          </div>\n          <div class=\"form-group has-feedback\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" id=\"password\" ngModel>\n            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-8\"></div>\n            <div class=\"col-xs-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Login</button>                      \n            </div>\n          </div><br>  \n         <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n         <a class=\"btn btn-sm btn-white btn-block\" (click) = \"register()\">Create an account</a>     \n        </form>\n      </div>\n    </div>  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, router, loginService, cookieService, sessionService) {
        this.location = location;
        this.router = router;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.sessionService = sessionService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("PASS", this.cookieService.get('token'), "fsadf");
        if (this.cookieService.get('token')) {
            console.log("THERE IS TOKEN");
            var data;
            this.loginService.login_with_token(data)
                .subscribe(function (data) {
                if (data['token'] && data['userType']) {
                    if (data['userType'] == "Admin") {
                        var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/home/admin/users';
                        if (data['url']) {
                            redirect = data['url'];
                        }
                        _this.sessionService.updateToken(data['token']);
                        _this.router.navigate([redirect]);
                    }
                    else if (data['userType'] == "User") {
                        var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/home/users';
                        if (data['url']) {
                            redirect = data['url'];
                        }
                        _this.sessionService.updateToken(data['token']);
                        _this.router.navigate([redirect]);
                    }
                }
                else {
                    _this.cookieService.deleteAll();
                }
            });
        }
    };
    LoginComponent.prototype.submitAccount = function (input) {
        var _this = this;
        if (input.value.username == '' && input.value.password == '') {
            this.message = "Please fill up all the required details";
        }
        else {
            this.userAccount = { username: input.value.username, password: input.value.password };
            this.loginService.login(this.userAccount)
                .subscribe(function (data) {
                if (data['token'] && data['userType']) {
                    if (data['userType'] == "Admin") {
                        var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/home/admin/users';
                        _this.sessionService.updateToken(data['token']);
                        _this.router.navigate([redirect]);
                    }
                    else if (data['userType'] == "User") {
                        var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/home/users';
                        _this.sessionService.updateToken(data['token']);
                        _this.router.navigate([redirect]);
                    }
                }
                else {
                    _this.message = "Invalid username or password";
                }
            }, function (error) {
                if (error.error && error.status == 401) {
                    _this.message = "Invalid username or password";
                }
                else if (error.status == 500) {
                    console.log("Internal server error");
                }
            });
        }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' }
                ])
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            exports: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginService = /** @class */ (function () {
    function LoginService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    LoginService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + "/login", data);
    };
    LoginService.prototype.hasUrlAccess = function (accessUrl) {
        var url = this.baseUrl + "/routeGuard?url=" + encodeURIComponent(accessUrl);
        console.log("Checking url access:", url);
        return this.http.get(url, { headers: this.Headers() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x['access'];
        }));
    };
    LoginService.prototype.login_with_token = function (data) {
        return this.http.post(this.baseUrl + "/login", data, {
            headers: this.Headers()
        });
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        var data = { username: this.cookieService.get('username') };
        console.log(data);
        return this.http.post(this.baseUrl + "/logout", data, {
            headers: this.Headers()
        }).subscribe(function () {
            _this.cookieService.deleteAll();
        });
    };
    LoginService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"middle-box text-center loginscreen   animated fadeInDown\">\n        <div>\n           <div class=\"ibox-content\">\n            <h3>Register to IN+</h3>\n            <p>Create account to see it in action.</p>\n            <p style=\"color: red\">{{message}}</p>\n            <form class=\"m-t\" [formGroup]=\"modalForm\"  novalidate>\n                <div class=\"form-group has-feedback\">\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"Lname\">\t\t            \n\t\t          </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName = \"Fname\">\n                </div>\n                 <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Card ID\" formControlName = \"cardID\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName = \"username\" >\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName = \"userpassword\">\n                </div>          \n                <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" (click)=\"register()\" >Register</button>\n\n                <p class=\"text-muted text-center\"><small>Already have an account?</small></p>\n                <a class=\"btn btn-sm btn-white btn-block\" (click)=\"login()\">Login</a>\n            </form>            \n          </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, formBuilder, router) {
        this.registerService = registerService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({
            Lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardID: '',
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            if (this.modalForm.value['userpassword'].length > 6) {
                this.message = "";
                this.modalForm.value['Lname'] = this.modalForm.value['Lname'][0].toUpperCase() + this.modalForm.value['Lname'].slice(1, this.modalForm.value['Lname'].length);
                this.modalForm.value['Fname'] = this.modalForm.value['Fname'][0].toUpperCase() + this.modalForm.value['Fname'].slice(1, this.modalForm.value['Fname'].length);
                this.registerService.register_user(this.modalForm.value)
                    .subscribe(function () {
                    _this.router.navigate(['/login']);
                });
            }
            else {
                this.message = "password must be more than 6 characters";
            }
        }
        else {
            this.message = "Please fill up all required details";
        }
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");









var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            exports: [_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            providers: [_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var RegisterService = /** @class */ (function () {
    function RegisterService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    RegisterService.prototype.register_user = function (data) {
        return this.http.post(this.baseUrl + "/register", data);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/session.service.ts":
/*!************************************!*\
  !*** ./src/app/session.service.ts ***!
  \************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var SessionService = /** @class */ (function () {
    function SessionService(cookieService) {
        this.cookieService = cookieService;
    }
    SessionService.prototype.updateToken = function (token) {
        this.cookieService.deleteAll();
        this.cookieService.delete('token');
        this.cookieService.deleteAll('/');
        this.cookieService.deleteAll('/home');
        this.cookieService.deleteAll('/home/admin');
        this.cookieService.set('token', token);
    };
    SessionService.prototype.deleteToken = function () {
        this.cookieService.deleteAll();
        this.cookieService.delete('token');
        this.cookieService.deleteAll('/');
        this.cookieService.deleteAll('/home');
        this.cookieService.deleteAll('/home/admin');
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/tokenRegistration.service.ts":
/*!**********************************************!*\
  !*** ./src/app/tokenRegistration.service.ts ***!
  \**********************************************/
/*! exports provided: TokenRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRegistrationService", function() { return TokenRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TokenRegistrationService = /** @class */ (function () {
    function TokenRegistrationService(cookieService) {
        this.cookieService = cookieService;
    }
    TokenRegistrationService.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (ev) {
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                var token = ev.headers.get('x-access-token');
                if (token != undefined) {
                    _this.cookieService.deleteAll();
                    _this.cookieService.set('token', token, undefined, '/');
                }
            }
        }));
    };
    TokenRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], TokenRegistrationService);
    return TokenRegistrationService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    backend_uri: 'http://localhost:5000'
};


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

module.exports = __webpack_require__(/*! /home/dark30once/Documents/smartclassroom_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map