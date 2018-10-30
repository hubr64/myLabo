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

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.getCurrentUser();
        if (currentUser) {
            if (state.url.indexOf("users") >= 0) {
                if (currentUser.profil != _helpers_global__WEBPACK_IMPORTED_MODULE_3__["userProfilAdmin"]) {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, snackBar) {
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
        // Succeeds when there is a response; ignore other events
        function (event) { return null; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) {
            if (error.status === 0) {
                _this.snackBar.open('Le serveur est inaccessible ! Veuillez réessayer ultérieurement.', 'Compris');
            }
            if (error.status === 401) {
                // auto logout if 401 response returned from api
                //this.authenticationService.logout();
                //location.reload(true);
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/global.ts":
/*!************************************!*\
  !*** ./src/app/_helpers/global.ts ***!
  \************************************/
/*! exports provided: sep, version, userProfilAdmin, userProfilUser, userProfilRead, serverURL, requestRefreshTimer, activeScreenDebugMessage, dangers, separatorKeysCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfilAdmin", function() { return userProfilAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfilUser", function() { return userProfilUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfilRead", function() { return userProfilRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverURL", function() { return serverURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestRefreshTimer", function() { return requestRefreshTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeScreenDebugMessage", function() { return activeScreenDebugMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangers", function() { return dangers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separatorKeysCodes", function() { return separatorKeysCodes; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");

'use strict';
var sep = '/';
var version = "0.1";
var userProfilAdmin = 'ADMIN';
var userProfilUser = 'USER';
var userProfilRead = 'READONLY';
var serverURL = 'http://mylabo.home:8080';
var requestRefreshTimer = 1000 * 60 * 5; //5 minutes
var activeScreenDebugMessage = false;
var dangers = [
    { logo: "explosion", titre: "Danger d'explosion", description: "Les produits peuvent exploser au contact d’une flamme, d’une étincelle, d’électricité statique, sous l’effet de la chaleur, d’un choc, de frottements… Ce sont par exemple certaines matières explosibles, auto-réactives ou certains peroxydes organiques." },
    { logo: "inflammable", titre: "Danger d'inflammabilité", description: "Les produits peuvent s’enflammer au contact d’une flamme, d’une étincelle, d’électricité statique… Mais aussi sous l’effet de la chaleur, de frottements, au contact de l’air (= composés pyrophoriques) ou encore au contact de l’eau s’ils dégagent des gaz. (voir également Classification des produits inflammables système pré-existant et CLP)" },
    { logo: "comburant", titre: "Danger produits comburant", description: "Les produits comburants (oxydants) qui peuvent provoquer ou aggraver un incendie, ou même provoquer une explosion en présence de produits inflammables." },
    { logo: "pression", titre: "Gaz sous pression", description: "Ils peuvent exploser sous l’effet de la chaleur. Il s’agit de gaz comprimés, de gaz liquéfiés et de gaz dissous. Les gaz liquéfiés réfrigérés peuvent, quant à eux, être responsables de brûlures ou de blessures liées au froid appelées brûlures cryogéniques." },
    { logo: "corrosif", titre: "Danger de corrosion", description: "Les produits corrosifs provoquent la destruction « non spécifique des tissus » (peau, muqueuses et yeux et voie digestive) par contact ou projection." },
    { logo: "toxique", titre: "Danger de toxicité aiguë", description: "Les produits portant ce pictogramme empoisonnent rapidement, même à faible dose et peuvent provoquer des effets très variés sur l’organisme : nausées, vomissements, maux de tête, perte de connaissance ou d’autres troubles plus importants entraînant la mort. Toxicité par voie orale, cutanée ou par inhalation." },
    { logo: "CMR", titre: "CMR", description: "Utilisé pour signaler des produits cancérogènes, mutagènes, reprotoxiques (CMR) et tous produits pouvant modifier le fonctionnement de certains organes comme le foie, le système nerveux, etc… Selon les produits, ces effets toxiques apparaissent si l’on a été exposé une seule fois ou bien à plusieurs reprises. D’autres produits peuvent également entraîner des effets graves sur les poumons pouvant être mortels s’ils pénètrent dans les voies respiratoires. Il regroupe également les produits qui provoquent des allergies respiratoires comme l’asthme." },
    { logo: "nocif", titre: "Nocif / irritant", description: "Ce pictogramme signale lui aussi des dangers sur la santé. Les produits chimiques peuvent provoquer l’un ou plusieurs des effets suivants : empoisonnement à forte dose, irritation des yeux, de la gorge, du nez ou de la peau. Ils peuvent provoquer des allergies cutanées (type eczémas) et provoquer des états de somnolence ou de vertige." },
    { logo: "pollution", titre: "Danger pour l'environnement", description: "Notamment pour les organismes du milieu aquatique (poissons, crustacés, algues…) ou pour la couche d’ozone. Ce pictogramme concerne également l’Air, l’Eau et le Sol." }
];
var separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];


/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "JWT " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/categorie.ts":
/*!**************************************!*\
  !*** ./src/app/_models/categorie.ts ***!
  \**************************************/
/*! exports provided: Categorie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categorie", function() { return Categorie; });
var Categorie = /** @class */ (function () {
    function Categorie() {
    }
    return Categorie;
}());



/***/ }),

/***/ "./src/app/_models/fiche.ts":
/*!**********************************!*\
  !*** ./src/app/_models/fiche.ts ***!
  \**********************************/
/*! exports provided: Fiche */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fiche", function() { return Fiche; });
var Fiche = /** @class */ (function () {
    function Fiche() {
    }
    return Fiche;
}());



/***/ }),

/***/ "./src/app/_models/marque.ts":
/*!***********************************!*\
  !*** ./src/app/_models/marque.ts ***!
  \***********************************/
/*! exports provided: Marque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marque", function() { return Marque; });
var Marque = /** @class */ (function () {
    function Marque() {
    }
    return Marque;
}());



/***/ }),

/***/ "./src/app/_models/objet.ts":
/*!**********************************!*\
  !*** ./src/app/_models/objet.ts ***!
  \**********************************/
/*! exports provided: Objet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objet", function() { return Objet; });
var Objet = /** @class */ (function () {
    function Objet() {
    }
    return Objet;
}());



/***/ }),

/***/ "./src/app/_pipes/categorie-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/_pipes/categorie-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: CategorieFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieFilterPipe", function() { return CategorieFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategorieFilterPipe = /** @class */ (function () {
    function CategorieFilterPipe() {
    }
    CategorieFilterPipe.prototype.transform = function (items, filter) {
        if (!items) {
            return items;
        }
        if (!filter) {
            return items.filter(function (item) { return item.parent === null || item.parent === undefined; });
        }
        else {
            return items.filter(function (item) { return item.parent === filter._id; });
        }
    };
    CategorieFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'categorieFilter' })
    ], CategorieFilterPipe);
    return CategorieFilterPipe;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.userUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_3__["serverURL"] + "/users";
        this.isAuthenticate = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var localUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localUser) {
            this.isAuthenticate = true;
            this.change.emit(this.isAuthenticate);
        }
    }
    AuthenticationService.prototype.log = function (message) {
        this.messageService.add('AuthenticationService: ' + message);
    };
    AuthenticationService.prototype.register = function (user) {
        var url = this.userUrl + "/register";
        return this.http.post(url, user);
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.userUrl + "/authenticate";
        return this.http.post(url, { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.isAuthenticate = !_this.isAuthenticate;
                _this.change.emit(_this.isAuthenticate);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        var localUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localUser)
            return localUser.user;
        else
            return undefined;
    };
    AuthenticationService.prototype.getCurrentToken = function () {
        var localUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localUser)
            return localUser.token;
        else
            return undefined;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isAuthenticate = !this.isAuthenticate;
        this.change.emit(this.isAuthenticate);
    };
    AuthenticationService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.userUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) { return _this.log("Liste des utilisateurs"); }));
    };
    AuthenticationService.prototype.updateUser = function (user) {
        var _this = this;
        var url = this.userUrl + "/" + user._id;
        return this.http.put(url, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("Mise \u00E0 jour de l'utilisateur _id=" + user._id); }));
    };
    AuthenticationService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'string' ? user : user._id;
        var url = this.userUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("Suppression de l'utilisateur _id=" + id); }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AuthenticationService.prototype, "change", void 0);
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/categorie.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/categorie.service.ts ***!
  \************************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CategorieService = /** @class */ (function () {
    function CategorieService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.categoriesUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_5__["serverURL"] + "/categories";
    }
    CategorieService.prototype.log = function (message) {
        this.messageService.add('CategorieService: ' + message);
    };
    CategorieService.prototype.getCategories = function () {
        var _this = this;
        this.log('Get catégories from: ' + this.categoriesUrl);
        return this.http.get(this.categoriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (categories) { return _this.log("R\u00E9cup\u00E9ration des cat\u00E9gories"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategories', [], 'Impossible de récupérer la liste des catégories !')));
    };
    CategorieService.prototype.getCategorie = function (_id) {
        var _this = this;
        var url = this.categoriesUrl + "/" + _id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("R\u00E9cup\u00E9ration de la cat\u00E9gorie _id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCategorie _id=" + _id)));
    };
    CategorieService.prototype.updateCategorie = function (categorie) {
        var _this = this;
        var url = this.categoriesUrl + "/" + categorie._id;
        return this.http.put(url, categorie, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Mise \u00E0 jour de la cat\u00E9gorie _id=" + categorie._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateCategorie')));
    };
    CategorieService.prototype.addCategorie = function (categorie) {
        var _this = this;
        return this.http.post(this.categoriesUrl, categorie, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (categorie) { return _this.log("Ajout de la cat\u00E9gorie _id=" + categorie._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addCategorie')));
    };
    CategorieService.prototype.deleteCategorie = function (categorie) {
        var _this = this;
        var id = typeof categorie === 'string' ? categorie : categorie._id;
        var url = this.categoriesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Suppression de la cat\u00E9gorie _id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteCategorie')));
    };
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    CategorieService.prototype.handleError = function (operation, result, message) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // log to console
            //console.error(error);
            //Affichage du msg d'erreur
            _this.log(operation + " a \u00E9chou\u00E9 : " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    CategorieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CategorieService);
    return CategorieService;
}());



/***/ }),

/***/ "./src/app/_services/cherche.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/cherche.service.ts ***!
  \**********************************************/
/*! exports provided: ChercheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChercheService", function() { return ChercheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ChercheService = /** @class */ (function () {
    function ChercheService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.chercheUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_4__["serverURL"] + "/search";
    }
    ChercheService.prototype.log = function (message) {
        this.messageService.add('ChercheService: ' + message);
    };
    ChercheService.prototype.getResultats = function (critere) {
        var _this = this;
        this.log('Get recherches from: ' + this.chercheUrl);
        return this.http.get(this.chercheUrl + "/" + critere).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resultats) { return _this.log("R\u00E9cup\u00E9ration des r\u00E9sultats de recherche"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getResultats', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ChercheService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // log to console
            console.error(error);
            //Affichage du msg d'erreur
            _this.log(operation + " a \u00E9chou\u00E9 : " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ChercheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ChercheService);
    return ChercheService;
}());



/***/ }),

/***/ "./src/app/_services/export-csv.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/export-csv.service.ts ***!
  \*************************************************/
/*! exports provided: ExportCsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportCsvService", function() { return ExportCsvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExportCsvService = /** @class */ (function () {
    function ExportCsvService() {
    }
    ExportCsvService.prototype.JsonToCSV = function (json) {
        var jsonTMp = JSON.parse(json);
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(jsonTMp[0]);
        var csv = jsonTMp.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(';'); });
        csv.unshift(header.join(';'));
        csv = csv.join('\r\n');
        return csv;
    };
    ExportCsvService.prototype.downloadFile = function (json, fileName) {
        var jsonString = this.JsonToCSV(json);
        var blob = new Blob(['\ufeff' + jsonString], { type: 'text/csv;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    ExportCsvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExportCsvService);
    return ExportCsvService;
}());



/***/ }),

/***/ "./src/app/_services/fiche.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/fiche.service.ts ***!
  \********************************************/
/*! exports provided: FicheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheService", function() { return FicheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FicheService = /** @class */ (function () {
    function FicheService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.fichesUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_6__["serverURL"] + "/fiches";
    }
    FicheService.prototype.log = function (message) {
        this.messageService.add('FicheService: ' + message);
    };
    FicheService.prototype.getFiches = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
        for (var key in filter) {
            params.set(key, filter[key]);
        }
        return this.http.get(this.fichesUrl + '?' + params.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fiches) { return _this.log("Liste des fiches"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFiches', [])));
    };
    FicheService.prototype.getFiche = function (_id) {
        var _this = this;
        var url = this.fichesUrl + "/" + _id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("R\u00E9cup\u00E9ration de la fiche _id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getFiche _id=" + _id)));
    };
    FicheService.prototype.updateFiche = function (fiche) {
        var _this = this;
        var url = this.fichesUrl + "/" + fiche._id;
        return this.http.put(url, fiche, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Mise \u00E0 jour de la fiche _id=" + fiche._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateFiche')));
    };
    FicheService.prototype.addFiche = function (fiche) {
        var _this = this;
        return this.http.post(this.fichesUrl, fiche, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fiche) { return _this.log("Ajout de la fiche _id=" + fiche._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addFiche')));
    };
    FicheService.prototype.deleteFiche = function (fiche) {
        var _this = this;
        var id = typeof fiche === 'string' ? fiche : fiche._id;
        var url = this.fichesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Suppression de la fiche _id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteFiche')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    FicheService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // log to console
            console.error(error);
            //Affichage du msg d'erreur
            _this.log(operation + " a \u00E9chou\u00E9 : " + error.error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    FicheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], FicheService);
    return FicheService;
}());



/***/ }),

/***/ "./src/app/_services/marque.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/marque.service.ts ***!
  \*********************************************/
/*! exports provided: MarqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueService", function() { return MarqueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MarqueService = /** @class */ (function () {
    function MarqueService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.marquesUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_5__["serverURL"] + "/marques";
    }
    MarqueService.prototype.log = function (message) {
        this.messageService.add('MarqueService: ' + message);
    };
    MarqueService.prototype.getMarques = function () {
        var _this = this;
        this.log('Get fournisseurs from: ' + this.marquesUrl);
        return this.http.get(this.marquesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (marques) { return _this.log("R\u00E9cup\u00E9ration des fournisseurs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMarques', [])));
    };
    MarqueService.prototype.getMarque = function (_id) {
        var _this = this;
        var url = this.marquesUrl + "/" + _id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("R\u00E9cup\u00E9ration du fournisseur _id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getMarque _id=" + _id)));
    };
    MarqueService.prototype.updateMarque = function (marque) {
        var _this = this;
        var url = this.marquesUrl + "/" + marque._id;
        return this.http.put(url, marque, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Mise \u00E0 jour du fournisseur _id=" + marque._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateMarque')));
    };
    MarqueService.prototype.addMarque = function (marque) {
        var _this = this;
        return this.http.post(this.marquesUrl, marque, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (marque) { return _this.log("Ajout du fournisseur _id=" + marque._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addMarque')));
    };
    MarqueService.prototype.deleteMarque = function (marque) {
        var _this = this;
        var id = typeof marque === 'string' ? marque : marque._id;
        var url = this.marquesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Suppression du fournisseur _id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteMarque')));
    };
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    MarqueService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // log to console
            console.error(error);
            //Affichage du msg d'erreur
            _this.log(operation + " a \u00E9chou\u00E9 : " + error.error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    MarqueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], MarqueService);
    return MarqueService;
}());



/***/ }),

/***/ "./src/app/_services/message.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.display = _helpers_global__WEBPACK_IMPORTED_MODULE_1__["activeScreenDebugMessage"];
    }
    MessageService.prototype.add = function (message) {
        this.messages.unshift({ time: Date.now(), message: message });
        if (!this.display) {
            console.log(Date.now() + " : " + message);
        }
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/_services/objet.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/objet.service.ts ***!
  \********************************************/
/*! exports provided: ObjetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetService", function() { return ObjetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ObjetService = /** @class */ (function () {
    function ObjetService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.objetsUrl = _helpers_global__WEBPACK_IMPORTED_MODULE_6__["serverURL"] + "/objets";
    }
    ObjetService.prototype.log = function (message) {
        this.messageService.add('ObjetService: ' + message);
    };
    ObjetService.prototype.getObjets = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
        for (var key in filter) {
            params.set(key, filter[key]);
        }
        return this.http.get(this.objetsUrl + '?' + params.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (objets) { return _this.log("Liste des objets"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getObjets', [])));
    };
    ObjetService.prototype.getObjetsCount = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
        for (var key in filter) {
            params.set(key, filter[key]);
        }
        var url = this.objetsUrl + "/count";
        return this.http.get(url + '?' + params.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (count) { return _this.log("Nombre d'objets"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getObjetsCount', [])));
    };
    ObjetService.prototype.getObjetsAlert = function () {
        var _this = this;
        var url = this.objetsUrl + "/alert";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (objets) { return _this.log("Liste des objets en alerte"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getObjets', [])));
    };
    ObjetService.prototype.getObjet = function (_id) {
        var _this = this;
        var url = this.objetsUrl + "/" + _id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("R\u00E9cup\u00E9ration de l'objet _id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getObjet _id=" + _id)));
    };
    ObjetService.prototype.updateObjet = function (objet) {
        var _this = this;
        var url = this.objetsUrl + "/" + objet._id;
        return this.http.put(url, objet, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Mise \u00E0 jour de l'objet _id=" + objet._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateObjet')));
    };
    ObjetService.prototype.addObjet = function (objet) {
        var _this = this;
        return this.http.post(this.objetsUrl, objet, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (objet) { return _this.log("Ajout de l'objet _id=" + objet._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addObjet')));
    };
    ObjetService.prototype.deleteObjet = function (objet) {
        var _this = this;
        var id = typeof objet === 'string' ? objet : objet._id;
        var url = this.objetsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Suppression de l'objet _id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteObjet')));
    };
    ObjetService.prototype.importObjets = function (objets) {
        var _this = this;
        var url = this.objetsUrl + "/import";
        return this.http.post(url, objets, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (objets) { return _this.log("Imports des objets"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('importObjets')));
    };
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    ObjetService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // log to console
            //console.error(error);
            //Affichage du msg d'erreur
            _this.log(operation + " a \u00E9chou\u00E9 : " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ObjetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ObjetService);
    return ObjetService;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objets_objets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objets/objets.component */ "./src/app/objets/objets.component.ts");
/* harmony import */ var _objet_detail_objet_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objet-detail/objet-detail.component */ "./src/app/objet-detail/objet-detail.component.ts");
/* harmony import */ var _objets_import_objets_import_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objets-import/objets-import.component */ "./src/app/objets-import/objets-import.component.ts");
/* harmony import */ var _marques_marques_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marques/marques.component */ "./src/app/marques/marques.component.ts");
/* harmony import */ var _marque_detail_marque_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marque-detail/marque-detail.component */ "./src/app/marque-detail/marque-detail.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categorie_detail_categorie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorie-detail/categorie-detail.component */ "./src/app/categorie-detail/categorie-detail.component.ts");
/* harmony import */ var _fiches_fiches_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fiches/fiches.component */ "./src/app/fiches/fiches.component.ts");
/* harmony import */ var _fiche_detail_fiche_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fiche-detail/fiche-detail.component */ "./src/app/fiche-detail/fiche-detail.component.ts");
/* harmony import */ var _navigateur_navigateur_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigateur/navigateur.component */ "./src/app/navigateur/navigateur.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: '/browse', pathMatch: 'full' },
    { path: 'objets', component: _objets_objets_component__WEBPACK_IMPORTED_MODULE_2__["ObjetsComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'objets/import', component: _objets_import_objets_import_component__WEBPACK_IMPORTED_MODULE_4__["ObjetsImportComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'objet/:_id', component: _objet_detail_objet_detail_component__WEBPACK_IMPORTED_MODULE_3__["ObjetDetailComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'marques', component: _marques_marques_component__WEBPACK_IMPORTED_MODULE_5__["MarquesComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'marque/:_id', component: _marque_detail_marque_detail_component__WEBPACK_IMPORTED_MODULE_6__["MarqueDetailComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'categorie/:_id', component: _categorie_detail_categorie_detail_component__WEBPACK_IMPORTED_MODULE_8__["CategorieDetailComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'fiches', component: _fiches_fiches_component__WEBPACK_IMPORTED_MODULE_9__["FichesComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'fiche/:_id', component: _fiche_detail_fiche_detail_component__WEBPACK_IMPORTED_MODULE_10__["FicheDetailComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'browse', component: _navigateur_navigateur_component__WEBPACK_IMPORTED_MODULE_11__["NavigateurComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<app-messages></app-messages>\n<app-alert></app-alert>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.title = 'myLabo';
        this.localUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matIconRegistry.addSvgIcon("ml-logo", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/myLabo.svg"));
        this.matIconRegistry.addSvgIcon("ml-professeur", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/professeur.svg"));
        this.matIconRegistry.addSvgIcon("ml-eleve", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eleve.svg"));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/marque.service */ "./src/app/_services/marque.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _services_fiche_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/fiche.service */ "./src/app/_services/fiche.service.ts");
/* harmony import */ var _services_cherche_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/cherche.service */ "./src/app/_services/cherche.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_export_csv_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/export-csv.service */ "./src/app/_services/export-csv.service.ts");
/* harmony import */ var _pipes_categorie_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_pipes/categorie-filter.pipe */ "./src/app/_pipes/categorie-filter.pipe.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _navigateur_navigateur_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navigateur/navigateur.component */ "./src/app/navigateur/navigateur.component.ts");
/* harmony import */ var _objets_objets_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./objets/objets.component */ "./src/app/objets/objets.component.ts");
/* harmony import */ var _objet_detail_objet_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./objet-detail/objet-detail.component */ "./src/app/objet-detail/objet-detail.component.ts");
/* harmony import */ var _objets_alert_objets_alert_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./objets-alert/objets-alert.component */ "./src/app/objets-alert/objets-alert.component.ts");
/* harmony import */ var _objets_import_objets_import_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./objets-import/objets-import.component */ "./src/app/objets-import/objets-import.component.ts");
/* harmony import */ var _marques_marques_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marques/marques.component */ "./src/app/marques/marques.component.ts");
/* harmony import */ var _marque_detail_marque_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marque-detail/marque-detail.component */ "./src/app/marque-detail/marque-detail.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categorie_detail_categorie_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./categorie-detail/categorie-detail.component */ "./src/app/categorie-detail/categorie-detail.component.ts");
/* harmony import */ var _fiches_fiches_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fiches/fiches.component */ "./src/app/fiches/fiches.component.ts");
/* harmony import */ var _fiche_detail_fiche_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fiche-detail/fiche-detail.component */ "./src/app/fiche-detail/fiche-detail.component.ts");
/* harmony import */ var _cherche_cherche_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cherche/cherche.component */ "./src/app/cherche/cherche.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _my_my_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./my/my.component */ "./src/app/my/my.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _objets_navigateur_objets_navigateur_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./objets-navigateur/objets-navigateur.component */ "./src/app/objets-navigateur/objets-navigateur.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _objets_objets_component__WEBPACK_IMPORTED_MODULE_24__["ObjetsComponent"],
                _objet_detail_objet_detail_component__WEBPACK_IMPORTED_MODULE_25__["ObjetDetailComponent"],
                _marques_marques_component__WEBPACK_IMPORTED_MODULE_28__["MarquesComponent"],
                _marque_detail_marque_detail_component__WEBPACK_IMPORTED_MODULE_29__["MarqueDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"],
                _objets_alert_objets_alert_component__WEBPACK_IMPORTED_MODULE_26__["ObjetsAlertComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_30__["CategoriesComponent"],
                _categorie_detail_categorie_detail_component__WEBPACK_IMPORTED_MODULE_31__["CategorieDetailComponent"],
                _navigateur_navigateur_component__WEBPACK_IMPORTED_MODULE_23__["NavigateurComponent"],
                _pipes_categorie_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["CategorieFilterPipe"],
                _cherche_cherche_component__WEBPACK_IMPORTED_MODULE_34__["ChercheComponent"],
                _objets_import_objets_import_component__WEBPACK_IMPORTED_MODULE_27__["ObjetsImportComponent"],
                _fiches_fiches_component__WEBPACK_IMPORTED_MODULE_32__["FichesComponent"],
                _fiche_detail_fiche_detail_component__WEBPACK_IMPORTED_MODULE_33__["FicheDetailComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_22__["AlertComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                _my_my_component__WEBPACK_IMPORTED_MODULE_36__["MyComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_37__["RegisterComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_38__["UsersComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_39__["HomeComponent"],
                _objets_navigateur_objets_navigateur_component__WEBPACK_IMPORTED_MODULE_40__["ObjetsNavigateurComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"]
            ],
            providers: [
                _services_objet_service__WEBPACK_IMPORTED_MODULE_6__["ObjetService"],
                _services_marque_service__WEBPACK_IMPORTED_MODULE_7__["MarqueService"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
                _services_categorie_service__WEBPACK_IMPORTED_MODULE_9__["CategorieService"],
                _services_fiche_service__WEBPACK_IMPORTED_MODULE_10__["FicheService"],
                _services_cherche_service__WEBPACK_IMPORTED_MODULE_11__["ChercheService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services_export_csv_service__WEBPACK_IMPORTED_MODULE_14__["ExportCsvService"],
                _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__["JwtInterceptor"], multi: true },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 5000 } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            entryComponents: [_objets_navigateur_objets_navigateur_component__WEBPACK_IMPORTED_MODULE_40__["ObjetsNavigateurComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categorie-detail/categorie-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-detail/categorie-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section,h1{\r\n  margin:10px auto;\r\n  width:90%;\r\n}\r\nh1{\r\n  margin-top:15px;\r\n}\r\nsection .mat-form-field  {\r\n  width: 100%;\r\n  margin:5px 0;\r\n}\r\nsection .mat-form-field.not-full{\r\n  width:auto;\r\n  margin:5px;\r\n}"

/***/ }),

/***/ "./src/app/categorie-detail/categorie-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/categorie-detail/categorie-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <form [formGroup]=\"categorieForm\" (ngSubmit)=\"save()\">\n        <mat-form-field>\n            <mat-label>Nom</mat-label>\n            <input matInput placeholder=\"Nom\" id=\"nom\" formControlName=\"nom\" required>\n            <mat-hint align=\"end\">Nom de la catégorie</mat-hint>\n            <mat-error *ngIf=\"nom.errors?.required\">Le nom est obligatoire.</mat-error>\n            <mat-error *ngIf=\"nom.errors?.minlength\">Le nom doit être d'au moins 5 caractères.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Mère</mat-label>\n            <mat-select placeholder=\"Catégorie mère\" [compareWith]='compareCategories' formControlName=\"parent\" id=\"parent\">\n                <mat-option *ngFor=\"let c of categories\" [value]=\"c\" [disabled]=\"c._id==categorie?._id\">{{c.nom}}</mat-option>\n            </mat-select>\n            <mat-hint align=\"end\">Catégorie chapeau de la catégorie actuelle</mat-hint>\n        </mat-form-field>\n        <img *ngIf=\"categorie\"height=\"50\" src=\"/assets/categories/{{categorie._id}}_\" alt=\"\">\n        <div class=\"button-group\">\n            <button mat-flat-button color=\"accent\" type=\"submit\" [disabled]=\"!categorieForm.valid\">Enregistrer</button>\n            <button mat-flat-button type=\"button\" (click)=\"goBack()\">Retour</button>\n        </div>\n    </form>\n\n    <mat-tab-group *ngIf=\"categorie\">\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon>group_work</mat-icon>&nbsp;\n                <span matBadge=\"{{objetsCount}}\" matBadgeOverlap=\"false\">Objets liés</span>\n            </ng-template>\n            <app-objets [categorie]=\"categorie\" (countObjet)=\"onObjetCount($event)\"></app-objets>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon>description</mat-icon>&nbsp;\n                <span matBadge=\"{{fichesCount}}\" matBadgeOverlap=\"false\">Fiches liées</span>\n            </ng-template>\n            <app-fiches [categorie]=\"categorie\" (countFiche)=\"onFicheCount($event)\"></app-fiches>\n        </mat-tab>\n    </mat-tab-group>\n\n</section>\n"

/***/ }),

/***/ "./src/app/categorie-detail/categorie-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/categorie-detail/categorie-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: CategorieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieDetailComponent", function() { return CategorieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_categorie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/categorie */ "./src/app/_models/categorie.ts");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategorieDetailComponent = /** @class */ (function () {
    function CategorieDetailComponent(formBuilder, route, categorieService, location) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.categorieService = categorieService;
        this.location = location;
        this.objetsCount = 0;
        this.fichesCount = 0;
    }
    CategorieDetailComponent.prototype.ngOnInit = function () {
        this.categorieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'nom': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)
            ]),
            'parent': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.getCategories();
        this.getCategorie();
    };
    Object.defineProperty(CategorieDetailComponent.prototype, "nom", {
        get: function () { return this.categorieForm.get('nom'); },
        enumerable: true,
        configurable: true
    });
    CategorieDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CategorieDetailComponent.prototype.getCategorie = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        if (_id != 'new') {
            this.subscription = this.categorieService.getCategorie(_id).subscribe(function (categorie) {
                _this.categorie = categorie;
                _this.categorieForm.patchValue({
                    _id: categorie._id,
                    nom: categorie.nom,
                    parent: categorie.parent
                });
            });
        }
        else {
            this.categorieForm.patchValue({
                _id: "new",
                nom: "",
                parent: null
            });
        }
    };
    CategorieDetailComponent.prototype.compareCategories = function (c1, c2) {
        return c1 && c2 ? c1._id === c2._id : c1 === c2;
    };
    CategorieDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.subscription = this.categorieService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    CategorieDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.categorieForm.get('_id').value != 'new') {
            this.subscription = this.categorieService.updateCategorie(this.categorieForm.value).subscribe(function () { return _this.goBack(); });
        }
        else {
            this.subscription = this.categorieService.addCategorie(this.categorieForm.value).subscribe(function () { return _this.goBack(); });
        }
    };
    CategorieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategorieDetailComponent.prototype.onObjetCount = function (count) {
        this.objetsCount = count;
    };
    CategorieDetailComponent.prototype.onFicheCount = function (count) {
        this.fichesCount = count;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_categorie__WEBPACK_IMPORTED_MODULE_4__["Categorie"])
    ], CategorieDetailComponent.prototype, "categorie", void 0);
    CategorieDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categorie-detail',
            template: __webpack_require__(/*! ./categorie-detail.component.html */ "./src/app/categorie-detail/categorie-detail.component.html"),
            styles: [__webpack_require__(/*! ./categorie-detail.component.css */ "./src/app/categorie-detail/categorie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_categorie_service__WEBPACK_IMPORTED_MODULE_5__["CategorieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CategorieDetailComponent);
    return CategorieDetailComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nwidth:90%;\r\nmargin:10px auto;\r\n}\r\n.mat-form-field {\r\nwidth: 100%;\r\n}\r\ntable{\r\nwidth:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <!-- <div [ngStyle]=\"{'display': display}\" class=\"alert alert-warning\" role=\"alert\" *ngIf=\"categories?.length == 0\">\n    <button type=\"button\" (click)=\"display='none'\" class=\"close-alert\">×</button>\n    <mat-icon>warning</mat-icon>\n    <span>Aucune catégorie enregistrée !</span>\n  </div> -->\n\n  <mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\n\n  <div>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n\n      <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"nom\" matSortDirection=\"asc\">\n\n        <ng-container matColumnDef=\"icone\">\n          <th mat-header-cell *matHeaderCellDef> Icône </th>\n          <td mat-cell *matCellDef=\"let categorie\"> <img height=\"30\" src=\"./assets/categories/{{categorie._id}}_\" alt=\"\"> </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nom\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n          <td mat-cell *matCellDef=\"let categorie\"> {{categorie.nom}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let categorie\">\n              <button *ngIf=\"currentUser\" mat-button color=\"primary\" (click)=\"edit(categorie)\"><mat-icon>edit</mat-icon> Modifier</button>\n              <button *ngIf=\"currentUser.profil == 'ADMIN'\" mat-button color=\"warn\" (click)=\"delete(categorie)\"><mat-icon>delete</mat-icon> Supprimer</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[20, 40, 60]\" [pageIndex]=\"0\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\n\n    </div>\n  </div>\n\n  <div class=\"fab-button-group\">\n    <button *ngIf=\"displayactions\" mat-fab color=\"primary\" (click)=\"add()\" title=\"Ajouter\"><mat-icon>add</mat-icon></button>\n    <button *ngIf=\"displayactions\" mat-fab color=\"primary\" (click)=\"export()\" title=\"Exporter\"><mat-icon>backup</mat-icon></button>\n    <button *ngIf=\"!displayactions\" mat-fab color=\"primary\" (click)=\"displayactions = !displayactions\" title=\"Menu\"><mat-icon>more_vert</mat-icon></button>\n    <button *ngIf=\"displayactions\" mat-fab color=\"primary\" (click)=\"displayactions = !displayactions\" title=\"Menu\"><mat-icon>more_horiz</mat-icon></button>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_export_csv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/export-csv.service */ "./src/app/_services/export-csv.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categorieService, authenticationService, exportCsvService, router, location, snackBar) {
        this.categorieService = categorieService;
        this.authenticationService = authenticationService;
        this.exportCsvService = exportCsvService;
        this.router = router;
        this.location = location;
        this.snackBar = snackBar;
        this.displayactions = false;
        this.isLoading = false;
        this.displayedColumns = ['icone', 'nom', 'actions'];
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getCategories();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    CategoriesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.subscription = this.categorieService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](categories);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            if (categories.length == 0) {
                _this.snackBar.open('Aucune catégorie enregistrée !', 'Compris');
            }
            _this.isLoading = false;
        });
    };
    CategoriesComponent.prototype.edit = function (categorie) {
        this.router.navigate(['/categorie', categorie._id]);
    };
    CategoriesComponent.prototype.delete = function (categorie) {
        this.categories = this.categories.filter(function (c) { return c !== categorie; });
        this.dataSource.data = this.categories;
        this.subscription = this.categorieService.deleteCategorie(categorie).subscribe();
    };
    CategoriesComponent.prototype.add = function () {
        this.router.navigate(['/categorie/new']);
    };
    CategoriesComponent.prototype.onSelect = function (categorie) {
        this.selectedCategorie = categorie;
    };
    CategoriesComponent.prototype.export = function () {
        var jsonToCsv = [];
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var categorie = _a[_i];
            jsonToCsv.push({ 'Nom': categorie.nom, "Parent": categorie.parent ? categorie.parent.nom : null });
        }
        this.exportCsvService.downloadFile(JSON.stringify(jsonToCsv), "categories");
    };
    CategoriesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CategoriesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CategoriesComponent.prototype, "paginator", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_export_csv_service__WEBPACK_IMPORTED_MODULE_6__["ExportCsvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/cherche/cherche.component.css":
/*!***********************************************!*\
  !*** ./src/app/cherche/cherche.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.cherche{\r\nposition:absolute;\r\nright:5px;\r\ntop: 0;\r\n}\r\ndiv.cherche>span{\r\nposition:relative;\r\n}\r\n.mat-form-field{\r\nfont-size: 0.6em;\r\npadding-top: 5px;\r\n}\r\n.mat-card{\r\nposition: absolute;\r\ntop: 40px;\r\nright: 15px;\r\nz-index: 100;\r\nmin-width: 350px;\r\n}\r\n.mat-card-title > mat-icon{\r\n  cursor:pointer;\r\n}\r\nspan.critere-img{\r\nheight: 20px;\r\ndisplay: inline-block;\r\nfont-size: 0.5em;\r\nmargin-right: 5px;\r\n}\r\nspan.critere-img img{\r\nheight:100%;\r\n}"

/***/ }),

/***/ "./src/app/cherche/cherche.component.html":
/*!************************************************!*\
  !*** ./src/app/cherche/cherche.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cherche\">\n  <span>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Votre recherche</mat-label><input matInput [(ngModel)]=\"criteres\" (keyup)=\"onKey()\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    <mat-card *ngIf=\"criteres != ''\">\n      <mat-card-title>Résultats de la recherche <mat-icon (click)=\"clear()\">clear</mat-icon></mat-card-title>\n      <mat-card-subtitle *ngIf=\"resultats?.length == 0 &&  criteres != ''\">\n        Aucun résultat pour '<i>{{criteres}}</i>'...\n        <button mat-button color=\"primary\" routerLink=\"/objet/new\">Ajouter un objet ?</button>\n      </mat-card-subtitle>\n      <mat-card-content>\n      <mat-nav-list dense >\n          <a mat-list-item *ngFor=\"let resultat of resultats\" routerLink=\"/{{resultat.type}}/{{resultat._id}}\">\n             <span class=\"critere-img\"><img src=\"./assets/categories/{{resultat.img}}_\" alt=\"{{resultat.type| titlecase}}\"></span> <span>{{resultat.titre}}</span>\n          </a>\n      </mat-nav-list>\n    </mat-card-content>\n    </mat-card>\n  </span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cherche/cherche.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cherche/cherche.component.ts ***!
  \**********************************************/
/*! exports provided: ChercheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChercheComponent", function() { return ChercheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cherche_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/cherche.service */ "./src/app/_services/cherche.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChercheComponent = /** @class */ (function () {
    function ChercheComponent(chercheService) {
        this.chercheService = chercheService;
        this.criteres = "";
        this.resultats = [];
    }
    ChercheComponent.prototype.ngOnInit = function () {
    };
    ChercheComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChercheComponent.prototype.onKey = function () {
        var _this = this;
        if (this.criteres != "") {
            this.subscription = this.chercheService.getResultats(this.criteres).subscribe(function (resultats) { return _this.resultats = resultats; });
        }
        else {
            this.resultats = [];
        }
    };
    ChercheComponent.prototype.clear = function () {
        this.criteres = "";
    };
    ChercheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cherche',
            template: __webpack_require__(/*! ./cherche.component.html */ "./src/app/cherche/cherche.component.html"),
            styles: [__webpack_require__(/*! ./cherche.component.css */ "./src/app/cherche/cherche.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cherche_service__WEBPACK_IMPORTED_MODULE_1__["ChercheService"]])
    ], ChercheComponent);
    return ChercheComponent;
}());



/***/ }),

/***/ "./src/app/fiche-detail/fiche-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fiche-detail/fiche-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nmargin:10px auto;\r\nwidth:90%;\r\n}\r\nsection .mat-form-field  {\r\nwidth: 100%;\r\nmargin:5px 0;\r\n}\r\nsection .mat-form-field.not-full{\r\nwidth:auto;\r\nmargin:5px;\r\n}\r\n.mat-list-item {\r\nmargin-top:5px;\r\n}\r\n.mat-tab-body{\r\n\r\npadding: 5px;\r\n}\r\n.mat-mini-fab{\r\nmargin-bottom: 5px;\r\n}\r\n.ficheobjet{\r\n  width:100%;\r\n}\r\n.ficheobjet td:nth-child(1){\r\n  width:50px;\r\n}\r\n.ficheobjet td:nth-child(2){\r\n  width:20%;\r\n}\r\n.ficheobjet td:nth-child(3){\r\n  width:20%;\r\n}\r\n.ficheobjet td:nth-child(4){\r\n  width:30%;\r\n}\r\n.ficheobjet td:nth-child(5){\r\n\r\n}"

/***/ }),

/***/ "./src/app/fiche-detail/fiche-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fiche-detail/fiche-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <form [formGroup]=\"ficheForm\" (ngSubmit)=\"save()\">\n    <mat-form-field>\n        <mat-label>Nom</mat-label>\n        <input matInput placeholder=\"Nom\" id=\"nom\" formControlName=\"nom\" required>\n        <mat-hint align=\"end\">Nom de la fiche TP</mat-hint>\n        <mat-error *ngIf=\"nom.errors?.required\">Le nom est obligatoire.</mat-error>\n        <mat-error *ngIf=\"nom.errors?.minlength\">Le nom doit être d'au moins 10 caractères.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Catégorie</mat-label>\n        <mat-select placeholder=\"Catégorie\" [compareWith]='compareCategories' formControlName=\"categorie\" id=\"categorie\" required>\n            <mat-option *ngFor=\"let c of categories\" [value]=\"c\">{{c.nom}}</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Catégorie détaillée de l'objet</mat-hint>\n        <mat-error *ngIf=\"categorie.errors?.required\">La catégorie est obligatoire.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Description</mat-label>\n        <textarea matInput id=\"description\" formControlName=\"description\" required></textarea>\n        <mat-hint align=\"end\">Description rapide du TP</mat-hint>\n        <mat-error *ngIf=\"description.errors?.required\">La description est obligatoire.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Protocole</mat-label>\n        <textarea matInput id=\"protocole\" formControlName=\"protocole\" required></textarea>\n        <mat-hint align=\"end\">Protocole expérimental / Notice de préparation</mat-hint>\n        <mat-error *ngIf=\"protocole.errors?.required\">Le protocole est obligatoire.</mat-error>\n    </mat-form-field>\n\n    <mat-tab-group>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon svgIcon=\"ml-professeur\"></mat-icon>&nbsp;\n                <span matBadge=\"{{fiche?.objets_professeur?.length}}\" matBadgeOverlap=\"false\">Objets Professeur</span>\n            </ng-template>\n            <mat-list>\n                <mat-list-item *ngIf=\"fiche?.objets_professeur == null || fiche?.objets_professeur?.length == 0\">Aucun objet professeur enregistré</mat-list-item>\n                <mat-list-item *ngFor=\"let ficheobjet of fiche?.objets_professeur; let in = index; trackBy: trackByFicheobjet\">\n                    <table class=\"ficheobjet\">\n                        <tr>\n                        <td><img height=\"30\" src=\"./assets/categories/{{ficheobjet.objet.categorie}}_\" alt=\"\"></td>\n                        <td><span>{{ficheobjet.objet.designation}}</span></td>\n                        <td><mat-form-field>\n                        <mat-label>Quantité</mat-label>\n                        <input matInput formControlName=\"ficheobjet.professeur.quantite-{{ficheobjet._id}}\" id=\"ficheobjet.professeur.quantite-{{ficheobjet._id}}\" required/>\n                        <span matSuffix>{{ficheobjet.objet.unite}}</span>\n                        </mat-form-field></td>\n                        <td><mat-form-field>\n                        <mat-label>Commentaire</mat-label>\n                        <input matInput formControlName=\"ficheobjet.professeur.commentaire-{{ficheobjet._id}}\" id=\"ficheobjet.professeur.commentaire-{{ficheobjet._id}}\" />\n                        </mat-form-field></td>\n                        <td><button mat-flat-button color=\"accent\" type=\"button\" (click)=\"retirerObjet('professeur',ficheobjet)\">Retirer</button></td>\n                        </tr>\n                    </table>\n                </mat-list-item>\n            </mat-list>\n            <div>\n                <button type=\"button\" mat-flat-button (click)=\"ajouterObjet('professeur')\"><mat-icon>add</mat-icon> Ajouter un objet Professeur</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon svgIcon=\"ml-eleve\"></mat-icon>&nbsp;\n                <span matBadge=\"{{fiche?.objets_eleve?.length}}\" matBadgeOverlap=\"false\">Objets Elève</span>\n            </ng-template>\n            <mat-list>\n                <mat-list-item *ngIf=\"fiche?.objets_eleve == null || fiche?.objets_eleve?.length == 0\">Aucun objet élève enregistré</mat-list-item>\n                <mat-list-item *ngFor=\"let ficheobjet of fiche?.objets_eleve; let in = index; trackBy: trackByFicheobjet\">\n                    <table class=\"ficheobjet\">\n                        <tr>\n                        <td><img height=\"30\" src=\"./assets/categories/{{ficheobjet.objet.categorie}}_\" alt=\"\"></td>\n                        <td><span>{{ficheobjet.objet.designation}}</span></td>\n                        <td><mat-form-field class=\"not-full\">\n                        <td><mat-label>Quantité</mat-label>\n                        <input matInput formControlName=\"ficheobjet.eleve.quantite-{{ficheobjet._id}}\" id=\"ficheobjet.eleve.quantite-{{ficheobjet._id}}\" required/>\n                        <span matSuffix>{{ficheobjet.objet.unite}}</span>\n                        </mat-form-field></td>\n                        <td><mat-form-field class=\"not-full\">\n                        <mat-label>Commentaire</mat-label>\n                        <input matInput formControlName=\"ficheobjet.eleve.commentaire-{{ficheobjet._id}}\" id=\"ficheobjet.eleve.commentaire-{{ficheobjet._id}}\" />\n                        </mat-form-field></td>\n                        <td><button mat-flat-button color=\"accent\" type=\"button\" (click)=\"retirerObjet('eleve',ficheobjet)\">Retirer</button></td>\n                        </tr>\n                    </table>\n                </mat-list-item>\n            </mat-list>\n            <div>\n                <button type=\"button\" mat-flat-button  (click)=\"ajouterObjet('eleve')\"><mat-icon>add</mat-icon> Ajouter un objet élève</button>\n            </div>\n        </mat-tab>\n\n    </mat-tab-group>\n\n    <div class=\"button-group\">\n        <button mat-flat-button color=\"accent\" type=\"submit\" [disabled]=\"!ficheForm.valid\">Enregistrer</button>\n        <button mat-flat-button type=\"button\" (click)=\"goBack()\">Retour</button>\n    </div>\n    </form>\n\n</section>"

/***/ }),

/***/ "./src/app/fiche-detail/fiche-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fiche-detail/fiche-detail.component.ts ***!
  \********************************************************/
/*! exports provided: FicheDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheDetailComponent", function() { return FicheDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_fiche__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/fiche */ "./src/app/_models/fiche.ts");
/* harmony import */ var _services_fiche_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/fiche.service */ "./src/app/_services/fiche.service.ts");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _objets_navigateur_objets_navigateur_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../objets-navigateur/objets-navigateur.component */ "./src/app/objets-navigateur/objets-navigateur.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FicheDetailComponent = /** @class */ (function () {
    function FicheDetailComponent(formBuilder, route, ficheService, categorieService, objetService, location, dialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.ficheService = ficheService;
        this.categorieService = categorieService;
        this.objetService = objetService;
        this.location = location;
        this.dialog = dialog;
        this.ajoutObjetProfesseur = false;
        this.ajoutObjetEleve = false;
    }
    FicheDetailComponent.prototype.ngOnInit = function () {
        this.fiche = new _models_fiche__WEBPACK_IMPORTED_MODULE_5__["Fiche"]();
        this.ficheForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'nom': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)
            ]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'protocole': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'categorie': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.getFiche();
        this.getCategories();
    };
    Object.defineProperty(FicheDetailComponent.prototype, "nom", {
        get: function () { return this.ficheForm.get('nom'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FicheDetailComponent.prototype, "description", {
        get: function () { return this.ficheForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FicheDetailComponent.prototype, "protocole", {
        get: function () { return this.ficheForm.get('protocole'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FicheDetailComponent.prototype, "categorie", {
        get: function () { return this.ficheForm.get('categorie'); },
        enumerable: true,
        configurable: true
    });
    FicheDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FicheDetailComponent.prototype.getFiche = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        if (_id != 'new') {
            this.subscription = this.ficheService.getFiche(_id).subscribe(function (fiche) {
                _this.fiche = fiche;
                _this.ficheForm.patchValue({
                    _id: _this.fiche._id,
                    nom: _this.fiche.nom,
                    description: _this.fiche.description,
                    protocole: _this.fiche.protocole,
                    categorie: _this.fiche.categorie
                });
                for (var _i = 0, _a = _this.fiche.objets_professeur; _i < _a.length; _i++) {
                    var ficheobjet = _a[_i];
                    _this.ficheForm.addControl("ficheobjet.professeur.quantite-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.quantite, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
                    _this.ficheForm.addControl("ficheobjet.professeur.commentaire-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.commentaire));
                }
                for (var _b = 0, _c = _this.fiche.objets_eleve; _b < _c.length; _b++) {
                    var ficheobjet = _c[_b];
                    _this.ficheForm.addControl("ficheobjet.eleve.quantite-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.quantite, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
                    _this.ficheForm.addControl("ficheobjet.eleve.commentaire-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.commentaire));
                }
            });
        }
        else {
            this.fiche = {
                _id: "new",
                nom: "",
                description: "",
                protocole: "",
                categorie: null,
                objets_professeur: [],
                objets_eleve: []
            };
            this.ficheForm.patchValue({
                _id: this.fiche._id,
                nom: this.fiche.nom,
                description: this.fiche.description,
                protocole: this.fiche.protocole,
                categorie: this.fiche.categorie
            });
        }
    };
    FicheDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.subscription = this.categorieService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    FicheDetailComponent.prototype.compareCategories = function (c1, c2) {
        return c1 && c2 ? c1._id === c2._id : c1 === c2;
    };
    FicheDetailComponent.prototype.save = function () {
        var _this = this;
        Object.keys(this.ficheForm.controls).forEach(function (key) {
            if (key.substring(0, 10) == "ficheobjet") {
                var ficheObjetKeyTmp = key.split("-");
                var ficheObjetKey = ficheObjetKeyTmp[0].split(".");
                if (ficheObjetKey[1] == "professeur") {
                    for (var ficheObjetIndex in _this.fiche.objets_professeur) {
                        if (_this.fiche.objets_professeur[ficheObjetIndex]["_id"] == ficheObjetKeyTmp[1]) {
                            _this.fiche.objets_professeur[ficheObjetIndex][ficheObjetKey[2]] = _this.ficheForm.controls[key].value;
                        }
                    }
                }
                if (ficheObjetKey[1] == "eleve") {
                    for (var ficheObjetIndex in _this.fiche.objets_eleve) {
                        if (_this.fiche.objets_eleve[ficheObjetIndex]["_id"] == ficheObjetKeyTmp[1]) {
                            _this.fiche.objets_eleve[ficheObjetIndex][ficheObjetKey[2]] = _this.ficheForm.controls[key].value;
                        }
                    }
                }
            }
            else {
                _this.fiche[key] = _this.ficheForm.get(key).value;
            }
        });
        if (this.fiche._id != 'new') {
            this.subscription = this.ficheService.updateFiche(this.fiche).subscribe(function () { return _this.goBack(); });
        }
        else {
            this.subscription = this.ficheService.addFiche(this.fiche).subscribe(function () { return _this.goBack(); });
        }
    };
    FicheDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    FicheDetailComponent.prototype.ajouterObjet = function (type) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.data = { multi: false };
        var dialogRef = this.dialog.open(_objets_navigateur_objets_navigateur_component__WEBPACK_IMPORTED_MODULE_9__["ObjetsNavigateurComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (_this.fiche.objets_professeur == null) {
                    _this.fiche.objets_professeur = [];
                }
                if (_this.fiche.objets_eleve == null) {
                    _this.fiche.objets_eleve = [];
                }
                var ficheobjet = {
                    _id: "new" + (_this.fiche.objets_professeur.length + _this.fiche.objets_eleve.length),
                    quantite: null,
                    objet: result,
                    commentaire: null
                };
                if (type == 'professeur') {
                    _this.fiche.objets_professeur.push(ficheobjet);
                }
                if (type == 'eleve') {
                    _this.fiche.objets_eleve.push(ficheobjet);
                }
                _this.ficheForm.addControl("ficheobjet." + type + ".quantite-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.quantite, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
                _this.ficheForm.addControl("ficheobjet." + type + ".commentaire-" + ficheobjet._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ficheobjet.commentaire));
            }
        });
    };
    FicheDetailComponent.prototype.retirerObjet = function (type, ficheobjet) {
        if (type == 'professeur') {
            this.fiche.objets_professeur = this.fiche.objets_professeur.filter(function (fo) { return fo !== ficheobjet; });
        }
        if (type == 'eleve') {
            this.fiche.objets_eleve = this.fiche.objets_eleve.filter(function (fo) { return fo !== ficheobjet; });
        }
        this.ficheForm.removeControl("ficheobjet." + type + ".quantite-" + ficheobjet._id);
    };
    FicheDetailComponent.prototype.trackByFicheobjet = function (index, ficheobjet) { return ficheobjet._id; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_fiche__WEBPACK_IMPORTED_MODULE_5__["Fiche"])
    ], FicheDetailComponent.prototype, "fiche", void 0);
    FicheDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fiche-detail',
            template: __webpack_require__(/*! ./fiche-detail.component.html */ "./src/app/fiche-detail/fiche-detail.component.html"),
            styles: [__webpack_require__(/*! ./fiche-detail.component.css */ "./src/app/fiche-detail/fiche-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_fiche_service__WEBPACK_IMPORTED_MODULE_6__["FicheService"],
            _services_categorie_service__WEBPACK_IMPORTED_MODULE_7__["CategorieService"],
            _services_objet_service__WEBPACK_IMPORTED_MODULE_8__["ObjetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], FicheDetailComponent);
    return FicheDetailComponent;
}());



/***/ }),

/***/ "./src/app/fiches/fiches.component.css":
/*!*********************************************!*\
  !*** ./src/app/fiches/fiches.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nwidth:90%;\r\nmargin:10px auto;\r\n}\r\n.mat-form-field.filter-form {\r\nwidth: 100%;\r\n}\r\n.mat-form-field.objet-form {\r\nwidth: 70px;\r\n\r\ntext-align: right;\r\n}\r\ntable{\r\nwidth:100%;\r\n}\r\n.mat-fab{\r\nposition: fixed;\r\nbottom: 20px;\r\nright: 20px;\r\n}\r\n.mat-form-field-wrapper{\r\npadding-bottom:0!important;\r\n}\r\n.mat-form-field-appearance-outline{\r\npadding:0;\r\n}"

/***/ }),

/***/ "./src/app/fiches/fiches.component.html":
/*!**********************************************!*\
  !*** ./src/app/fiches/fiches.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n<!-- <div [ngStyle]=\"{'display': display}\" class=\"alert alert-warning\" role=\"alert\" *ngIf=\"fiches?.length == 0\">\n    <button type=\"button\" (click)=\"display='none'\" class=\"close-alert\">×</button>\n    <mat-icon>warning</mat-icon>\n    <span>Aucune fiche enregistrée !</span>\n  </div> -->\n  <mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\n\n  <div>\n    <mat-form-field class=\"filter-form\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n\n      <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"nom\" matSortDirection=\"asc\">\n\n        <ng-container matColumnDef=\"icone\">\n          <th mat-header-cell *matHeaderCellDef> Icône </th>\n          <td mat-cell *matCellDef=\"let fiche\"> <img height=\"30\" src=\"./assets/categories/{{fiche.categorie}}_\" alt=\"\"> </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nom\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n          <td mat-cell *matCellDef=\"let fiche\">{{fiche.nom}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"objets_professeur\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Objets Professeur </th>\n          <td mat-cell *matCellDef=\"let fiche\">{{fiche.objets_professeur?.length}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"objets_eleve\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Objets Elèves </th>\n          <td mat-cell *matCellDef=\"let fiche\">{{fiche.objets_eleve?.length}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let fiche\">\n              <button *ngIf=\"currentUser\" mat-button color=\"primary\" (click)=\"edit(fiche)\"><mat-icon>edit</mat-icon> Modifier</button>\n              <button *ngIf=\"currentUser.profil == 'ADMIN'\" mat-button color=\"warn\" (click)=\"delete(fiche)\"><mat-icon>delete</mat-icon> Supprimer</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n        </table>\n      <mat-paginator [pageSizeOptions]=\"[20, 40, 60]\" [pageIndex]=\"0\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\n\n    </div>\n  </div>\n\n  <button mat-fab color=\"primary\" (click)=\"add()\" *ngIf=\"standaloneList && currentUser.profil == 'ADMIN'\" ><mat-icon>add</mat-icon></button>\n\n</section>"

/***/ }),

/***/ "./src/app/fiches/fiches.component.ts":
/*!********************************************!*\
  !*** ./src/app/fiches/fiches.component.ts ***!
  \********************************************/
/*! exports provided: FichesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichesComponent", function() { return FichesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_categorie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/categorie */ "./src/app/_models/categorie.ts");
/* harmony import */ var _models_objet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/objet */ "./src/app/_models/objet.ts");
/* harmony import */ var _services_fiche_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/fiche.service */ "./src/app/_services/fiche.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FichesComponent = /** @class */ (function () {
    function FichesComponent(ficheService, messageService, authenticationService, router, location, snackBar) {
        this.ficheService = ficheService;
        this.messageService = messageService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.location = location;
        this.snackBar = snackBar;
        this.countFiche = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.standaloneList = true;
        this.isLoading = false;
        this.displayedColumns = ['icone', 'nom', 'objets_professeur', 'objets_eleve', 'actions'];
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    FichesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getFiches();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    FichesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FichesComponent.prototype.getFiches = function () {
        var _this = this;
        var filter = {};
        if (this.categorie) {
            filter['categorie'] = this.categorie._id;
        }
        if (this.objet) {
            filter['objet'] = this.objet._id;
        }
        if (this.categorie || this.objet) {
            this.standaloneList = false;
        }
        this.subscription = this.ficheService.getFiches(filter).subscribe(function (fiches) {
            _this.fiches = fiches;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](fiches);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            if (fiches.length == 0) {
                _this.snackBar.open("Aucune fiche n'est enregistrée pour cette sélection !", 'Compris');
            }
            _this.isLoading = false;
            _this.countFiche.emit(_this.fiches.length);
        });
    };
    FichesComponent.prototype.edit = function (fiche) {
        this.router.navigate(['/fiche', fiche._id]);
    };
    FichesComponent.prototype.delete = function (fiche) {
        this.fiches = this.fiches.filter(function (o) { return o !== fiche; });
        this.dataSource.data = this.fiches;
        this.subscription = this.ficheService.deleteFiche(fiche).subscribe();
        this.countFiche.emit(this.fiches.length);
    };
    FichesComponent.prototype.add = function () {
        this.router.navigate(['/fiche/new']);
    };
    FichesComponent.prototype.onSelect = function (fiche) {
        this.selectedFiche = fiche;
    };
    FichesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_categorie__WEBPACK_IMPORTED_MODULE_4__["Categorie"])
    ], FichesComponent.prototype, "categorie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_objet__WEBPACK_IMPORTED_MODULE_5__["Objet"])
    ], FichesComponent.prototype, "objet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FichesComponent.prototype, "countFiche", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FichesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FichesComponent.prototype, "paginator", void 0);
    FichesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fiches',
            template: __webpack_require__(/*! ./fiches.component.html */ "./src/app/fiches/fiches.component.html"),
            styles: [__webpack_require__(/*! ./fiches.component.css */ "./src/app/fiches/fiches.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fiche_service__WEBPACK_IMPORTED_MODULE_6__["FicheService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], FichesComponent);
    return FichesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar-row{\r\n  height: 50px;\r\n}\r\n.toolbar-titre{\r\n  display:inline-block;\r\n  margin-left:5px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row >\n    <mat-icon svgIcon=\"ml-logo\"></mat-icon><h1 class=\"toolbar-titre mat-title\">myLabo</h1>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"router.url!='/login'\">\n    <a mat-button [disabled]=\"router.url=='/browse' ? '' : null\" routerLink=\"/browse\"><mat-icon>ballot</mat-icon> Parcourir</a>\n    <a mat-button [disabled]=\"router.url=='/categories' ? '' : null\" routerLink=\"/categories\"><mat-icon>category</mat-icon> Catégories</a>\n    <button mat-button [matMenuTriggerFor]=\"objets\"><mat-icon>group_work</mat-icon> Objets</button>\n    <mat-menu #objets=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\n      <button mat-menu-item routerLink=\"/objets\"><mat-icon>list</mat-icon> Liste des objets</button>\n      <button mat-menu-item routerLink=\"/objet/new\"><mat-icon>add</mat-icon> Ajouter un nouvel objet</button>\n      <button mat-menu-item routerLink=\"/objets/import\"><mat-icon>get_app</mat-icon> Importer en masse</button>\n    </mat-menu>\n    <a mat-button [disabled]=\"router.url=='/marques' ? '' : null\" routerLink=\"/marques\"><mat-icon>store</mat-icon> Fournisseurs</a>\n    <a mat-button [disabled]=\"router.url=='/fiches' ? '' : null\" routerLink=\"/fiches\"><mat-icon>description</mat-icon> Fiches</a>\n    <a mat-button [disabled]=\"router.url=='/users' ? '' : null\" routerLink=\"/users\"><mat-icon>group</mat-icon> Utilisateurs</a>\n    <app-my></app-my>\n    <app-cherche></app-cherche>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n<app-objets-alert></app-objets-alert>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  width:400px;\r\n  margin:50px auto;\r\n  text-align: center;\r\n}\r\n.mat-form-field {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n    <img height=\"100\" src=\"./assets/myLaboColor.svg\" alt=\"\">\n    <h2> Connexion </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field>\n            <mat-label>E-mail</mat-label>\n            <input matInput placeholder=\"Votre e-mail\" type=\"email\" formControlName=\"email\" id=\"email\" required />\n            <mat-error *ngIf=\"f.email.errors && f.email.errors.required\">L'email est obligatoire !</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Mot de passe</mat-label>\n            <input matInput type=\"password\" formControlName=\"password\" id=\"password\" required />\n            <mat-error *ngIf=\"f.password.errors && f.password.errors.required\">Le mot de passe est obligatoire !</mat-error>\n        </mat-form-field>\n\n\n        <div class=\"button-group\">\n            <button mat-flat-button color=\"accent\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loading\">Se connecter</button>\n            <button mat-flat-button type=\"button\" [routerLink]=\"['/register']\">S'enregistrer</button>\n        </div>\n\n        <mat-progress-bar mode=\"query\" *ngIf=\"loading\"></mat-progress-bar>\n\n    </form>\n\n</section>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error.error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/marque-detail/marque-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/marque-detail/marque-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  width:90%;\r\n  margin:10px auto;\r\n}\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\ntable{\r\n  width:100%;\r\n}"

/***/ }),

/***/ "./src/app/marque-detail/marque-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/marque-detail/marque-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <form [formGroup]=\"marqueForm\" (ngSubmit)=\"save()\">\n    <mat-form-field>\n        <mat-label>Nom</mat-label>\n        <input matInput placeholder=\"Nom\" id=\"nom\" formControlName=\"nom\" required>\n        <mat-hint align=\"end\">Nom de la marque</mat-hint>\n        <mat-error *ngIf=\"nom.errors?.required\">Le nom est obligatoire.</mat-error>\n        <mat-error *ngIf=\"nom.errors?.minlength\">Le nom doit être d'au moins 3 caractères.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Téléphone</mat-label>\n        <input type=\"tel\" matInput placeholder=\"Téléphone\" id=\"telephone\" formControlName=\"telephone\" required>\n        <mat-hint align=\"end\">Numéro de téléphone (au format 0559121212)</mat-hint>\n        <mat-error *ngIf=\"telephone.errors?.required\">Le téléphone est obligatoire.</mat-error>\n        <mat-error *ngIf=\"telephone.errors?.pattern\">Le téléphone doit être composé de 10 chiffres.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Mail</mat-label>\n        <input type=\"email\" matInput placeholder=\"E-Mail\" id=\"mail\" formControlName=\"mail\" required>\n        <mat-hint align=\"end\">Email de contact (au format nom@societe.com)</mat-hint>\n        <mat-error *ngIf=\"mail.errors?.required\">Le mail est obligatoire.</mat-error>\n        <mat-error *ngIf=\"mail.errors?.pattern\">Le mail n'est pas au bon format.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Site Web</mat-label>\n        <input type=\"url\" matInput placeholder=\"http://www.page.com\" id=\"web\" formControlName=\"web\">\n        <mat-hint align=\"end\">Site web</mat-hint>\n        <mat-error *ngIf=\"web.errors?.pattern\">Le site web n'est pas au bon format.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Adresse</mat-label>\n        <textarea matInput id=\"adresse\" formControlName=\"adresse\"></textarea>\n        <mat-hint align=\"end\">Adresse postale</mat-hint>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Commentaires</mat-label>\n        <textarea matInput id=\"commentaire\" formControlName=\"commentaire\"></textarea>\n        <mat-hint align=\"end\">Commentaires libres pour information</mat-hint>\n    </mat-form-field>\n\n    <div class=\"button-group\">\n        <button mat-flat-button color=\"accent\" type=\"submit\" [disabled]=\"!marqueForm.valid\">Enregistrer</button>\n        <button mat-flat-button type=\"button\" (click)=\"goBack()\">Retour</button>\n    </div>\n    </form>\n\n    <mat-tab-group *ngIf=\"marque\">\n        <mat-tab label=\"Objets liés\"><app-objets [marque]=\"marque\"></app-objets></mat-tab>\n    </mat-tab-group>\n\n</section>"

/***/ }),

/***/ "./src/app/marque-detail/marque-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/marque-detail/marque-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: MarqueDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailComponent", function() { return MarqueDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_marque__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/marque */ "./src/app/_models/marque.ts");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarqueDetailComponent = /** @class */ (function () {
    function MarqueDetailComponent(formBuilder, route, marqueService, location) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.marqueService = marqueService;
        this.location = location;
    }
    MarqueDetailComponent.prototype.ngOnInit = function () {
        this.marqueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'nom': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)
            ]),
            'telephone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')
            ]),
            'mail': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+')
            ]),
            'web': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})')
            ]),
            'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.getMarque();
    };
    Object.defineProperty(MarqueDetailComponent.prototype, "nom", {
        get: function () { return this.marqueForm.get('nom'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarqueDetailComponent.prototype, "telephone", {
        get: function () { return this.marqueForm.get('telephone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarqueDetailComponent.prototype, "mail", {
        get: function () { return this.marqueForm.get('mail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarqueDetailComponent.prototype, "web", {
        get: function () { return this.marqueForm.get('web'); },
        enumerable: true,
        configurable: true
    });
    MarqueDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MarqueDetailComponent.prototype.getMarque = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        if (_id != 'new') {
            this.subscription = this.marqueService.getMarque(_id).subscribe(function (marque) {
                _this.marque = marque;
                _this.marqueForm.patchValue({
                    _id: marque._id,
                    nom: marque.nom,
                    telephone: marque.telephone,
                    mail: marque.mail,
                    web: marque.web,
                    adresse: marque.adresse,
                    commentaire: marque.commentaire
                });
            });
        }
        else {
            this.marqueForm.patchValue({
                _id: "new",
                nom: "",
                telephone: "",
                mail: "",
                web: null,
                adresse: null,
                commentaire: null
            });
        }
    };
    MarqueDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.marqueForm.get('_id').value != 'new') {
            this.subscription = this.marqueService.updateMarque(this.marqueForm.value).subscribe(function () { return _this.goBack(); });
        }
        else {
            this.subscription = this.marqueService.addMarque(this.marqueForm.value).subscribe(function () { return _this.goBack(); });
        }
    };
    MarqueDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_marque__WEBPACK_IMPORTED_MODULE_4__["Marque"])
    ], MarqueDetailComponent.prototype, "marque", void 0);
    MarqueDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marque-detail',
            template: __webpack_require__(/*! ./marque-detail.component.html */ "./src/app/marque-detail/marque-detail.component.html"),
            styles: [__webpack_require__(/*! ./marque-detail.component.css */ "./src/app/marque-detail/marque-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_marque_service__WEBPACK_IMPORTED_MODULE_5__["MarqueService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MarqueDetailComponent);
    return MarqueDetailComponent;
}());



/***/ }),

/***/ "./src/app/marques/marques.component.css":
/*!***********************************************!*\
  !*** ./src/app/marques/marques.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  width:90%;\r\n  margin:10px auto;\r\n}\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\ntable{\r\n  width:100%;\r\n}\r\n.mat-fab{\r\nposition: fixed;\r\nbottom: 20px;\r\nright: 20px;\r\n}"

/***/ }),

/***/ "./src/app/marques/marques.component.html":
/*!************************************************!*\
  !*** ./src/app/marques/marques.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n<!-- <div [ngStyle]=\"{'display': display}\" class=\"alert alert-warning\" role=\"alert\" *ngIf=\"marques?.length == 0\">\n    <button type=\"button\" (click)=\"display='none'\" class=\"close-alert\">×</button>\n    <mat-icon>warning</mat-icon>\n    <span>Aucun fournisseur n'est enregistré !</span>\n  </div> -->\n  <mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\n\n  <div>\n    <mat-form-field class=\"filter-form\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n\n      <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"nom\" matSortDirection=\"asc\">\n\n        <ng-container matColumnDef=\"nom\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n          <td mat-cell *matCellDef=\"let marque\"> {{marque.nom}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"telephone\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Téléphone </th>\n          <td mat-cell *matCellDef=\"let marque\"> {{marque.telephone}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"mail\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Mail </th>\n          <td mat-cell *matCellDef=\"let marque\"> {{marque.mail}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"web\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Web </th>\n          <td mat-cell *matCellDef=\"let marque\"> <a href=\"{{marque.web}}\" target=\"_blank\">{{marque.web}}</a> </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let marque\">\n              <button *ngIf=\"currentUser\" mat-button color=\"primary\" (click)=\"edit(marque)\"><mat-icon>edit</mat-icon> Modifier</button>\n              <button *ngIf=\"currentUser.profil == 'ADMIN'\" mat-button color=\"warn\" (click)=\"delete(marque)\"><mat-icon>delete</mat-icon> Supprimer</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[20, 40, 60]\" [pageIndex]=\"0\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\n\n    </div>\n  </div>\n  <button mat-fab color=\"primary\" (click)=\"add()\"><mat-icon>add</mat-icon></button>\n</section>"

/***/ }),

/***/ "./src/app/marques/marques.component.ts":
/*!**********************************************!*\
  !*** ./src/app/marques/marques.component.ts ***!
  \**********************************************/
/*! exports provided: MarquesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarquesComponent", function() { return MarquesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarquesComponent = /** @class */ (function () {
    function MarquesComponent(marqueService, authenticationService, router, location, snackBar) {
        this.marqueService = marqueService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.location = location;
        this.snackBar = snackBar;
        this.isLoading = false;
        this.displayedColumns = ['nom', 'telephone', 'mail', 'web', 'actions'];
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    MarquesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getMarques();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    MarquesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MarquesComponent.prototype.getMarques = function () {
        var _this = this;
        this.subscription = this.marqueService.getMarques().subscribe(function (marques) {
            _this.marques = marques;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](marques);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            if (marques.length == 0) {
                _this.snackBar.open('Aucune marque enregistrée !', 'Compris');
            }
            _this.isLoading = false;
        });
    };
    MarquesComponent.prototype.edit = function (marque) {
        this.router.navigate(['/marque', marque._id]);
    };
    MarquesComponent.prototype.delete = function (marque) {
        this.marques = this.marques.filter(function (m) { return m !== marque; });
        this.dataSource.data = this.marques;
        this.subscription = this.marqueService.deleteMarque(marque).subscribe();
    };
    MarquesComponent.prototype.add = function () {
        this.router.navigate(['/marque/new']);
    };
    MarquesComponent.prototype.onSelect = function (marque) {
        this.selectedMarque = marque;
    };
    MarquesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MarquesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MarquesComponent.prototype, "paginator", void 0);
    MarquesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marques',
            template: __webpack_require__(/*! ./marques.component.html */ "./src/app/marques/marques.component.html"),
            styles: [__webpack_require__(/*! ./marques.component.css */ "./src/app/marques/marques.component.css")]
        }),
        __metadata("design:paramtypes", [_services_marque_service__WEBPACK_IMPORTED_MODULE_4__["MarqueService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MarquesComponent);
    return MarquesComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nbottom: 0;\r\nposition: absolute;\r\nleft: 0;\r\ntext-align: left;\r\nmargin-left: 5px;\r\nbackground-color: #FFF;\r\nborder: 1px solid #EEE;\r\nborder-bottom: none;\r\n}\r\nsection>h2{\r\nbackground-color: #EEE;\r\npadding: 2px;\r\nmargin-bottom:0px;\r\n}\r\nsection>h2>button{\r\nposition: absolute;\r\nright: 5px;\r\n}\r\nsection>div{\r\nmax-height: 200px;\r\noverflow-y: auto;\r\nfont-size: 0.6em;\r\nwidth: 100%;\r\npadding: 5px;\r\nbox-sizing: border-box;\r\n}\r\nsection>div>div{\r\nborder-bottom: 1px dotted #999;\r\n}\r\nsection>div>div>span:first-child{\r\ndisplay: inline-block;\r\nwidth: 35px;\r\ncolor:#999;\r\n}\r\nsection>h2>.mat-icon{\r\nvertical-align: middle;\r\nmargin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"display && messageService.messages.length\">\n\n  <h2><mat-icon>info</mat-icon>Messages<button mat-mini-fab  type=\"button\" (click)=\"messageService.clear()\"><mat-icon>clear</mat-icon></button></h2>\n  <div>\n    <div *ngFor='let message of messageService.messages'><span>{{message.time| date:'hh:mm:ss'}}</span><span>{{message.message}}</span></div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
        this.display = _helpers_global__WEBPACK_IMPORTED_MODULE_2__["activeScreenDebugMessage"]; //ng.probe($0).componentInstance.display
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/my/my.component.css":
/*!*************************************!*\
  !*** ./src/app/my/my.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my/my.component.html":
/*!**************************************!*\
  !*** ./src/app/my/my.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"currentUser\" mat-button [matMenuTriggerFor]=\"my\"><mat-icon>home</mat-icon> Mon compte</button>\r\n<mat-menu #my=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n  <button mat-menu-item disabled><mat-icon>face</mat-icon> {{currentUser?.nom}}</button>\r\n  <button mat-menu-item routerLink=\"/login\"><mat-icon>lock_open</mat-icon> Déconnexion</button>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/my/my.component.ts":
/*!************************************!*\
  !*** ./src/app/my/my.component.ts ***!
  \************************************/
/*! exports provided: MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyComponent = /** @class */ (function () {
    function MyComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    MyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    MyComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    MyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my',
            template: __webpack_require__(/*! ./my.component.html */ "./src/app/my/my.component.html"),
            styles: [__webpack_require__(/*! ./my.component.css */ "./src/app/my/my.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], MyComponent);
    return MyComponent;
}());



/***/ }),

/***/ "./src/app/navigateur/navigateur.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigateur/navigateur.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.breadcrumb {\r\npadding: 10px 16px;\r\nlist-style: none;\r\nbackground-color: #eee;\r\nmargin: 0;\r\n}\r\nul.breadcrumb li {\r\ndisplay: inline;\r\nfont-size: 1.1em;\r\n}\r\nul.breadcrumb li+li:before {\r\npadding: 8px;\r\ncolor: #6c757d;\r\ncontent: \"/\\00a0\";\r\n}\r\nul.breadcrumb li a {\r\ncolor: #3f51b5;\r\ntext-decoration: none;\r\n}\r\nul.breadcrumb li a.active{\r\ncolor: #6c757d;\r\n}\r\nul.breadcrumb li a:hover {\r\ncolor: #01447e;\r\ntext-decoration: underline;\r\n}\r\nsection{\r\nwidth:85%;\r\nmargin:5px auto;\r\n}\r\n.mat-card{\r\nwidth: 25%;\r\nmargin: 10px;\r\ndisplay:inline-block;\r\ncursor:pointer;\r\n}\r\n.card-logo{\r\nheight: 30px;\r\ndisplay: block;\r\nmargin:0 0 10px 0;\r\n}\r\n.card-logo img{\r\nheight:100%;\r\n}\r\n.mat-card:hover{\r\nbox-shadow:0 3px 20px -2px rgba(0,0,0,.2),0 2px 10px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);\r\n}"

/***/ }),

/***/ "./src/app/navigateur/navigateur.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigateur/navigateur.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\" (click)=\"onSelectBack(null,-1)\"><a href=\"javascript:void(0)\">Accueil</a></li>\n    <li class=\"breadcrumb-item active\" *ngFor=\"let browsedCategorie of browsedCategories; let i=index; let isLast=last\" (click)=\"onSelectBack(browsedCategorie,i)\"><a [ngClass]=\"{'active': isLast}\" [attr.href]=\"isLast ? null : 'javascript:void(0)'\">{{browsedCategorie.nom}}</a></li>\n  </ul>\n\n  <section>\n    <mat-card  (click)=\"onSelect(categorie)\" *ngFor=\"let categorie of categories | categorieFilter:selectedCategorieParent let i=index;\">\n      <img *ngIf=\"!reduceMode\" mat-card-image src=\"assets/categories/{{categorie._id}}\" alt=\"\">\n      <div class=\"card-logo\"><img src=\"assets/categories/{{categorie._id}}_\" alt=\"\"></div>\n      <mat-card-title [style.font-size.em]=\"reduceMode ? 1.2 : ''\" class=\"mat-subheading-2\">\n      <span [matBadge]=\"categoriesObjetCnt[categorie._id]\" matBadgeOverlap=\"false\">{{categorie.nom}}</span>\n    </mat-card-title>\n    </mat-card>\n  </section>\n\n<mat-tab-group *ngIf=\"selectedCategorieParent\">\n    <mat-tab>\n        <ng-template mat-tab-label>\n            <mat-icon>group_work</mat-icon>&nbsp;\n            <span matBadge=\"{{objetsCount}}\" matBadgeOverlap=\"false\">Objets liés</span>\n        </ng-template>\n        <app-objets [categorie]=\"selectedCategorieParent\" (selectedObjet)=\"onObjetSelect($event)\" (countObjet)=\"onObjetCount($event)\"></app-objets>\n    </mat-tab>\n    <mat-tab *ngIf=\"!reduceMode\" >\n        <ng-template mat-tab-label>\n            <mat-icon>description</mat-icon>&nbsp;\n            <span matBadge=\"{{fichesCount}}\" matBadgeOverlap=\"false\">Fiches liées</span>\n        </ng-template>\n        <app-fiches [categorie]=\"selectedCategorieParent\" (countFiche)=\"onFicheCount($event)\"></app-fiches>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/navigateur/navigateur.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigateur/navigateur.component.ts ***!
  \****************************************************/
/*! exports provided: NavigateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateurComponent", function() { return NavigateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigateurComponent = /** @class */ (function () {
    function NavigateurComponent(categorieService, objetService, alertService, router, location) {
        this.categorieService = categorieService;
        this.objetService = objetService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.reduceMode = false;
        this.categoriesById = [];
        this.categoriesObjetCnt = [];
        this.objetsCount = 0;
        this.fichesCount = 0;
        this.selectedCategorieParent = null;
        this.previousCategorie = null;
        this.browsedCategories = [];
        this.selectedObjet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavigateurComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    NavigateurComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavigateurComponent.prototype.getCategories = function () {
        var _this = this;
        this.subscription = this.categorieService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
            for (var _i = 0, _a = _this.categories; _i < _a.length; _i++) {
                var categorie = _a[_i];
                _this.categoriesById[categorie._id] = categorie;
                _this.categoriesObjetCnt[categorie._id] = 0;
            }
            var _loop_1 = function (categorie) {
                var filter = {};
                filter['categorie'] = categorie._id;
                _this.subscription = _this.objetService.getObjetsCount(filter).subscribe(function (objetsCnt) {
                    _this.categoriesObjetCnt[categorie._id] += objetsCnt.count;
                    var catTmp = _this.categoriesById["" + categorie.parent];
                    while (catTmp != undefined) {
                        _this.categoriesObjetCnt[catTmp._id] = _this.categoriesObjetCnt[catTmp._id] + objetsCnt.count;
                        catTmp = _this.categoriesById["" + catTmp.parent];
                    }
                });
            };
            for (var _b = 0, _c = _this.categories; _b < _c.length; _b++) {
                var categorie = _c[_b];
                _loop_1(categorie);
            }
        });
    };
    NavigateurComponent.prototype.onSelect = function (categorie) {
        this.selectedCategorieParent = categorie;
        this.browsedCategories.push(categorie);
    };
    NavigateurComponent.prototype.onSelectBack = function (categorie, index) {
        var tmpBrowsedCategories = this.browsedCategories;
        this.browsedCategories = [];
        for (var i = 0; i < tmpBrowsedCategories.length; i++) {
            if (i <= index) {
                this.browsedCategories.push(tmpBrowsedCategories[i]);
            }
        }
        this.selectedCategorieParent = categorie;
    };
    NavigateurComponent.prototype.onObjetSelect = function (objet) {
        this.selectedObjet.emit(objet);
    };
    NavigateurComponent.prototype.onObjetCount = function (count) {
        this.objetsCount = count;
    };
    NavigateurComponent.prototype.onFicheCount = function (count) {
        this.fichesCount = count;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavigateurComponent.prototype, "reduceMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigateurComponent.prototype, "selectedObjet", void 0);
    NavigateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigateur',
            template: __webpack_require__(/*! ./navigateur.component.html */ "./src/app/navigateur/navigateur.component.html"),
            styles: [__webpack_require__(/*! ./navigateur.component.css */ "./src/app/navigateur/navigateur.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categorie_service__WEBPACK_IMPORTED_MODULE_3__["CategorieService"],
            _services_objet_service__WEBPACK_IMPORTED_MODULE_4__["ObjetService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], NavigateurComponent);
    return NavigateurComponent;
}());



/***/ }),

/***/ "./src/app/objet-detail/objet-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/objet-detail/objet-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nmargin:10px auto;\r\nwidth:90%;\r\n}\r\nsection .mat-form-field  {\r\nwidth: 100%;\r\nmargin:5px 0;\r\n}\r\nsection .mat-form-field.not-full{\r\nwidth:auto;\r\nmargin:5px;\r\n}"

/***/ }),

/***/ "./src/app/objet-detail/objet-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/objet-detail/objet-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <form [formGroup]=\"objetForm\" (ngSubmit)=\"save()\">\n    <mat-form-field>\n        <mat-label>Désignation</mat-label>\n        <input matInput placeholder=\"Désignation\" id=\"designation\" formControlName=\"designation\" required>\n        <mat-hint align=\"end\">Désignation de l'objet</mat-hint>\n        <mat-error *ngIf=\"designation.errors?.required\">La désignation est obligatoire.</mat-error>\n        <mat-error *ngIf=\"designation.errors?.minlength\">La désignation doit être d'au moins 10 caractères.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Catégorie</mat-label>\n        <mat-select placeholder=\"Catégorie\" [compareWith]='compareCategories' formControlName=\"categorie\" id=\"categorie\" required>\n            <mat-option *ngFor=\"let c of categories\" [value]=\"c\">{{c.nom}}</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Catégorie détaillée de l'objet</mat-hint>\n        <mat-error *ngIf=\"categorie.errors?.required\">La catégorie est obligatoire.</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"not-full\">\n        <mat-label>Quantité</mat-label>\n        <input matInput placeholder=\"Quantité\" id=\"quantite\" formControlName=\"quantite\" required>\n        <mat-hint align=\"end\">Quantité disponible en stock</mat-hint>\n        <mat-error *ngIf=\"quantite.errors?.required\">La quantité est obligatoire.</mat-error>\n        <mat-error *ngIf=\"quantite.errors?.pattern\">La quantité doit être un nombre.</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"not-full\">\n        <mat-label>Unité</mat-label>\n        <input matInput placeholder=\"Unité\" id=\"unite\" formControlName=\"unite\">\n        <mat-hint align=\"end\">Unité optionelle</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"not-full\">\n        <mat-label>Seuil</mat-label>\n        <input matInput placeholder=\"Seuil d'alerte\" id=\"seuil_alerte\" formControlName=\"seuil_alerte\">\n        <span matSuffix>{{unite?.value}}</span>\n        <mat-hint align=\"end\">Seuil minimum optionnel pour alerter</mat-hint>\n        <mat-error *ngIf=\"seuil_alerte.errors?.pattern\">Le seuil doit être un nombre.</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-chip-list\">\n      <mat-chip-list #chipList>\n        <ng-container *ngIf=\"dangers.value!=''\">\n            <mat-chip\n              *ngFor=\"let danger of dangers.value.split(','); let i = index;\"\n              [selectable]=\"true\"\n              [removable]=\"true\"\n              (removed)=\"removeDanger(danger)\">\n              <img height=\"50\" src=\"./assets/dangers/{{globalDangersByLogo[danger].logo}}.png\" title=\"{{globalDangersByLogo[danger].description}}\">{{globalDangersByLogo[danger].titre}}\n              <mat-icon matChipRemove>cancel</mat-icon>\n            </mat-chip>\n        </ng-container>\n        <input\n          placeholder=\"Dangers de l'objet...\"\n          #dangerInput\n          [formControl]=\"dangers_chips\"\n          [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"addDanger($event)\">\n          <mat-hint align=\"end\">Ensemble des dangers de l'objet (selon FSD)</mat-hint>\n      </mat-chip-list>\n\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedDanger($event)\">\n        <mat-option *ngFor=\"let danger of globalDangers; let i = index;\" [value]=\"danger.logo\">\n          {{danger.titre}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Localisation</mat-label>\n        <input matInput placeholder=\"Localisation\" id=\"localisation\" formControlName=\"localisation\" required>\n        <mat-hint align=\"end\">Lieu de stockage de l'objet</mat-hint>\n        <mat-error *ngIf=\"localisation.errors?.required\">La localisation est obligatoire.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Commentaire</mat-label>\n        <textarea matInput id=\"commentaire\" formControlName=\"commentaire\"></textarea>\n        <mat-hint align=\"end\">Commentaires libres pour information</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"not-full\">\n        <mat-label>Fournisseur</mat-label>\n        <mat-select placeholder=\"Fournisseur\" [compareWith]='compareMarques' formControlName=\"marque\" id=\"marque\">\n            <mat-option *ngFor=\"let m of marques\" [value]=\"m\">{{m.nom}}</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Fournisseur/Marque</mat-hint>\n    </mat-form-field>\n     <mat-form-field class=\"not-full\">\n        <mat-label>Référence</mat-label>\n        <input matInput placeholder=\"Référence fournisseur\" id=\"reference\" formControlName=\"reference\">\n        <mat-hint align=\"end\">Référence du fournisseur</mat-hint>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Prix</mat-label>\n        <input matInput placeholder=\"Prix\" id=\"prix\" formControlName=\"prix\">\n        <span matSuffix>€uros</span>\n        <mat-hint align=\"end\">Prix unitaire</mat-hint>\n        <mat-error *ngIf=\"prix.errors?.pattern\">Le prix doit être un nombre (le séparateur est un point).</mat-error>\n    </mat-form-field>\n    <div class=\"button-group\">\n        <button mat-flat-button color=\"accent\" type=\"submit\" [disabled]=\"!objetForm.valid\">Enregistrer</button>\n        <button mat-flat-button type=\"button\" (click)=\"goBack()\">Retour</button>\n    </div>\n    </form>\n\n    <mat-tab-group *ngIf=\"objet\">\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon>description</mat-icon>&nbsp;\n                <span matBadge=\"{{fichesCount}}\" matBadgeOverlap=\"false\">Fiches liées</span>\n            </ng-template>\n            <app-fiches [objet]=\"objet\" (countFiche)=\"onFicheCount($event)\"></app-fiches>\n        </mat-tab>\n    </mat-tab-group>\n\n</section>"

/***/ }),

/***/ "./src/app/objet-detail/objet-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/objet-detail/objet-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ObjetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetDetailComponent", function() { return ObjetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ObjetDetailComponent = /** @class */ (function () {
    function ObjetDetailComponent(formBuilder, route, objetService, marqueService, categorieService, location) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.objetService = objetService;
        this.marqueService = marqueService;
        this.categorieService = categorieService;
        this.location = location;
        this.fichesCount = 0;
        this.globalDangers = _helpers_global__WEBPACK_IMPORTED_MODULE_7__["dangers"];
        this.globalDangersByLogo = [];
        this.separatorKeysCodes = _helpers_global__WEBPACK_IMPORTED_MODULE_7__["separatorKeysCodes"];
    }
    ObjetDetailComponent.prototype.ngOnInit = function () {
        this.objetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'designation': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)
            ]),
            'categorie': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'quantite': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')
            ]),
            'unite': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'seuil_alerte': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')),
            'dangers': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'dangers_chips': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            'localisation': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'marque': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'prix': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('([0-9]*[.])?[0-9]+'))
        });
        this.getObjet();
        this.getMarques();
        this.getCategories();
        for (var _i = 0, _a = this.globalDangers; _i < _a.length; _i++) {
            var danger = _a[_i];
            this.globalDangersByLogo[danger.logo] = danger;
        }
    };
    Object.defineProperty(ObjetDetailComponent.prototype, "designation", {
        get: function () { return this.objetForm.get('designation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "categorie", {
        get: function () { return this.objetForm.get('categorie'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "quantite", {
        get: function () { return this.objetForm.get('quantite'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "dangers", {
        get: function () { return this.objetForm.get('dangers'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "dangers_chips", {
        get: function () { return this.objetForm.get('dangers_chips'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "localisation", {
        get: function () { return this.objetForm.get('localisation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "seuil_alerte", {
        get: function () { return this.objetForm.get('seuil_alerte'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "prix", {
        get: function () { return this.objetForm.get('prix'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjetDetailComponent.prototype, "unite", {
        get: function () { return this.objetForm.get('unite'); },
        enumerable: true,
        configurable: true
    });
    ObjetDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ObjetDetailComponent.prototype.getObjet = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        if (_id != 'new') {
            this.subscription = this.objetService.getObjet(_id).subscribe(function (objet) {
                _this.objet = objet;
                _this.objetForm.patchValue({
                    _id: objet._id,
                    designation: objet.designation,
                    categorie: objet.categorie,
                    quantite: objet.quantite,
                    unite: objet.unite,
                    seuil_alerte: objet.seuil_alerte,
                    dangers: objet.dangers,
                    localisation: objet.localisation,
                    commentaire: objet.commentaire,
                    reference: objet.reference,
                    marque: objet.marque,
                    prix: objet.prix
                });
            });
        }
        else {
            this.objetForm.patchValue({
                _id: "new",
                designation: "",
                categorie: null,
                quantite: null,
                unite: "",
                seuil_alerte: null,
                dangers: "",
                localisation: "",
                commentaire: "",
                reference: "",
                marque: null,
                prix: null
            });
        }
    };
    ObjetDetailComponent.prototype.getMarques = function () {
        var _this = this;
        this.subscription = this.marqueService.getMarques().subscribe(function (marques) { return _this.marques = marques; });
    };
    ObjetDetailComponent.prototype.compareMarques = function (m1, m2) {
        return m1 && m2 ? m1._id === m2._id : m1 === m2;
    };
    ObjetDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.subscription = this.categorieService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    ObjetDetailComponent.prototype.compareCategories = function (c1, c2) {
        return c1 && c2 ? c1._id === c2._id : c1 === c2;
    };
    ObjetDetailComponent.prototype.selectedDanger = function (event) {
        var dangersArr = this.dangers.value == "" ? [] : this.dangers.value.split(",");
        var possibleValue = event.option.value;
        for (var _i = 0, dangersArr_1 = dangersArr; _i < dangersArr_1.length; _i++) {
            var danger = dangersArr_1[_i];
            if (danger == event.option.value)
                possibleValue = "";
        }
        if (possibleValue != "") {
            dangersArr.push(event.option.value);
            this.dangers.setValue(dangersArr.join(","));
        }
        this.dangerInput.nativeElement.value = '';
        this.dangers_chips.setValue(null);
        console.dir("selected", this.dangers);
    };
    ObjetDetailComponent.prototype.addOnBlur = function () {
    };
    ObjetDetailComponent.prototype.addDanger = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            var possibleValue = "";
            for (var _i = 0, _a = this.globalDangers; _i < _a.length; _i++) {
                var danger = _a[_i];
                if (danger.titre == value.trim() || danger.logo == value.toLowerCase().trim()) {
                    possibleValue = danger.logo;
                }
            }
            var dangersArr = this.dangers.value == "" ? [] : this.dangers.value.split(",");
            for (var _b = 0, dangersArr_2 = dangersArr; _b < dangersArr_2.length; _b++) {
                var danger = dangersArr_2[_b];
                if (danger == possibleValue)
                    possibleValue = "";
            }
            if (possibleValue != "") {
                dangersArr.push(possibleValue);
                this.dangers.setValue(dangersArr.join(","));
            }
        }
        if (input) {
            input.value = '';
        }
        this.dangers_chips.setValue(null);
        console.dir("add", this.dangers);
    };
    ObjetDetailComponent.prototype.removeDanger = function (danger) {
        var dangersArr = this.dangers.value.split(",");
        var index = dangersArr.indexOf(danger);
        if (index >= 0) {
            dangersArr.splice(index, 1);
            this.dangers.setValue(dangersArr.join(","));
        }
        console.dir("delete", this.dangers);
    };
    ObjetDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.objetForm.get('_id').value != 'new') {
            this.subscription = this.objetService.updateObjet(this.objetForm.value).subscribe(function () { return _this.goBack(); });
        }
        else {
            this.subscription = this.objetService.addObjet(this.objetForm.value).subscribe(function () { return _this.goBack(); });
        }
    };
    ObjetDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ObjetDetailComponent.prototype.onFicheCount = function (count) {
        this.fichesCount = count;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dangerInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ObjetDetailComponent.prototype, "dangerInput", void 0);
    ObjetDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objet-detail',
            template: __webpack_require__(/*! ./objet-detail.component.html */ "./src/app/objet-detail/objet-detail.component.html"),
            styles: [__webpack_require__(/*! ./objet-detail.component.css */ "./src/app/objet-detail/objet-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_objet_service__WEBPACK_IMPORTED_MODULE_4__["ObjetService"],
            _services_marque_service__WEBPACK_IMPORTED_MODULE_5__["MarqueService"],
            _services_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ObjetDetailComponent);
    return ObjetDetailComponent;
}());



/***/ }),

/***/ "./src/app/objets-alert/objets-alert.component.css":
/*!*********************************************************!*\
  !*** ./src/app/objets-alert/objets-alert.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nposition: fixed;\r\nbottom: 90px;\r\nright: 20px;\r\n}\r\n.mat-card{\r\nposition: absolute;\r\nbottom: 70px;\r\nright: 0px;\r\nmin-width: 350px;\r\n}\r\n.mat-card-title > mat-icon{\r\n  cursor:pointer;\r\n  float: right;\r\n}\r\nspan.critere-img{\r\nheight: 20px;\r\ndisplay: inline-block;\r\nfont-size: 0.5em;\r\nmargin-right: 5px;\r\n}\r\nspan.critere-img img{\r\nheight:100%;\r\n}"

/***/ }),

/***/ "./src/app/objets-alert/objets-alert.component.html":
/*!**********************************************************!*\
  !*** ./src/app/objets-alert/objets-alert.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <button mat-fab color=\"warn\" (click)=\"toggleAlerts()\" *ngIf=\"currentUser && objets.length!=0\" ><mat-icon>warning</mat-icon></button>\n\n   <mat-card *ngIf=\"display\">\n      <mat-card-title>Objets en alerte <mat-icon (click)=\"toggleAlerts()\">clear</mat-icon></mat-card-title>\n      <mat-card-subtitle *ngIf=\"objets?.length == 0\">\n        Aucun objet en alerte ...\n      </mat-card-subtitle>\n      <mat-card-content>\n      <mat-nav-list dense>\n          <a mat-list-item *ngFor=\"let objet of objets\" routerLink=\"/objet/{{objet._id}}\">\n             <span class=\"critere-img\"><img src=\"./assets/categories/{{objet.categorie}}_\" alt=\"\"></span> <span>{{objet.designation}} (Quantité restante : {{objet.quantite}}{{objet.unite}})</span>\n          </a>\n      </mat-nav-list>\n    </mat-card-content>\n    </mat-card>\n\n</section>"

/***/ }),

/***/ "./src/app/objets-alert/objets-alert.component.ts":
/*!********************************************************!*\
  !*** ./src/app/objets-alert/objets-alert.component.ts ***!
  \********************************************************/
/*! exports provided: ObjetsAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetsAlertComponent", function() { return ObjetsAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ObjetsAlertComponent = /** @class */ (function () {
    function ObjetsAlertComponent(objetService, authenticationService) {
        this.objetService = objetService;
        this.authenticationService = authenticationService;
        this.objets = [];
        this.display = false;
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    ObjetsAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getObjets();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    ObjetsAlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ObjetsAlertComponent.prototype.getObjets = function () {
        var _this = this;
        this.subscription = this.objetService.getObjetsAlert().subscribe(function (objets) { return _this.objets = objets; });
        this.subscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].interval(_helpers_global__WEBPACK_IMPORTED_MODULE_5__["requestRefreshTimer"]).subscribe(function (x) {
            _this.getObjets();
        });
    };
    ObjetsAlertComponent.prototype.toggleAlerts = function () {
        this.display = !this.display;
    };
    ObjetsAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objets-alert',
            template: __webpack_require__(/*! ./objets-alert.component.html */ "./src/app/objets-alert/objets-alert.component.html"),
            styles: [__webpack_require__(/*! ./objets-alert.component.css */ "./src/app/objets-alert/objets-alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_objet_service__WEBPACK_IMPORTED_MODULE_3__["ObjetService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ObjetsAlertComponent);
    return ObjetsAlertComponent;
}());



/***/ }),

/***/ "./src/app/objets-import/objets-import.component.css":
/*!***********************************************************!*\
  !*** ./src/app/objets-import/objets-import.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin:10px auto;\r\n  width:90%;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/objets-import/objets-import.component.html":
/*!************************************************************!*\
  !*** ./src/app/objets-import/objets-import.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Fichier\n        </mat-panel-title>\n        <mat-panel-description>\n          Choix du fichier d'import\n          <mat-icon>insert_drive_file</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div>\n        <p>Téléchargez le modèle de <a href=\"./assets/templates/import_objets.csv\">fichier à importer</a> puis complétez-le.</p>\n        <p>Une fois le fichier complété, importez-le dans l'outil à l'étape suivante.</p>\n      </div>\n      <mat-action-row>\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Suivant</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Chargement\n        </mat-panel-title>\n        <mat-panel-description>\n          Chargement des données\n          <mat-icon>cloud_download</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div>\n        <p>Choisissez le fichier en cliquant sur Parcourir. Une fois le fichier sélectionné, cliquez sur le bouton <b>Charger</b>.</p>\n        <p>Patientez le temps du chargement puis passez à l'étape suivante.</p>\n      </div>\n      <mat-divider></mat-divider>\n      <input style=\"display:none\" id=\"input-file-id\" type=\"file\" (change)=\"updateFile($event)\" accept=\".csv\"/>\n      <label for=\"input-file-id\">{{importFileName}}</label>\n\n      <button mat-button color=\"primary\" (click)=\"uploadFile()\">Charger</button>\n      <mat-progress-bar mode=\"query\" *ngIf=\"importProgress === 1\"></mat-progress-bar>\n      <mat-action-row>\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Précédent</button>\n        <button mat-button color=\"primary\" (click)=\"nextStep()\" [disabled]=\"importProgress != 2\">Suivant</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Import\n        </mat-panel-title>\n        <mat-panel-description>\n          Importation dans la base\n          <mat-icon>cloud_done</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div>\n        <p>Contrôlez l'analyse du fichier à importer proposée par l'outil.</p>\n        <p>Si l'analyse est conforme et si au moins un objet peut être importé, cliquez sur le bouton <strong>Importer</strong> sinon modifier le fichier et recommencez à l'étape 1.</p>\n      </div>\n\n      <mat-tab-group>\n        <mat-tab>\n          <ng-template mat-tab-label>\n            <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n            <span matBadge=\"{{importObjets.length}}\" matBadgeOverlap=\"false\">A importer</span>\n          </ng-template>\n          <mat-list role=\"list\">\n              <mat-list-item *ngIf=\"importObjets?.length == 0\">Aucun objet à importer !</mat-list-item>\n              <mat-list-item role=\"listitem\" *ngFor=\"let importObjet of importObjets\">{{importObjet.designation}}</mat-list-item>\n          </mat-list>\n        </mat-tab>\n\n        <mat-tab>\n          <ng-template mat-tab-label>\n            <mat-icon class=\"example-tab-icon\">thumb_down</mat-icon>\n             <span matBadge=\"{{importErrors.length}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\">En erreur</span>\n          </ng-template>\n          <div>\n          <mat-list role=\"list\">\n              <mat-list-item role=\"listitem\" *ngIf=\"importErrors?.length == 0\">Aucun objet en erreur !</mat-list-item>\n              <mat-list-item role=\"listitem\" *ngFor=\"let importError of importErrors\">{{importError}}</mat-list-item>\n          </mat-list>\n        </div>\n        </mat-tab>\n\n      </mat-tab-group>\n\n      <mat-progress-bar mode=\"query\" *ngIf=\"executeProgress === 1\"></mat-progress-bar>\n\n      <mat-action-row>\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Précédent</button>\n        <button mat-button color=\"primary\" (click)=\"execute()\" [disabled]=\"importObjets?.length == 0\">Tout est OK ! Importer</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n</section>"

/***/ }),

/***/ "./src/app/objets-import/objets-import.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/objets-import/objets-import.component.ts ***!
  \**********************************************************/
/*! exports provided: ObjetsImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetsImportComponent", function() { return ObjetsImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/categorie.service */ "./src/app/_services/categorie.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ObjetsImportComponent = /** @class */ (function () {
    function ObjetsImportComponent(objetService, marqueService, categorieService, messageService, alertService, snackBar) {
        this.objetService = objetService;
        this.marqueService = marqueService;
        this.categorieService = categorieService;
        this.messageService = messageService;
        this.alertService = alertService;
        this.snackBar = snackBar;
        this.importObjets = [];
        this.importErrors = [];
        this.importString = "";
        this.importFileName = "Parcourir...";
        this.importPhase = 1;
        this.importProgress = 0;
        this.executeProgress = 0;
        this.step = 0;
        this.globalDangers = _helpers_global__WEBPACK_IMPORTED_MODULE_7__["dangers"];
    }
    ObjetsImportComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ObjetsImportComponent.prototype.nextStep = function () {
        this.step++;
    };
    ObjetsImportComponent.prototype.prevStep = function () {
        this.step--;
    };
    ObjetsImportComponent.prototype.ngOnInit = function () {
        this.getObjets();
    };
    ObjetsImportComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ObjetsImportComponent.prototype.getObjets = function () {
        var _this = this;
        this.subscription = this.objetService.getObjets().subscribe(function (objets) { return _this.objets = objets; });
    };
    ObjetsImportComponent.prototype.updateFile = function (event) {
        var _this = this;
        var importFile = event.target.files[0];
        var importReader = new FileReader();
        this.importFileName = importFile.name + " (" + importFile.size + " octets)";
        this.importPhase = 1;
        this.importProgress = 0;
        this.executeProgress = 0;
        this.importObjets = [];
        this.importErrors = [];
        this.importString = "";
        importReader.onloadend = function (e) {
            _this.importString = importReader.result;
        };
        importReader.readAsText(importFile);
    };
    ObjetsImportComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.importString == "") {
            this.snackBar.open("Vous devez d'abord choisir un fichier à importer !", 'Compris');
        }
        else {
            this.importPhase = 2;
            this.importProgress = 1;
            this.subscription = this.marqueService.getMarques().subscribe(function (marques) {
                _this.marques = marques;
                _this.categorieService.getCategories().subscribe(function (categories) {
                    _this.categories = categories;
                    _this.uploadObjets(_this.importString);
                });
            });
        }
    };
    ObjetsImportComponent.prototype.uploadObjets = function (result) {
        this.importObjets = [];
        this.importErrors = [];
        var importObjects = result.split("\r\n");
        var importStartLine = 1; //First line is header
        var importFieldLength = 12;
        var designationPosition = 1;
        var categoriePosition = 2;
        var quantitePosition = 3;
        var unitePosition = 4;
        var seuilAlertePosition = 5;
        var dangersPosition = 6;
        var localisationPosition = 7;
        var commentairePosition = 8;
        var referencePosition = 9;
        var marquePosition = 10;
        var prixPosition = 11;
        for (var i = importStartLine; i < importObjects.length; i++) {
            var importObject = importObjects[i].split(";");
            if (importObject.length != importFieldLength) {
                this.importErrors.push("Ligne " + i + " : Pas assez de paramètres.");
                continue;
            }
            var re = /,/;
            importObject[quantitePosition] = importObject[quantitePosition].replace(re, ".");
            importObject[seuilAlertePosition] = importObject[seuilAlertePosition].replace(re, ".");
            importObject[prixPosition] = importObject[prixPosition].replace(re, ".");
            if (importObject[designationPosition] == "") {
                this.importErrors.push("Ligne " + i + " : La Désignation est obligatoire mais non fournie.");
                continue;
            }
            var objet = null;
            if (importObject[designationPosition] != "") {
                objet = this.objets.find(function (obj) { return obj.designation === importObject[designationPosition]; });
                if (objet) {
                    this.importErrors.push("Ligne " + i + " : La Désignation correspond déjà à un objet existant (" + objet.designation + ").");
                    continue;
                }
            }
            if (importObject[categoriePosition] == "") {
                this.importErrors.push("Ligne " + i + " : La Catégorie est obligatoire mais non fournie.");
                continue;
            }
            if (importObject[quantitePosition] == "") {
                this.importErrors.push("Ligne " + i + " : La Quantité est obligatoire mais non fournie.");
                continue;
            }
            if (isNaN(Number(importObject[quantitePosition]))) {
                this.importErrors.push("Ligne " + i + " : La quantité ne représente pas un nombre (" + importObject[quantitePosition] + ")");
                continue;
            }
            if (importObject[seuilAlertePosition] != "" && isNaN(Number(importObject[seuilAlertePosition]))) {
                this.importErrors.push("Ligne " + i + " : Le seuil d'alerte est fixé mais ne représente pas un nombre (" + importObject[seuilAlertePosition] + ").");
                continue;
            }
            if (importObject[prixPosition] != "" && isNaN(Number(importObject[prixPosition]))) {
                this.importErrors.push("Ligne " + i + " : Le prix est fixé mais ne représente pas un nombre (" + importObject[prixPosition] + ").");
                continue;
            }
            var marque = null;
            if (importObject[marquePosition] != "") {
                marque = this.marques.find(function (obj) { return obj.nom === importObject[marquePosition]; });
                if (marque === undefined) {
                    this.importErrors.push("Ligne " + i + " : La marque n'existe pas (" + importObject[marquePosition] + ").");
                    continue;
                }
            }
            var categorie = null;
            if (importObject[categoriePosition] != "") {
                categorie = this.categories.find(function (obj) { return obj.nom === importObject[categoriePosition]; });
                if (categorie === undefined) {
                    this.importErrors.push("Ligne " + i + " : La catégorie n'existe pas (" + importObject[categoriePosition] + ").");
                    continue;
                }
            }
            if (importObject[dangersPosition] != "") {
                var dangersArr = importObject[dangersPosition].split(",");
                var dangerPb = false;
                var _loop_1 = function (danger) {
                    dangerItem = this_1.globalDangers.find(function (obj) { return obj.logo === danger; });
                    if (dangerItem === undefined) {
                        dangerPb = true;
                    }
                };
                var this_1 = this, dangerItem;
                for (var _i = 0, dangersArr_1 = dangersArr; _i < dangersArr_1.length; _i++) {
                    var danger = dangersArr_1[_i];
                    _loop_1(danger);
                }
                if (dangerPb) {
                    this.importErrors.push("Ligne " + i + " : Les dangers sont mal définis ou n'existent pas (" + importObject[dangersPosition] + ").");
                    continue;
                }
            }
            else {
                importObject[dangersPosition] = null;
            }
            if (importObject[unitePosition] == "") {
                importObject[unitePosition] = null;
            }
            if (importObject[localisationPosition] == "") {
                importObject[localisationPosition] = null;
            }
            if (importObject[commentairePosition] == "") {
                importObject[commentairePosition] = null;
            }
            if (importObject[referencePosition] == "") {
                importObject[referencePosition] = null;
            }
            var tmpObjet = {
                _id: null,
                designation: importObject[designationPosition],
                categorie: categorie,
                quantite: Number(importObject[quantitePosition]),
                unite: importObject[unitePosition],
                seuil_alerte: Number(importObject[seuilAlertePosition]),
                dangers: importObject[dangersPosition],
                localisation: importObject[localisationPosition],
                commentaire: importObject[commentairePosition],
                reference: importObject[referencePosition],
                marque: marque,
                prix: Number(importObject[prixPosition])
            };
            this.importObjets.push(tmpObjet);
        }
        this.importString = "";
        this.importProgress = 2;
    };
    ObjetsImportComponent.prototype.execute = function () {
        var _this = this;
        this.executeProgress = 1;
        this.subscription = this.objetService.importObjets(this.importObjets).subscribe(function (objets) {
            if (objets && (objets.length == _this.importObjets.length)) {
                _this.executeProgress = 2;
                _this.snackBar.open("L'import est maintenant terminé (" + objets.length + " objets importés)", 'Compris');
            }
            else {
                _this.executeProgress = 3;
                _this.snackBar.open("Un problème a eu lieu pendant l'importation...", 'Compris');
            }
        });
    };
    ObjetsImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objets-import',
            template: __webpack_require__(/*! ./objets-import.component.html */ "./src/app/objets-import/objets-import.component.html"),
            styles: [__webpack_require__(/*! ./objets-import.component.css */ "./src/app/objets-import/objets-import.component.css")]
        }),
        __metadata("design:paramtypes", [_services_objet_service__WEBPACK_IMPORTED_MODULE_2__["ObjetService"],
            _services_marque_service__WEBPACK_IMPORTED_MODULE_3__["MarqueService"],
            _services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ObjetsImportComponent);
    return ObjetsImportComponent;
}());



/***/ }),

/***/ "./src/app/objets-navigateur/objets-navigateur.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/objets-navigateur/objets-navigateur.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/objets-navigateur/objets-navigateur.component.html":
/*!********************************************************************!*\
  !*** ./src/app/objets-navigateur/objets-navigateur.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <app-navigateur [reduceMode]=\"true\" (selectedObjet)=\"onObjetSelect($event)\"></app-navigateur>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"onCancelClick()\">Annuler</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/objets-navigateur/objets-navigateur.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/objets-navigateur/objets-navigateur.component.ts ***!
  \******************************************************************/
/*! exports provided: ObjetsNavigateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetsNavigateurComponent", function() { return ObjetsNavigateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ObjetsNavigateurComponent = /** @class */ (function () {
    function ObjetsNavigateurComponent(objetService, dialogRef, data) {
        this.objetService = objetService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.multi = false;
        this.multi = data.multi;
    }
    ObjetsNavigateurComponent.prototype.ngOnInit = function () {
    };
    ObjetsNavigateurComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    ObjetsNavigateurComponent.prototype.onObjetSelect = function (objet) {
        this.dialogRef.close(objet);
    };
    ObjetsNavigateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objets-navigateur',
            template: __webpack_require__(/*! ./objets-navigateur.component.html */ "./src/app/objets-navigateur/objets-navigateur.component.html"),
            styles: [__webpack_require__(/*! ./objets-navigateur.component.css */ "./src/app/objets-navigateur/objets-navigateur.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_objet_service__WEBPACK_IMPORTED_MODULE_2__["ObjetService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ObjetsNavigateurComponent);
    return ObjetsNavigateurComponent;
}());



/***/ }),

/***/ "./src/app/objets/objets.component.css":
/*!*********************************************!*\
  !*** ./src/app/objets/objets.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nwidth:90%;\r\nmargin:10px auto;\r\n}\r\n.mat-form-field.filter-form {\r\nwidth: 100%;\r\n}\r\n.mat-form-field.objet-form {\r\nwidth: 70px;\r\ntext-align: right;\r\n}\r\ntable{\r\nwidth:100%;\r\n}\r\n.mat-form-field-wrapper{\r\npadding-bottom:0!important;\r\n}\r\n.mat-form-field-appearance-outline{\r\npadding:0;\r\n}"

/***/ }),

/***/ "./src/app/objets/objets.component.html":
/*!**********************************************!*\
  !*** ./src/app/objets/objets.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n\r\n<!-- <div [ngStyle]=\"{'display': display}\" class=\"alert alert-warning\" role=\"alert\" *ngIf=\"objets?.length == 0\">\r\n    <button type=\"button\" (click)=\"display='none'\" class=\"close-alert\">×</button>\r\n    <mat-icon>warning</mat-icon>\r\n    <span>Aucun objet n'est enregistré pour cette sélection !</span>\r\n  </div> -->\r\n  <mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\r\n\r\n  <div>\r\n    <mat-form-field class=\"filter-form\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"designation\" matSortDirection=\"asc\">\r\n\r\n        <ng-container matColumnDef=\"icone\">\r\n          <th mat-header-cell *matHeaderCellDef> Icône </th>\r\n          <td mat-cell *matCellDef=\"let objet\"> <img height=\"30\" src=\"./assets/categories/{{objet.categorie._id}}_\" title=\"{{objet.categorie.nom}}\" alt=\"\"> </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"designation\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Désignation </th>\r\n          <td mat-cell *matCellDef=\"let objet\">\r\n            <mat-icon *ngIf=\"objet.quantite==objet.seuil_alerte\" class=\"icon-warning\">error</mat-icon>\r\n            <mat-icon *ngIf=\"objet.quantite>objet.seuil_alerte\"  class=\"icon-success\">check_circle</mat-icon>\r\n            <mat-icon *ngIf=\"objet.quantite<objet.seuil_alerte\"  class=\"icon-danger\">warning</mat-icon>\r\n            <span >{{objet.designation}}</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"quantite\">\r\n          <th mat-header-cell *matHeaderCellDef> Quantité </th>\r\n          <td mat-cell *matCellDef=\"let objet\">\r\n            <button (click)=\"decreaseQuantite(objet)\" class=\"minus-button\">-</button><mat-form-field class=\"objet-form\"><input (change)=\"changeQuantite(objet)\" matInput [(ngModel)]=\"objet.quantite\"/><span matSuffix>{{objet.unite}}</span></mat-form-field><button (click)=\"increaseQuantite(objet)\" class=\"plus-button\">+</button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dangers\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Dangers </th>\r\n          <td mat-cell *matCellDef=\"let objet\">{{objet.dangers}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"localisation\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Localisation </th>\r\n          <td mat-cell *matCellDef=\"let objet\">{{objet.localisation}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"marque\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Marque </th>\r\n          <td mat-cell *matCellDef=\"let objet\">{{objet.marque?.nom}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let objet\">\r\n              <button *ngIf=\"currentUser\" mat-button color=\"primary\" (click)=\"edit(objet)\"><mat-icon>edit</mat-icon> Modifier</button>\r\n              <button *ngIf=\"currentUser.profil == 'ADMIN'\" mat-button color=\"warn\" (click)=\"delete(objet)\"><mat-icon>delete</mat-icon> Supprimer</button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let objet;let row; columns: displayedColumns;\" (click)=\"onSelect(objet)\"></tr>\r\n\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[20, 40, 60]\" [pageIndex]=\"0\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-button-group\">\r\n    <button *ngIf=\"standaloneList && currentUser.profil == 'ADMIN' && displayactions\" mat-fab color=\"primary\" (click)=\"add()\" title=\"Ajouter\"><mat-icon>add</mat-icon></button>\r\n    <button *ngIf=\"displayactions\" mat-fab color=\"primary\" (click)=\"export()\" title=\"Exporter\"><mat-icon>backup</mat-icon></button>\r\n    <button *ngIf=\"!displayactions\" mat-fab color=\"primary\" (click)=\"displayactions = !displayactions\" title=\"Menu\"><mat-icon>more_vert</mat-icon></button>\r\n    <button *ngIf=\"displayactions\" mat-fab color=\"primary\" (click)=\"displayactions = !displayactions\" title=\"Menu\"><mat-icon>more_horiz</mat-icon></button>\r\n  </div>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/objets/objets.component.ts":
/*!********************************************!*\
  !*** ./src/app/objets/objets.component.ts ***!
  \********************************************/
/*! exports provided: ObjetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetsComponent", function() { return ObjetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_marque__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/marque */ "./src/app/_models/marque.ts");
/* harmony import */ var _models_categorie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/categorie */ "./src/app/_models/categorie.ts");
/* harmony import */ var _services_objet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/objet.service */ "./src/app/_services/objet.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_export_csv_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/export-csv.service */ "./src/app/_services/export-csv.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ObjetsComponent = /** @class */ (function () {
    function ObjetsComponent(objetService, messageService, authenticationService, exportCsvService, router, location, snackBar) {
        this.objetService = objetService;
        this.messageService = messageService;
        this.authenticationService = authenticationService;
        this.exportCsvService = exportCsvService;
        this.router = router;
        this.location = location;
        this.snackBar = snackBar;
        this.selectedObjet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countObjet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayactions = false;
        this.standaloneList = true;
        this.isLoading = false;
        this.displayedColumns = ['icone', 'designation', 'quantite', 'dangers', 'localisation', 'marque', 'actions'];
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    Object.defineProperty(ObjetsComponent.prototype, "categorie", {
        get: function () {
            return this._categorie;
        },
        set: function (value) {
            this._categorie = value;
            this.getObjets();
        },
        enumerable: true,
        configurable: true
    });
    ObjetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getObjets();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    ObjetsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ObjetsComponent.prototype.getObjets = function () {
        var _this = this;
        var filter = {};
        if (this.marque) {
            filter['marque'] = this.marque._id;
        }
        if (this.categorie) {
            filter['categorie'] = this.categorie._id;
        }
        if (this.marque || this.categorie) {
            this.standaloneList = false;
        }
        this.subscription = this.objetService.getObjets(filter).subscribe(function (objets) {
            _this.objets = objets;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](objets);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            if (objets.length == 0) {
                _this.snackBar.open("Aucun objet n'est enregistré pour cette sélection !", 'Compris');
            }
            _this.isLoading = false;
            _this.countObjet.emit(_this.objets.length);
        });
    };
    ObjetsComponent.prototype.edit = function (objet) {
        this.router.navigate(['/objet', objet._id]);
    };
    ObjetsComponent.prototype.delete = function (objet) {
        this.objets = this.objets.filter(function (o) { return o !== objet; });
        this.dataSource.data = this.objets;
        this.subscription = this.objetService.deleteObjet(objet).subscribe();
        this.countObjet.emit(this.objets.length);
    };
    ObjetsComponent.prototype.add = function () {
        this.router.navigate(['/objet/new']);
    };
    ObjetsComponent.prototype.onSelect = function (objet) {
        this.selectedObjet.emit(objet);
    };
    ObjetsComponent.prototype.onUpdate = function (updated) {
        this.getObjets();
    };
    ObjetsComponent.prototype.decreaseQuantite = function (objet, index) {
        var _this = this;
        objet.quantite--;
        this.subscription = this.objetService.updateObjet(objet).subscribe(function (objet) { return _this.objets[index] = objet; });
    };
    ObjetsComponent.prototype.changeQuantite = function (objet, index) {
        var _this = this;
        this.subscription = this.objetService.updateObjet(objet).subscribe(function (objet) { return _this.objets[index] = objet; });
    };
    ObjetsComponent.prototype.increaseQuantite = function (objet, index) {
        var _this = this;
        objet.quantite++;
        this.subscription = this.objetService.updateObjet(objet).subscribe(function (objet) { return _this.objets[index] = objet; });
    };
    ObjetsComponent.prototype.export = function () {
        var jsonToCsv = [];
        for (var _i = 0, _a = this.objets; _i < _a.length; _i++) {
            var objet = _a[_i];
            jsonToCsv.push({ 'Désignation': objet.designation, "Catégorie": objet.categorie.nom, "Quantité disponible": objet.quantite, "Unité": objet.unite, "Seuil d'alerte": objet.seuil_alerte, "Dangers": objet.dangers, "Localisation": objet.localisation, "Commentaire": objet.commentaire, "Référence": objet.reference, "Marque": objet.marque ? objet.marque.nom : null, "Prix": objet.prix });
        }
        this.exportCsvService.downloadFile(JSON.stringify(jsonToCsv), "objets");
    };
    ObjetsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_marque__WEBPACK_IMPORTED_MODULE_4__["Marque"])
    ], ObjetsComponent.prototype, "marque", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ObjetsComponent.prototype, "selectedObjet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ObjetsComponent.prototype, "countObjet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"]),
        __metadata("design:paramtypes", [_models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"]])
    ], ObjetsComponent.prototype, "categorie", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ObjetsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ObjetsComponent.prototype, "paginator", void 0);
    ObjetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objets',
            template: __webpack_require__(/*! ./objets.component.html */ "./src/app/objets/objets.component.html"),
            styles: [__webpack_require__(/*! ./objets.component.css */ "./src/app/objets/objets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_objet_service__WEBPACK_IMPORTED_MODULE_6__["ObjetService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _services_export_csv_service__WEBPACK_IMPORTED_MODULE_9__["ExportCsvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ObjetsComponent);
    return ObjetsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>S'enregistrer</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"nom\">Nom</label>\n        <input type=\"text\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\" />\n        <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nom.errors.required\">Le nom est obligatoire.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">L'email est obligatoire.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Le mot de passe est obligatoire.</div>\n            <div *ngIf=\"f.password.errors.minlength\">Le mot de passe doit être composé d'au moins 6 caractères.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">S'enregistrer</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Annuler</a>\n    </div>\n</form>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, alertService, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error.error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\nwidth:90%;\r\nmargin:10px auto;\r\n}\r\n.mat-form-field {\r\nwidth: 100%;\r\n}\r\ntable{\r\nwidth:100%;\r\n}"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n<!-- <div [ngStyle]=\"{'display': display}\" class=\"alert alert-warning\" role=\"alert\" *ngIf=\"users?.length == 0\">\n    <button type=\"button\" (click)=\"display='none'\" class=\"close-alert\">×</button>\n    <mat-icon>warning</mat-icon>\n    <span>Aucun utilisateur n'est enregistré !</span>\n  </div> -->\n  <mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\n\n  <div>\n    <mat-form-field class=\"filter-form\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n\n      <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"nom\" matSortDirection=\"asc\">\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n          <td mat-cell *matCellDef=\"let user\"> {{user._id}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nom\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n          <td mat-cell *matCellDef=\"let user\"> <span [matBadge]=\"user._id == currentUser._id?'U':''\" matBadgeOverlap=\"false\">{{user.nom}}</span> </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n          <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"profil\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Profil </th>\n          <td mat-cell *matCellDef=\"let user\">{{user.profil}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let user\">\n              <button [disabled]=\"(user._id == currentUser._id)?'':null\" mat-button color=\"warn\" (click)=\"delete(user)\"><mat-icon>delete</mat-icon> Supprimer</button>\n              <button [disabled]=\"(user._id == currentUser._id || user.profil == userProfilAdmin)?'':null\" mat-button color=\"primary\" (click)=\"changeUserProfil(user,userProfilAdmin)\">Administrateur</button>\n              <button [disabled]=\"(user._id == currentUser._id || user.profil == userProfilUser)?'':null\" mat-button color=\"primary\" (click)=\"changeUserProfil(user,userProfilUser)\">Utilisateur</button>\n              <button [disabled]=\"(user._id == currentUser._id || user.profil == userProfilRead)?'':null\" mat-button color=\"primary\" (click)=\"changeUserProfil(user,userProfilRead)\">Lecture seule</button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[20, 40, 60]\" [pageIndex]=\"0\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/global */ "./src/app/_helpers/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(authenticationService, snackBar) {
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.userProfilAdmin = _helpers_global__WEBPACK_IMPORTED_MODULE_3__["userProfilAdmin"];
        this.userProfilUser = _helpers_global__WEBPACK_IMPORTED_MODULE_3__["userProfilUser"];
        this.userProfilRead = _helpers_global__WEBPACK_IMPORTED_MODULE_3__["userProfilRead"];
        this.isLoading = false;
        this.displayedColumns = ['id', 'nom', 'email', 'profil', 'actions'];
        this.currentUser = this.authenticationService.getCurrentUser();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getUsers();
        this.currentUser = this.authenticationService.getCurrentUser();
        this.authenticationService.change.subscribe(function (isAuthenticate) {
            _this.currentUser = _this.authenticationService.getCurrentUser();
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.subscription = this.authenticationService.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            if (users.length == 0) {
                _this.snackBar.open('Aucun utilisateur enregistrée !', 'Compris');
            }
            _this.isLoading = false;
        });
    };
    UsersComponent.prototype.delete = function (user) {
        this.users = this.users.filter(function (o) { return o !== user; });
        this.dataSource.data = this.users;
        this.subscription = this.authenticationService.deleteUser(user).subscribe();
    };
    UsersComponent.prototype.changeUserProfil = function (user, profil) {
        user.profil = profil;
        this.subscription = this.authenticationService.updateUser(user).subscribe();
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], UsersComponent);
    return UsersComponent;
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
    production: false
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Hubert\Git\myLabo\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map