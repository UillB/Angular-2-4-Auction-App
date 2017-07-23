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
var main_service_1 = require("../../services/main.service");
var SellButtonComponent = (function () {
    function SellButtonComponent(mainService) {
        this.mainService = mainService;
    }
    SellButtonComponent.prototype.ngOnInit = function () {
        this.items = this.mainService.getItems();
        this.electronicsItems = this.mainService.getElectronicItems();
        this.fashionItems = this.mainService.getFashionItems();
        this.homeItems = this.mainService.getHomeItems();
        this.bookItems = this.mainService.getBookItems();
        this.childrenItems = this.mainService.getChildrenItems();
        this.miscItems = this.mainService.getMiscItems();
        this.initNewItem();
    };
    SellButtonComponent.prototype.addItem = function () {
        var _this = this;
        this.addingItem.StartTime = new Date().getTime();
        this.addingItem.EndTime = this.addingItem.StartTime + this.weeks * 7 * 24 * 60 * 60 * 1000;
        this.mainService.postItems(this.addingItem).subscribe(function (x) {
            console.log(JSON.stringify(_this.addingItem));
            // this.initNewItem();
        });
        alert('Item has been added!');
        this.reloadData();
        this.initNewItem();
    };
    SellButtonComponent.prototype.initNewItem = function () {
        this.weeks = 1;
        this.addingItem = {
            Title: undefined,
            Description: undefined,
            StartTime: undefined,
            EndTime: undefined,
            StartBid: undefined,
            Picture1: undefined,
            Picture2: undefined,
            Picture3: undefined,
            Picture4: undefined,
            IsItemConditionNew: 1,
            CategoryId: 1,
        };
    };
    SellButtonComponent.prototype.reloadData = function () {
        this.mainService.getItemsFromServer();
    };
    SellButtonComponent.prototype.countdown = function () {
        if (this.weeks === 1) {
            console.log("Work 1");
        }
        if (this.weeks === 2) {
            console.log("Work 2");
        }
        if (this.weeks === 3) {
            console.log("Work 3");
        }
    };
    return SellButtonComponent;
}());
SellButtonComponent = __decorate([
    core_1.Component({
        selector: 'sell-button',
        templateUrl: '/app/components/sell-button/sell-button.component.html',
    }),
    __metadata("design:paramtypes", [main_service_1.MainService])
], SellButtonComponent);
exports.SellButtonComponent = SellButtonComponent;
//# sourceMappingURL=sell-button.component.js.map