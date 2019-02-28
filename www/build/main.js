webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(77);
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
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cart = [];
        this.cart = this.navParams.get('cart');
        this.consumerForm = this.navParams.get('consumerForm');
        this.totalPrice = this.navParams.get('totalPrice');
        this.totalPiece = this.navParams.get('totalPiece');
        this.name = this.consumerForm.controls['name'].value;
        this.tel = this.consumerForm.controls['tel'].value;
        this.email = this.consumerForm.controls['email'].value;
        this.address = this.consumerForm.controls['address'].value;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
        this.presentLoading();
        // console.log(this.cart);
        // console.log(this.consumerForm);
        // console.log(this.totalPrice);
        // console.log(this.totalPiece);
        // console.log(this.name);
        // console.log(this.tel);
        // console.log(this.email);
        // console.log(this.address);
    };
    ConfirmPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 100
            // duration: 1000
        });
        loader.present();
    };
    ConfirmPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Make sure that is your right informations',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.nextPage();
                    }
                }
            ]
        });
        alert.present();
    };
    ConfirmPage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\confirm\confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Receipt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-grid>\n    <ion-row *ngFor="let product of cart;let i = index" style="border-bottom: 1px gray solid">\n      <ion-col col-8 padding-horizontal>\n        <p>{{ product.name }}</p>\n      </ion-col>\n      <ion-col col-2 text-center class="vertical-align-content">\n          <span style="padding-right:5px">{{ product.amount }}</span>\n          <span style="padding-right:5px"><ion-icon name="arrow-up" class="iconround" (click)="increaseAmount(product)"></ion-icon></span>\n          <ion-icon name="arrow-down" class="iconround" (click)="decreaseAmount(product)"></ion-icon>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <button ion-button color="danger" style="width:50%" (click)="delCart(i)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <ion-grid>\n    <ion-row style="border-bottom: 1px gray solid">\n      <ion-col col-7 text-center>\n        <strong>Product Name</strong>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <strong>Qty</strong>\n      </ion-col>\n      <ion-col col-3 text-center>\n        <strong>Price</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let product of cart;let i = index" style="border-bottom: 1px gray solid">\n      <ion-col col-7 style="padding-left: 10px">\n        <p>{{ product.name }}</p>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <p>{{ product.amount }}</p>\n      </ion-col>\n      <ion-col col-3 text-center>\n        <p>{{ product.amount * product.cost }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row style="border-bottom: 1px gray solid">\n      <ion-col col-7 text-center>\n        <strong>Total Price</strong>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <p>{{ totalPiece }}</p>\n      </ion-col>\n      <ion-col col-3 text-center>\n        <p>{{ totalPrice }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid padding>\n    <strong>Customer Details : </strong>\n    <ion-row>\n      <ion-col col-3 text-right>\n        Name :  \n      </ion-col>\n      <ion-col col-9 text-left>\n        {{ name }}  \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 text-right>\n        Tel :  \n      </ion-col>\n      <ion-col col-9 text-left>\n        {{ tel }}  \n      </ion-col>\n    </ion-row>  \n    <ion-row>\n      <ion-col col-3 text-right>\n        Email :  \n      </ion-col>\n      <ion-col col-9 text-left>\n        {{ email }}  \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 text-right>\n        Address :  \n      </ion-col>\n      <ion-col col-9 text-left>\n        {{ address }}  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button block (click)="presentConfirm()">Confirm</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the DetailOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailOrderPage = /** @class */ (function () {
    function DetailOrderPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cart = [];
        this.totalPrice = 0;
        this.badge = 0;
        this.detailShow = true;
        this.totalPiece = 0;
        this.cart = this.navParams.get('cart');
        this.checkBadge();
        this.consumerForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tel: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            address: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    DetailOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailOrderPage');
        console.log(this.cart);
        this.checkTotalPrice();
    };
    DetailOrderPage.prototype.increaseAmount = function (item) {
        item.amount += 1;
        this.checkTotalPrice();
    };
    DetailOrderPage.prototype.decreaseAmount = function (item) {
        item.amount -= 1;
        this.checkTotalPrice();
    };
    DetailOrderPage.prototype.delCart = function (index) {
        this.cart.splice(index, 1);
        this.checkTotalPrice();
    };
    DetailOrderPage.prototype.checkTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.cart.forEach(function (element) {
            _this.totalPrice = _this.totalPrice + (element.cost * element.amount);
        });
        this.checkBadge();
        this.checkPiece();
        console.log(this.totalPiece);
        console.log(this.totalPrice);
    };
    DetailOrderPage.prototype.checkBadge = function () {
        this.badge = this.cart.length;
        //why cannot use expression "this.badge = 0"
        if (this.badge < 1) {
            this.detailShow = true;
        }
        else {
            this.detailShow = false;
        }
    };
    DetailOrderPage.prototype.checkPiece = function () {
        var _this = this;
        this.totalPiece = 0;
        this.cart.forEach(function (element) {
            _this.totalPiece = _this.totalPiece + element.amount;
        });
    };
    DetailOrderPage.prototype.nextPage = function () {
        if (this.consumerForm.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */], { cart: this.cart,
                consumerForm: this.consumerForm,
                totalPrice: this.totalPrice,
                totalPiece: this.totalPiece });
        }
        else {
            console.log('Invalid FormGroup');
        }
    };
    DetailOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-order',template:/*ion-inline-start:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\detail-order\detail-order.html"*/'<!--\n  Generated template for the DetailOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Your Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- content -->\n<ion-content padding>\n\n  <!-- Product-Lists -->\n  <ion-grid style="border-bottom: 1px black solid">\n    <ion-row>\n      <ion-col col-8 text-center>\n        <strong>Product Name</strong>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <strong>Qty</strong>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <ion-icon name="close"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- if cart is not null -->\n  <ion-grid>\n    <ion-row *ngFor="let product of cart;let i = index" style="border-bottom: 1px gray solid">\n      <ion-col col-8 padding-horizontal>\n        <p>{{ product.name }}</p>\n      </ion-col>\n      <ion-col col-2 text-center class="vertical-align-content">\n          <span style="padding-right:5px">{{ product.amount }}</span>\n          <span style="padding-right:5px"><ion-icon name="arrow-up" class="iconround" (click)="increaseAmount(product)"></ion-icon></span>\n          <ion-icon name="arrow-down" class="iconround" (click)="decreaseAmount(product)"></ion-icon>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <button ion-button color="danger" style="width:50%" (click)="delCart(i)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- if cart is null -->\n  <ion-grid *ngIf="detailShow">\n    <ion-row style="border-bottom: 1px gray solid">\n      <ion-col col-8 padding-horizontal>\n        <p>None</p>\n      </ion-col>\n      <ion-col col-2 text-center class="vertical-align-content"></ion-col>\n      <ion-col col-2 text-center></ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Consumer-Detail -->\n  <form [formGroup]="consumerForm" (ngSubmit)="logForm()">\n    <ion-list >\n      <ion-item text-center>\n        <strong>Consumer Detail</strong>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Name :</ion-label>\n        <ion-input type="text" formControlName="name" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Tel :</ion-label>\n        <ion-input type="number" formControlName="tel" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <!-- Check Validate Email -->\n        <ion-label fixed>Email :</ion-label>\n        <ion-input type="text" formControlName="email" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Address :</ion-label>\n        <ion-input type="text" formControlName="address" required></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n  \n</ion-content>\n\n<!-- footer -->\n<ion-footer style="padding:0 8px">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-5 text-center class="vertical-align-content">\n        <strong>Total Price :  </strong>{{ totalPrice }}\n      </ion-col>\n      <ion-col col-7>\n        <button ion-button block color="primary" (click)="nextPage()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\detail-order\detail-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], DetailOrderPage);
    return DetailOrderPage;
}());

//# sourceMappingURL=detail-order.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionPage = /** @class */ (function () {
    function OptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Transaction = [
            'Add', 'Delete'
        ];
        this.productsTitle = [
            'MainCourse', 'Snack', 'Drink'
        ];
        // type1MainCourse/type2Snack/type3Drink
        this.productsLists = [
            [
                { type: 1, id: 1, name: 'Original PorkSteak', cost: 59 },
                { type: 1, id: 2, name: 'Black peppered Steak', cost: 69 },
                { type: 1, id: 3, name: 'Avocado Shoulder Steak', cost: 79 },
                { type: 1, id: 4, name: 'Avocado Chop Steak', cost: 99 },
                { type: 1, id: 5, name: 'Crispy Chicken Steak', cost: 79 },
                { type: 1, id: 6, name: 'Chicken Breast Steak', cost: 99 }
            ],
            [
                { type: 2, id: 1, name: 'Stream Fish Ball', cost: 49 },
                { type: 2, id: 2, name: 'French Fries', cost: 59 },
                { type: 2, id: 3, name: 'Fish & Ships', cost: 59 },
                { type: 2, id: 4, name: 'Chicken Fingers', cost: 79 },
                { type: 2, id: 5, name: 'Baked Spanish and Cheese', cost: 89 },
                { type: 2, id: 6, name: 'Croquette', cost: 99 }
            ],
            [
                { type: 3, id: 1, name: 'Coke', cost: 40 },
                { type: 3, id: 2, name: 'Iced Bugget', cost: 15 }
            ]
        ];
    }
    OptionPage.prototype.ionViewDidLoad = function () {
        this.Transactions = 'Add';
    };
    OptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-option',template:/*ion-inline-start:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\option\option.html"*/'<!--\n  Generated template for the OptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>Edit Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-segment [(ngModel)]="Transactions">\n      <ion-segment-button *ngFor="let item of Transaction" value="{{item}}">\n        {{item}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="Transactions">\n    <ion-list *ngSwitchCase="\'Add\'">\n      <ion-item>\n        <ion-label>Type</ion-label>\n        <ion-select [(ngModel)]="Type">\n          <ion-option value="{{item}}" *ngFor="let item of productsTitle">{{item}}</ion-option>\n        </ion-select>\n      </ion-item> \n      <ion-item >\n        <ion-label>Name</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n      <ion-item >\n        <ion-label>Cost</ion-label>\n        <ion-input type="number" value=""></ion-input>\n      </ion-item>\n      <button ion-button block >Add</button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Delete\'">\n      <ion-item>\n        <ion-label>Item Type Deleted</ion-label>\n        <ion-select [(ngModel)]="TypeDelete">\n          <ion-option value="0">MainCourse</ion-option>\n          <ion-option value="1">Snack</ion-option>\n          <ion-option value="2">Drink</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Item List</ion-label>\n        <ion-select [(ngModel)]="itemDelete">\n          <ion-option value="{{item.name}}" *ngFor="let item of productsLists[TypeDelete]">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <button ion-button block >Delete</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\option\option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OptionPage);
    return OptionPage;
}());

//# sourceMappingURL=option.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirm/confirm.module": [
		271,
		2
	],
	"../pages/detail-order/detail-order.module": [
		272,
		1
	],
	"../pages/option/option.module": [
		273,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detail_order_detail_order__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_option_option__ = __webpack_require__(102);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_order_detail_order__["a" /* DetailOrderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_option_option__["a" /* OptionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-order/detail-order.module#DetailOrderPageModule', name: 'DetailOrderPage', segment: 'detail-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/option/option.module#OptionPageModule', name: 'OptionPage', segment: 'option', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_order_detail_order__["a" /* DetailOrderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_option_option__["a" /* OptionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_option_option__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_option_option__["a" /* OptionPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\app\app.html"*/'<ion-menu [content]=" content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n                {{ page.title }}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_order_detail_order__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.badge = 0;
        this.cart = [];
        this.check = false;
        // public products = [
        //   {id:1,name:'Original PorkSteak',cost:59},
        //   {id:2,name:'Black peppered Steak',cost:69},
        //   {id:3,name:'Avocado Shoulder Steak',cost:79},
        //   {id:4,name:'Avocado Chop Steak',cost:99},
        //   {id:5,name:'Crispy Chicken Steak',cost:79},
        //   {id:6,name:'Chicken Breast Steak',cost:99},
        // ]
        this.productsTitle = [
            'MainCourse', 'Snack', 'Drink'
        ];
        // type1MainCourse/type2Snack/type3Drink
        this.productsLists = [
            [
                { type: 1, id: 1, name: 'Original PorkSteak', cost: 59 },
                { type: 1, id: 2, name: 'Black peppered Steak', cost: 69 },
                { type: 1, id: 3, name: 'Avocado Shoulder Steak', cost: 79 },
                { type: 1, id: 4, name: 'Avocado Chop Steak', cost: 99 },
                { type: 1, id: 5, name: 'Crispy Chicken Steak', cost: 79 },
                { type: 1, id: 6, name: 'Chicken Breast Steak', cost: 99 }
            ],
            [
                { type: 2, id: 1, name: 'Stream Fish Ball', cost: 49 },
                { type: 2, id: 2, name: 'French Fries', cost: 59 },
                { type: 2, id: 3, name: 'Fish & Ships', cost: 59 },
                { type: 2, id: 4, name: 'Chicken Fingers', cost: 79 },
                { type: 2, id: 5, name: 'Baked Spanish and Cheese', cost: 89 },
                { type: 2, id: 6, name: 'Croquette', cost: 99 }
            ],
            [
                { type: 3, id: 1, name: 'Coke', cost: 40 },
                { type: 3, id: 2, name: 'Iced Bugget', cost: 15 }
            ]
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.FoodType = 'MainCourse';
        this.checkBadge();
        console.log(this.cart);
    };
    HomePage.prototype.addProduct = function (item) {
        this.checkInclude = this.cart.indexOf(item);
        if (this.checkInclude == -1) {
            item.amount = 1;
            this.cart.push(item);
            console.log('Added Successful');
            console.log(this.cart);
            this.checkBadge();
        }
        else {
            this.toastCtrl.create({
                message: 'This Product has been added',
                showCloseButton: true,
                position: 'top',
                duration: 2000,
                closeButtonText: 'Done'
            }).present();
        }
    };
    HomePage.prototype.checkBadge = function () {
        this.badge = this.cart.length;
    };
    HomePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_order_detail_order__["a" /* DetailOrderPage */], { cart: this.cart });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Shopping\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div>\n    <ion-segment [(ngModel)]="FoodType">\n      <ion-segment-button *ngFor="let item of productsTitle" value="{{item}}">\n        {{item}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="FoodType">\n\n    <ion-list *ngSwitchCase="\'MainCourse\'">\n      <ion-item *ngFor="let product of productsLists[0]">\n        <p text-left>{{ product.name }} - {{ product.cost }} THB</p>\n        <button ion-button item-right (click)="addProduct(product)">Add</button>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Snack\'">\n      <ion-item *ngFor="let product of productsLists[1]">\n        <p>{{ product.name }} - {{ product.cost }} THB</p>\n        <button ion-button item-right (click)="addProduct(product)">Add</button>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Drink\'">\n      <ion-item *ngFor="let product of productsLists[2]">\n        <p>{{ product.name }} - {{ product.cost }} THB</p>\n        <button ion-button item-right (click)="addProduct(product)">Add</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer style="padding:0 8px">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button color="primary" outline style="pointer-events: none;">\n            <ion-icon name="cart"></ion-icon>\n        </button>\n        <ion-badge >{{ badge }}</ion-badge>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button block color="primary" (click)="nextPage()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n\n\n\n'/*ion-inline-end:"C:\Users\ScificeAceZ\Desktop\orderScreen\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map