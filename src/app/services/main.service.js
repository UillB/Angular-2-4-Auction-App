"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var MainService = (function () {
    function MainService(httpService) {
        this.httpService = httpService;
        this.items = [];
        this.electronics = [];
        this.fashion = [];
        this.home = [];
        this.bookItems = [];
        this.childrenItems = [];
        this.miscItems = [];
    }
    MainService.prototype.getItems = function () {
        return this.items;
    };
    MainService.prototype.getElectronicItems = function () {
        return this.electronics;
    };
    MainService.prototype.getFashionItems = function () {
        return this.fashion;
    };
    MainService.prototype.getHomeItems = function () {
        return this.home;
    };
    MainService.prototype.getBookItems = function () {
        return this.bookItems;
    };
    MainService.prototype.getChildrenItems = function () {
        return this.childrenItems;
    };
    MainService.prototype.getMiscItems = function () {
        return this.miscItems;
    };
    MainService.prototype.getItemsFromServer = function () {
        var _this = this;
        this.items.length = 0;
        this.electronics.length = 0;
        this.fashion.length = 0;
        this.home.length = 0;
        this.bookItems.length = 0;
        this.childrenItems.length = 0;
        this.miscItems.length = 0;
        return this.httpService.getItems().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                if (!item.Category)
                    continue;
                switch (item.Category.Id) {
                    case 1:
                        _this.electronics.push(item);
                        break;
                    case 2:
                        _this.fashion.push(item);
                        break;
                    case 3:
                        _this.home.push(item);
                        break;
                    case 4:
                        _this.bookItems.push(item);
                        break;
                    case 5:
                        _this.childrenItems.push(item);
                        break;
                    case 6:
                        _this.miscItems.push(item);
                        break;
                }
                _this.items.push(item);
            }
        });
    };
    MainService.prototype.postItems = function (sendingData) {
        return this.httpService.sendItem(sendingData);
    };
    MainService.prototype.putBid = function (id, bid) {
        return this.httpService.putBidItem(id, bid);
    };
    MainService.prototype.deleteItem = function (id) {
        return this.httpService.deleteItem(id);
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map