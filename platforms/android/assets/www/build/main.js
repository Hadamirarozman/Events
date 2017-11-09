webpackJsonp([1],{

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/welcome/welcome.module": [
		421,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IDENTITY_POOL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _USER_POOL_ID; });
/* unused harmony export _CLIENT_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _MOBILE_ANALYTICS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _POOL_DATA; });
/**
 * Created by Vladimir Budilov on 8/13/16.
 */
/**
 * Created by Vladimir Budilov on 8/13/16.
 */ var _REGION = "ap-southeast-1";
var _IDENTITY_POOL_ID = "ap-southeast-1:ccaaa0b8-6afa-419a-95bb-5a2e80b4a6f3";
var _USER_POOL_ID = "ap-southeast-1_CK259S6uE";
var _CLIENT_ID = "287e2ab984utkovss5sb05vv9v";
var _MOBILE_ANALYTICS_APP_ID = "dc99346ac6e745709669b35b06ff91ee";
var _POOL_DATA = {
    UserPoolId: _USER_POOL_ID,
    ClientId: _CLIENT_ID
};
//# sourceMappingURL=properties.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordStep1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotPassword2_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordStep1Component = (function () {
    function ForgotPasswordStep1Component(nav, alertCtrl, userService) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
    }
    ForgotPasswordStep1Component.prototype.onNext = function () {
        this.userService.forgotPassword(this.email, this);
    };
    ForgotPasswordStep1Component.prototype.cognitoCallback = function (message, result) {
        if (message == null && result == null) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__forgotPassword2_component__["a" /* ForgotPasswordStep2Component */], { 'email': this.email });
        }
    };
    ForgotPasswordStep1Component.prototype.navToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]);
    };
    ForgotPasswordStep1Component.prototype.navToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]);
    };
    ForgotPasswordStep1Component.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return ForgotPasswordStep1Component;
}());
ForgotPasswordStep1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\forgotPassword.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Reset Password\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block outline large (click)="onNext()">Continue</button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToRegister()">Sign up</button>\n\n            </ion-col>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToLogin()">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\forgotPassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_userLogin_service__["a" /* UserLoginService */]])
], ForgotPasswordStep1Component);

//# sourceMappingURL=forgotPassword1.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordStep2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordStep2Component = (function () {
    function ForgotPasswordStep2Component(nav, navParam, alertCtrl, userService) {
        this.nav = nav;
        this.navParam = navParam;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.email = navParam.get("email");
    }
    ForgotPasswordStep2Component.prototype.onNext = function () {
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    };
    ForgotPasswordStep2Component.prototype.cognitoCallback = function (message) {
        if (message != null) {
            this.doAlert("Verification Code", message);
        }
        else {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]);
        }
    };
    ForgotPasswordStep2Component.prototype.navToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]);
    };
    ForgotPasswordStep2Component.prototype.navToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]);
    };
    ForgotPasswordStep2Component.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return ForgotPasswordStep2Component;
}());
ForgotPasswordStep2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\forgotPasswordStep2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Change Password\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Verification Code</ion-label>\n\n            <ion-input [(ngModel)]="verificationCode" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block outline large (click)="onNext()">Continue</button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToRegister()">Sign up</button>\n\n            </ion-col>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToLogin()">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\forgotPasswordStep2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_userLogin_service__["a" /* UserLoginService */]])
], ForgotPasswordStep2Component);

//# sourceMappingURL=forgotPassword2.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GetAccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export IdTokenCallback */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_popup_event_popup_event__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // import momentjs







//class to keep access id token
var GetAccess = (function () {
    function GetAccess() {
    }
    return GetAccess;
}());

var HomePage = (function () {
    function HomePage(storage, http, navCtrl, navParams, loadingCtrl, nav, eventService, cognitoUtil, userService) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.eventService = eventService;
        this.cognitoUtil = cognitoUtil;
        this.userService = userService;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD");
        this.getAccess = new GetAccess();
        console.log('home');
        console.log('date: ', this.todaydate);
        this.userService.isAuthenticated(this);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.getAccess.idToken
        });
        this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/showevents?eventdate=' + this.todaydate, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.events = data;
        }, 
        // Jika ada error
        function (err) { return console.log("error is " + err); }, 
        // Jika request complete
        function () { return console.log('read events Complete ' + _this.events); });
    }
    HomePage.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            //this.nav.setRoot(TabsPage);
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
            console.log('token from dashboard here: ', this.getAccess.idToken);
        }
        else {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_login_component__["a" /* LoginComponent */]);
        }
    };
    HomePage.prototype.presentLoadingText = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'circle',
        });
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */]);
        }, 500);
        setTimeout(function () {
            loading.dismiss();
        }, 500);
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_popup_event_popup_event__["a" /* PopupEventPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n   <ion-item *ngFor="let event of events">\n\n   <h2>Event : {{event.eventname}}</h2>\n\n   <p class="item-description">Venue : {{event.venue}}</p>\n\n   <p >Event Date : {{event.eventdate}}</p>   \n\n   <p >Event Details : {{event.description}}</p>\n\n   <button ion-button block (click) = "presentLoadingText()">Join Event</button>\n\n   </ion-item>\n\n </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_5__providers_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_8__providers_userLogin_service__["a" /* UserLoginService */]])
], HomePage);

var IdTokenCallback = (function () {
    function IdTokenCallback(home) {
        this.home = home;
    }
    IdTokenCallback.prototype.callback = function () {
    };
    IdTokenCallback.prototype.callbackWithParam = function (result) {
        this.home.getAccess.idToken = result;
    };
    return IdTokenCallback;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotPassword1_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {ControlPanelComponent} from "../controlpanel/controlpanel";



var LoginComponent = (function () {
    function LoginComponent(nav, navParam, alertCtrl, userService, eventService, menu) {
        this.nav = nav;
        this.navParam = navParam;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.eventService = eventService;
        this.menu = menu;
        console.log("LoginComponent constructor");
        //this.menu.enable(false);
        if (navParam != null && navParam.get("email") != null)
            this.email = navParam.get("email");
    }
    LoginComponent.prototype.ionViewLoaded = function () {
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    };
    LoginComponent.prototype.signMeIn = function () {
        console.log("in onLogin");
        if (this.email == null || this.password == null) {
            this.doAlert("Error", "All fields are required");
            return;
        }
        this.userService.authenticate(this.email, this.password, this);
    };
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Error", message);
            console.log("result: " + message);
        }
        else {
            console.log("Redirect to Home");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginComponent.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginComponent.prototype.navToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]);
    };
    LoginComponent.prototype.navToForgotPassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgotPassword1_component__["a" /* ForgotPasswordStep1Component */]);
    };
    LoginComponent.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Login\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block outline large (click)="signMeIn()">Sign in</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToForgotPassword()">Forgot Password</button>\n\n            </ion-col>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToRegister()">Register</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_userLogin_service__["a" /* UserLoginService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_events_service__["a" /* EventsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginService = (function () {
    function UserLoginService(cUtil, eventService) {
        this.cUtil = cUtil;
        this.eventService = eventService;
        console.log("eventservice1: " + eventService);
    }
    UserLoginService.prototype.authenticate = function (username, password, callback) {
        var mythis = this;
        // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
        AWSCognito.config.update({ accessKeyId: 'anything', secretAccessKey: 'anything' });
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        console.log("Authenticating the user");
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
                mythis.eventService.sendLoggedInEvent();
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });
    };
    UserLoginService.prototype.forgotPassword = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.forgotPassword({
            onSuccess: function (result) {
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode: function () {
                callback.cognitoCallback(null, null);
            }
        });
    };
    UserLoginService.prototype.confirmNewPassword = function (email, verificationCode, password, callback) {
        var userData = {
            Username: email,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            }
        });
    };
    UserLoginService.prototype.logout = function () {
        console.log("Logging out");
        this.cUtil.getCurrentUser().signOut();
        this.eventService.sendLogoutEvent();
    };
    UserLoginService.prototype.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("Callback in isAuthenticated() cannot be null");
        console.log("Getting the current user");
        var cognitoUser = this.cUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("Couldn't get the session: " + err, err.stack);
                    callback.isLoggedInCallback(err, false);
                }
                else {
                    console.log("Session is valid: " + session.isValid());
                    callback.isLoggedInCallback(err, session.isValid());
                }
            });
        }
        else {
            callback.isLoggedInCallback("Can't retrieve the CurrentUser", false);
        }
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]])
], UserLoginService);

//# sourceMappingURL=userLogin.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegistrationUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationUser = (function () {
    function RegistrationUser() {
    }
    return RegistrationUser;
}());

var CognitoUtil = (function () {
    function CognitoUtil() {
        console.log("CognitoUtil constructor");
    }
    CognitoUtil.prototype.getUserPool = function () {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(__WEBPACK_IMPORTED_MODULE_1__properties_service__["c" /* _POOL_DATA */]);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoUtil.prototype.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("callback in getAccessToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getAccessToken().getJwtToken());
                }
            }
        });
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("callback in getIdToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getIdToken().getJwtToken());
                }
                else {
                    console.log("Got the id token, but the session isn't valid");
                }
            }
        });
    };
    CognitoUtil.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("callback in getRefreshToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getRefreshToken());
                }
            }
        });
    };
    return CognitoUtil;
}());
CognitoUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CognitoUtil);

//# sourceMappingURL=cognito.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GetAccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* unused harmony export IdTokenCallback */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_userLogin_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // import momentjs





var GetAccess = (function () {
    function GetAccess() {
    }
    return GetAccess;
}());

var DiscoverPage = DiscoverPage_1 = (function () {
    function DiscoverPage(modalCtrl, http, navCtrl, navParams, loadingCtrl, eventService, cognitoUtil, userService, nav) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.eventService = eventService;
        this.cognitoUtil = cognitoUtil;
        this.userService = userService;
        this.nav = nav;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_3_moment__().format("YYYY-MM-DD");
        this.getAccess = new GetAccess();
        console.log('home');
        console.log('date: ', this.todaydate);
        this.userService.isAuthenticated(this);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.getAccess.idToken
        });
        this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/showevents?eventdate=' + this.todaydate, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.events = data;
        }, 
        // Jika ada error
        function (err) { return console.log("error is " + err); }, 
        // Jika request complete
        function () { return console.log('read events Complete ' + _this.events); });
    }
    DiscoverPage.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            //this.nav.setRoot(TabsPage);
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
            console.log('token from dashboard here: ', this.getAccess.idToken);
        }
        else {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth_login_component__["a" /* LoginComponent */]);
        }
    };
    DiscoverPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(DiscoverPage_1);
        modal.present();
    };
    return DiscoverPage;
}());
DiscoverPage = DiscoverPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discover',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\discover\discover.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Discover\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n<ion-content>\n\n  <div >\n\n    <ion-list *ngIf="events" >\n\n      <ion-item *ngFor="let event of events" >\n\n        <h2>{{event.eventname}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\discover\discover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_4__providers_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_7__providers_userLogin_service__["a" /* UserLoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], DiscoverPage);

var IdTokenCallback = (function () {
    function IdTokenCallback(home) {
        this.home = home;
    }
    IdTokenCallback.prototype.callback = function () {
    };
    IdTokenCallback.prototype.callbackWithParam = function (result) {
        this.home.getAccess.idToken = result;
    };
    return IdTokenCallback;
}());

var DiscoverPage_1;
//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stuff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwsUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userLogin_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Stuff = (function () {
    function Stuff() {
    }
    return Stuff;
}());

var AwsUtil = (function () {
    function AwsUtil(userLogin, cUtil) {
        this.userLogin = userLogin;
        this.cUtil = cUtil;
    }
    /**
     * This is the method that needs to be called in order to init the aws global creds
     */
    AwsUtil.prototype.initAwsService = function () {
        console.log("Running initAwsService()");
        AWSCognito.config.region = __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */];
        AWS.config.region = __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */];
        var options = {
            appId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["b" /* _MOBILE_ANALYTICS_APP_ID */],
        };
        var mobileAnalyticsClient = new AMA.Manager(options);
        mobileAnalyticsClient.submitEvents();
        // First check if the user is authenticated already
        var mythis = this;
        this.userLogin.isAuthenticated({
            isLoggedInCallback: function (message, loggedIn) {
                mythis.setupAWS(loggedIn);
            }
        });
    };
    /**
     * Sets up the AWS global params
     *
     * @param isLoggedIn
     * @param callback
     */
    AwsUtil.prototype.setupAWS = function (isLoggedIn) {
        console.log("in setupAWS()");
        var mythis = this;
        if (isLoggedIn) {
            console.log("User is logged in");
            this.cUtil.getIdToken({
                callback: function () {
                },
                callbackWithParam: function (idToken) {
                    console.log("idJWT Token: " + idToken);
                    mythis.addCognitoCredentials(idToken);
                }
            });
            console.log("Retrieving the id token");
        }
        else {
            console.log("User is not logged in. ");
            AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["a" /* _IDENTITY_POOL_ID */]
            });
        }
    };
    AwsUtil.prototype.addCognitoCredentials = function (idTokenJwt) {
        console.log("in addCognitoCredentials");
        var params = this.getCognitoParametersForIdConsolidation(idTokenJwt);
        AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
        AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials(params);
        console.log("Getting the credentials class");
        // AWS.config.credentials.get(function (err) {
        //   if (!err) {
        //
        //   }
        // });
    };
    AwsUtil.prototype.getCognitoParametersForIdConsolidation = function (idTokenJwt) {
        console.log("enter getCognitoParametersForIdConsolidation()");
        var url = 'cognito-idp.' + __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */].toLowerCase() + '.amazonaws.com/' + __WEBPACK_IMPORTED_MODULE_2__properties_service__["e" /* _USER_POOL_ID */];
        console.log("ur: " + url);
        var logins = [];
        logins[url] = idTokenJwt;
        var params = {
            IdentityPoolId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["a" /* _IDENTITY_POOL_ID */],
            Logins: logins
        };
        return params;
    };
    return AwsUtil;
}());
AwsUtil.firstLogin = false;
AwsUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__userLogin_service__["a" /* UserLoginService */], __WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */]])
], AwsUtil);

//# sourceMappingURL=aws.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _USER_LOGOUT_EVENT */
/* unused harmony export _USER_LOGIN_EVENT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var _USER_LOGOUT_EVENT = 'user:logout';
var _USER_LOGIN_EVENT = 'user:login';
var EventsService = (function () {
    function EventsService(events) {
        this.events = events;
    }
    EventsService.prototype.sendLoggedInEvent = function () {
        console.log("Publishing login event");
        this.events.publish(_USER_LOGIN_EVENT);
    };
    EventsService.prototype.sendLogoutEvent = function () {
        console.log("Publishing logout event");
        this.events.publish(_USER_LOGOUT_EVENT);
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_index__["b" /* Events */]])
], EventsService);

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlPanelComponent = (function () {
    function ControlPanelComponent(nav) {
        this.nav = nav;
        console.log("Loaded ControlPanelComponent");
    }
    return ControlPanelComponent;
}());
ControlPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\controlpanel\controlpanel.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Quick links...\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="controlpanel">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50 offset-5>\n\n                Welcome to the demo!\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\controlpanel\controlpanel.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ControlPanelComponent);

//# sourceMappingURL=controlpanel.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {LoginComponent} from "./login.component";

var LogoutComponent = (function () {
    function LogoutComponent(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.userService.isAuthenticated(this);
    }
    LogoutComponent.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        if (isLoggedIn) {
            this.userService.logout();
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_userLogin_service__["a" /* UserLoginService */]])
], LogoutComponent);

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsPage = (function () {
    function MapsPage() {
        this.latLng = new google.maps.LatLng(2.9427466, 101.8737259);
    }
    MapsPage.prototype.loadMap = function () {
        var mapOptions = {
            center: this.latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return MapsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapsPage.prototype, "mapElement", void 0);
MapsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-maps',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\maps\maps.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Location\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div #map id="map"></div>\n\n  <button ion-button full (click)="getLocation()">Get the Location</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\maps\maps.html"*/,
    }),
    __metadata("design:paramtypes", [])
], MapsPage);

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmRegistration_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resendCode_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var RegisterComponent = (function () {
    function RegisterComponent(nav, userRegistration, alertCtrl) {
        this.nav = nav;
        this.userRegistration = userRegistration;
        this.alertCtrl = alertCtrl;
        this.registrationUser = new __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service__["b" /* RegistrationUser */]();
    }
    RegisterComponent.prototype.ionViewLoaded = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        this.userRegistration.register(this.registrationUser, this);
    };
    /**
     * CAllback on the user clicking 'register'
     *
     * The user is taken to a confirmation page where he can enter the confirmation code to finish
     * registration
     *
     */
    RegisterComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Registration", message);
        }
        else {
            console.log("in callback...result: " + result);
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__confirmRegistration_component__["a" /* ConfirmRegistrationComponent */], {
                'username': result.user.username,
                'email': this.registrationUser.email
            });
        }
    };
    RegisterComponent.prototype.navToResendCode = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__resendCode_component__["a" /* ResendCodeComponent */]);
    };
    RegisterComponent.prototype.navToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */]);
    };
    RegisterComponent.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Registration\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="registrationUser.email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="registrationUser.password" type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block outline large (click)="onRegister()">Sign up</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToResendCode()">Resend Code</button>\n\n            </ion-col>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToLogin()">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\register.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_eventlist_eventlist__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_maps_maps__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_popup_event_popup_event__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_controlpanel_controlpanel__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_auth_register_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_auth_confirmRegistration_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_auth_resendCode_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_auth_forgotPassword1_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_auth_forgotPassword2_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_auth_logout_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_aws_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_userLogin_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_userParameters_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_userRegistration_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic2_calendar__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_filter_filter__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//local storage 










//aws cognito auth pages








// aws cognito services










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_eventlist_eventlist__["a" /* EventlistPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_popup_event_popup_event__["a" /* PopupEventPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_auth_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_auth_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_auth_confirmRegistration_component__["a" /* ConfirmRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_auth_resendCode_component__["a" /* ResendCodeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_auth_forgotPassword1_component__["a" /* ForgotPasswordStep1Component */],
            __WEBPACK_IMPORTED_MODULE_21__pages_auth_forgotPassword2_component__["a" /* ForgotPasswordStep2Component */],
            __WEBPACK_IMPORTED_MODULE_15__pages_controlpanel_controlpanel__["a" /* ControlPanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_31_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_eventlist_eventlist__["a" /* EventlistPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_popup_event_popup_event__["a" /* PopupEventPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_auth_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_auth_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_auth_confirmRegistration_component__["a" /* ConfirmRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_auth_resendCode_component__["a" /* ResendCodeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_auth_forgotPassword1_component__["a" /* ForgotPasswordStep1Component */],
            __WEBPACK_IMPORTED_MODULE_21__pages_auth_forgotPassword2_component__["a" /* ForgotPasswordStep2Component */],
            __WEBPACK_IMPORTED_MODULE_15__pages_controlpanel_controlpanel__["a" /* ControlPanelComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__providers_aws_service__["a" /* AwsUtil */],
            __WEBPACK_IMPORTED_MODULE_26__providers_userLogin_service__["a" /* UserLoginService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_userParameters_service__["a" /* UserParametersService */],
            __WEBPACK_IMPORTED_MODULE_28__providers_userRegistration_service__["a" /* UserRegistrationService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_23__providers_cognito_service__["a" /* CognitoUtil */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */],
            //SQLiteObject,
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__providers_filter_filter__["a" /* FilterProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-au": 194,
	"./en-au.js": 194,
	"./en-ca": 195,
	"./en-ca.js": 195,
	"./en-gb": 196,
	"./en-gb.js": 196,
	"./en-ie": 197,
	"./en-ie.js": 197,
	"./en-nz": 198,
	"./en-nz.js": 198,
	"./eo": 199,
	"./eo.js": 199,
	"./es": 200,
	"./es-do": 201,
	"./es-do.js": 201,
	"./es.js": 200,
	"./et": 202,
	"./et.js": 202,
	"./eu": 203,
	"./eu.js": 203,
	"./fa": 204,
	"./fa.js": 204,
	"./fi": 205,
	"./fi.js": 205,
	"./fo": 206,
	"./fo.js": 206,
	"./fr": 207,
	"./fr-ca": 208,
	"./fr-ca.js": 208,
	"./fr-ch": 209,
	"./fr-ch.js": 209,
	"./fr.js": 207,
	"./fy": 210,
	"./fy.js": 210,
	"./gd": 211,
	"./gd.js": 211,
	"./gl": 212,
	"./gl.js": 212,
	"./gom-latn": 213,
	"./gom-latn.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it.js": 221,
	"./ja": 222,
	"./ja.js": 222,
	"./jv": 223,
	"./jv.js": 223,
	"./ka": 224,
	"./ka.js": 224,
	"./kk": 225,
	"./kk.js": 225,
	"./km": 226,
	"./km.js": 226,
	"./kn": 227,
	"./kn.js": 227,
	"./ko": 228,
	"./ko.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mr": 238,
	"./mr.js": 238,
	"./ms": 239,
	"./ms-my": 240,
	"./ms-my.js": 240,
	"./ms.js": 239,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./th": 267,
	"./th.js": 267,
	"./tl-ph": 268,
	"./tl-ph.js": 268,
	"./tlh": 269,
	"./tlh.js": 269,
	"./tr": 270,
	"./tr.js": 270,
	"./tzl": 271,
	"./tzl.js": 271,
	"./tzm": 272,
	"./tzm-latn": 273,
	"./tzm-latn.js": 273,
	"./tzm.js": 272,
	"./uk": 274,
	"./uk.js": 274,
	"./ur": 275,
	"./ur.js": 275,
	"./uz": 276,
	"./uz-latn": 277,
	"./uz-latn.js": 277,
	"./uz.js": 276,
	"./vi": 278,
	"./vi.js": 278,
	"./x-pseudo": 279,
	"./x-pseudo.js": 279,
	"./yo": 280,
	"./yo.js": 280,
	"./zh-cn": 281,
	"./zh-cn.js": 281,
	"./zh-hk": 282,
	"./zh-hk.js": 282,
	"./zh-tw": 283,
	"./zh-tw.js": 283
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 376;

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_aws_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_controlpanel_controlpanel__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_logout_component__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// cognito pages and services




var MyApp = (function () {
    //rootPage: any = WelcomePage;
    //pages: Array<{title: string, component: any}>;
    function MyApp(platform, statusBar, events, awsUtil, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.events = events;
        this.awsUtil = awsUtil;
        this.menu = menu;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_login_component__["a" /* LoginComponent */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_6__pages_controlpanel_controlpanel__["a" /* ControlPanelComponent */];
        this.logoutPage = __WEBPACK_IMPORTED_MODULE_8__pages_auth_logout_component__["a" /* LogoutComponent */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__pages_controlpanel_controlpanel__["a" /* ControlPanelComponent */];
        this.splash = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]();
        this.welcomePage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        /*
        this.pages = [
          { title: 'Home', component: TabsPage },
          { title: 'Discover', component: DiscoverPage}
        ];
        */
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.awsUtil.initAwsService();
            //this.rootPage = this.loginPage;
            _this.rootPage = _this.welcomePage;
            console.log("Hiding splash screen");
            _this.splash.hide();
            _this.listenToLoginEvents();
            //this.menu.close();
        });
    };
    MyApp.prototype.openPage = function (page) {
        //this.nav.setRoot(page.component); -- old code
        this.rootPage = page;
        // close the menu when clicking a link from the menu
        //this.menu.close();
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]),
    __metadata("design:type", Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\app\app.html"*/'<!-- Logged out menu -->\n\n<ion-menu id="loggedOutMenu" [content]="content">\n\n  <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n  </ion-toolbar>\n\n  <ion-content>\n\n      <ion-list>\n\n          <ion-list-header>\n\n              Account\n\n          </ion-list-header>\n\n          <button ion-item (click)="openPage(homePage)">\n\n              <ion-icon item-left name="home"></ion-icon>\n\n              Home\n\n          </button>\n\n\n\n          <button ion-item (click)="openPage(loginPage)">\n\n              <ion-icon item-left name="log-in"></ion-icon>\n\n              Login\n\n          </button>\n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Logged in menu -->\n\n<ion-menu id="loggedInMenu" [content]="content">\n\n  <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n  </ion-toolbar>\n\n  <ion-content>\n\n      <ion-list>\n\n          <ion-list-header>\n\n              Account\n\n          </ion-list-header>\n\n          \n\n\n\n          <button ion-item (click)="openPage(logoutPage)">\n\n              <ion-icon item-left name="log-out"></ion-icon>\n\n              Logout\n\n          </button>\n\n\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!--\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n-->\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__providers_aws_service__["a" /* AwsUtil */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GetAccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventlistPage; });
/* unused harmony export IdTokenCallback */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_event_popup_event__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_userLogin_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // import momentjs





var GetAccess = (function () {
    function GetAccess() {
    }
    return GetAccess;
}());

var EventlistPage = (function () {
    function EventlistPage(modalCtrl, http, navCtrl, navParams, loadingCtrl, eventService, cognitoUtil, userService, nav) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.eventService = eventService;
        this.cognitoUtil = cognitoUtil;
        this.userService = userService;
        this.nav = nav;
        this.todaydate = __WEBPACK_IMPORTED_MODULE_5_moment__().format("YYYY-MM-DD");
        this.getAccess = new GetAccess();
        console.log('home');
        console.log('date: ', this.todaydate);
        this.userService.isAuthenticated(this);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.getAccess.idToken
        });
        this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/showevents?eventdate=' + this.todaydate, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.events = data;
        }, 
        // Jika ada error
        function (err) { return console.log("error is " + err); }, 
        // Jika request complete
        function () { return console.log('read events Complete ' + _this.events); });
    }
    EventlistPage.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            //this.nav.setRoot(TabsPage);
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
            console.log('token from dashboard here: ', this.getAccess.idToken);
        }
        else {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_auth_login_component__["a" /* LoginComponent */]);
        }
    };
    EventlistPage.prototype.presentLoadingText = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Opening Maps'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__maps_maps__["a" /* MapsPage */]);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    EventlistPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popup_event_popup_event__["a" /* PopupEventPage */]);
        modal.present();
    };
    return EventlistPage;
}());
EventlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eventlist',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\eventlist\eventlist.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <ion-title>\n\n        Events\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div >\n\n      <ion-list *ngIf="events" >\n\n        <ion-item *ngFor="let event of events" >\n\n          <ion-thumbnail item-start>\n\n            <img src="media">\n\n          </ion-thumbnail>\n\n          <h2>{{event.eventname}}</h2>\n\n          <p>\n\n            Event Details : {{event.description}}\n\n          </p>\n\n          <ion-row no-padding>\n\n            <ion-col>\n\n              <button ion-button clear small color="primary" icon-start (click)="presentLoadingText()">\n\n              <ion-icon name=\'pin\'></ion-icon>\n\n              Location\n\n              \n\n              </button>\n\n              \n\n            </ion-col>\n\n            <ion-col >\n\n              <button ion-button clear small color="primary" icon-start>\n\n                <ion-icon name=\'paper-plane\'></ion-icon>\n\n                Join \n\n              </button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button clear small color="primary" icon-start>\n\n                <ion-icon name=\'share-alt\'></ion-icon>\n\n                Share\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\eventlist\eventlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_6__providers_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_9__providers_userLogin_service__["a" /* UserLoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], EventlistPage);

var IdTokenCallback = (function () {
    function IdTokenCallback(home) {
        this.home = home;
    }
    IdTokenCallback.prototype.callback = function () {
    };
    IdTokenCallback.prototype.callbackWithParam = function (result) {
        this.home.getAccess.idToken = result;
    };
    return IdTokenCallback;
}());

//# sourceMappingURL=eventlist.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserParametersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserParametersService = (function () {
    function UserParametersService(cUtil) {
        this.cUtil = cUtil;
    }
    UserParametersService.prototype.getParameters = function (callback) {
        var cognitoUser = this.cUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err)
                    console.log("Couldn't retrieve the user");
                else {
                    cognitoUser.getUserAttributes(function (err, result) {
                        if (err) {
                            console.log("in getParameters: " + err);
                        }
                        else {
                            callback.callbackWithParam(result);
                        }
                    });
                }
            });
        }
        else {
            callback.callbackWithParam(null);
        }
    };
    UserParametersService.prototype.getParameter = function (name, callback) {
    };
    return UserParametersService;
}());
UserParametersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */]])
], UserParametersService);

//# sourceMappingURL=userParameters.service.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterProvider = (function () {
    function FilterProvider(http) {
        this.http = http;
        console.log('Hello FilterProvider Provider');
    }
    return FilterProvider;
}());
FilterProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FilterProvider);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cognito_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegistrationService = (function () {
    function UserRegistrationService(cUtil) {
        this.cUtil = cUtil;
    }
    UserRegistrationService.prototype.register = function (user, callback) {
        console.log("user: " + user);
        var attributeList = [];
        var dataEmail = {
            Name: 'email',
            Value: user.email
        };
        var dataNickname = {
            Name: 'nickname',
            Value: user.name
        };
        attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail));
        attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataNickname));
        this.cUtil.getUserPool().signUp(user.email, user.password, attributeList, null, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                console.log("registered user: " + result);
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.confirmRegistration = function (username, confirmationCode, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.resendCode = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
    };
    return UserRegistrationService;
}());
UserRegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__cognito_service__["a" /* CognitoUtil */]])
], UserRegistrationService);

//# sourceMappingURL=userRegistration.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_auth_login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_register_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_userLogin_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {AwsUtil} from "../../providers/aws.service";
//import {CognitoUtil} from "../../providers/cognito.service";

var WelcomePage = (function () {
    function WelcomePage(navCtrl, eventService, userService) {
        this.navCtrl = navCtrl;
        this.eventService = eventService;
        this.userService = userService;
        this.loginpage = __WEBPACK_IMPORTED_MODULE_2__pages_auth_login_component__["a" /* LoginComponent */];
        this.registerPage = __WEBPACK_IMPORTED_MODULE_3__pages_auth_register_component__["a" /* RegisterComponent */];
        console.log('welcome');
    }
    WelcomePage.prototype.isLoggedInCallback = function (message, isLoggedIn) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
        }
        else {
            console.log('User not loggedin');
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            //this.navCtrl.setRoot(WelcomePage);
        }
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        this.userService.isAuthenticated(this);
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(this.loginpage);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(this.registerPage, {}, { animate: false });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\welcome\welcome.html"*/'\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>welcome</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <img src="https://d15mj6e6qmt1na.cloudfront.net/i/27345095/1500x375/c" class="logo"/>\n\n    <h1> Welcome to Astro </h1>\n\n    <div>Discover some interesting things</div>\n\n    <div class = "button-bottom">\n\n    <button ion-button block class="marginTop" (click)="signup()">Signup</button>\n\n    <button ion-button block color="lightprimary" (click)="login()">Login</button></div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_6__providers_userLogin_service__["a" /* UserLoginService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resendCode_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmRegistrationComponent = (function () {
    function ConfirmRegistrationComponent(nav, userRegistration, navParam, alertCtrl) {
        this.nav = nav;
        this.userRegistration = userRegistration;
        this.navParam = navParam;
        this.alertCtrl = alertCtrl;
        console.log("Entered ConfirmRegistrationComponent");
        console.log("nav param email: " + this.navParam.get("email"));
    }
    ConfirmRegistrationComponent.prototype.ionViewLoaded = function () {
        console.log("Entered ionViewDidEnter");
        console.log("email: " + this.navParam.get("email"));
    };
    ConfirmRegistrationComponent.prototype.onConfirmRegistration = function () {
        console.log("Confirming registration");
        this.userRegistration.confirmRegistration(this.navParam.get("email"), this.confirmationCode, this);
    };
    /**
     * callback
     * @param message
     * @param result
     */
    ConfirmRegistrationComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Confirmation", message);
        }
        else {
            console.log("Entered ConfirmRegistrationComponent");
            var email = this.navParam.get("email");
            if (email != null)
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */], {
                    'email': email
                });
            else
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]);
        }
    };
    ConfirmRegistrationComponent.prototype.navToResendCode = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__resendCode_component__["a" /* ResendCodeComponent */]);
    };
    ConfirmRegistrationComponent.prototype.navToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */]);
    };
    ConfirmRegistrationComponent.prototype.navToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]);
    };
    ConfirmRegistrationComponent.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return ConfirmRegistrationComponent;
}());
ConfirmRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\confirmRegistration.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            User Confirmation\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Confirmation Code</ion-label>\n\n            <ion-input [(ngModel)]="confirmationCode" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block large outline (click)="onConfirmRegistration()">Confirm</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-30>\n\n                <button ion-button clear small (click)="navToResendCode()">Resend Code</button>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <button ion-button clear small (click)="navToRegister()">Registration</button>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <button ion-button clear small (click)="navToLogin()">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\confirmRegistration.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], ConfirmRegistrationComponent);

//# sourceMappingURL=confirmRegistration.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResendCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmRegistration_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResendCodeComponent = (function () {
    function ResendCodeComponent(nav, registrationService, alertCtrl) {
        this.nav = nav;
        this.registrationService = registrationService;
        this.alertCtrl = alertCtrl;
    }
    ResendCodeComponent.prototype.resendCode = function () {
        this.registrationService.resendCode(this.email, this);
    };
    ResendCodeComponent.prototype.cognitoCallback = function (error, result) {
        if (error != null) {
            this.doAlert("Resend", "Something went wrong...please try again");
        }
        else {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__confirmRegistration_component__["a" /* ConfirmRegistrationComponent */], {
                'email': this.email
            });
        }
    };
    ResendCodeComponent.prototype.navToRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]);
    };
    ResendCodeComponent.prototype.navToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]);
    };
    ResendCodeComponent.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return ResendCodeComponent;
}());
ResendCodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\resendCode.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Resend code\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block outline large (click)="resendCode()">Send code</button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToRegister()">Sign up</button>\n\n            </ion-col>\n\n            <ion-col width-50>\n\n                <button ion-button clear small (click)="navToLogin()">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\auth\resendCode.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_userRegistration_service__["a" /* UserRegistrationService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], ResendCodeComponent);

//# sourceMappingURL=resendCode.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__discover_discover__["a" /* DiscoverPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs>\n\n<ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n<ion-tab [root]="tab2Root" tabIcon="search"></ion-tab>\n\n<ion-tab [root]="tab3Root" tabIcon="calendar"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SQLite } from '@ionic-native/sqlite';  
var CalendarPage = (function () {
    function CalendarPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    CalendarPage.prototype.loadEvents = function () {
        this.eventSource = this.createRandomEvents();
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    CalendarPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\calendar\calendar.html"*/'<ion-header class = " bar bar-subheader">\n\n  <ion-navbar >\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Calendar</ion-title>\n\n    </ion-navbar>\n\n  \n\n    <ion-row>\n\n      <ion-col width-50><ion-title>{{viewTitle}}</ion-title></ion-col>\n\n    </ion-row>\n\n  <ion-grid class="button-group">\n\n  <ion-row class = "padding">\n\n      <ion-buttons end>\n\n          \n\n          <ion-col width-50><button  ion-button [disabled]="isToday" (click)="today()">Today</button></ion-col>\n\n          <ion-col width-50><button ion-button (click)="changeMode(\'month\')">M</button></ion-col>\n\n          <ion-col width-50><button ion-button (click)="changeMode(\'week\')">W</button></ion-col>\n\n          <ion-col width-50><button  ion-button (click)="changeMode(\'day\')">D</button></ion-col>\n\n          <ion-col width-50><button ion-button (click)="loadEvents()">Load Events</button></ion-col>\n\n      </ion-buttons>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content class="has-header">\n\n  <ion-card class= "padding-top">\n\n  <calendar [eventSource]="eventSource"\n\n            [calendarMode]="calendar.mode"\n\n            [currentDate]="calendar.currentDate"\n\n            (onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n            (onEventSelected)="onEventSelected($event)"\n\n            (onTitleChanged)="onViewTitleChanged($event)"\n\n            (onTimeSelected)="onTimeSelected($event)"\n\n            step="30">\n\n  </calendar>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\calendar\calendar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupEventPage = (function () {
    function PopupEventPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    PopupEventPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PopupEventPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    return PopupEventPage;
}());
PopupEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-popup-event',template:/*ion-inline-start:"C:\Users\Digital New\arsb-events-mobile\src\pages\popup-event\popup-event.html"*/'<ion-header>\n  <ion-navbar color="transparent">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title">{{event.eventname}}</ion-input>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>Start</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>End</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>All Day?</ion-label>\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n \n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Add Event\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\Digital New\arsb-events-mobile\src\pages\popup-event\popup-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], PopupEventPage);

//# sourceMappingURL=popup-event.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map