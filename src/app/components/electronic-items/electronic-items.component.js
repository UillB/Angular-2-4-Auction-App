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
var ElectronicItemsComponent = (function () {
    function ElectronicItemsComponent(mainService) {
        this.mainService = mainService;
    }
    ElectronicItemsComponent.prototype.ngOnInit = function () {
        this.updateCurrentTime();
        this.electronicItems = this.mainService.getElectronicItems();
        this.getServItems();
    };
    ElectronicItemsComponent.prototype.updateCurrentTime = function () {
        var _this = this;
        this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
        setInterval(function () {
            _this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
        }, 1000);
    };
    ElectronicItemsComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        if (this.selectedItem && this.selectedItem.BidCount === 0) {
            this.selectedItem.HighestBid = {};
        }
    };
    ElectronicItemsComponent.prototype.placeBid = function () {
        if (this.selectedItem.HighestBid.Bid > this.selectedItem.StartBid) {
            this.selectedItem.StartBid = this.selectedItem.HighestBid.Bid;
            this.selectedItem.BidCount += 1;
        }
        else {
            this.selectedItem.StartBid;
        }
        this.mainService.putBid(this.selectedItem.Id, this.selectedItem.HighestBid.Bid).subscribe(function (data) {
            console.log("Check new bid please");
        });
    };
    ElectronicItemsComponent.prototype.getServItems = function () {
        this.mainService.getItemsFromServer();
    };
    return ElectronicItemsComponent;
}());
ElectronicItemsComponent = __decorate([
    core_1.Component({
        selector: 'electronic-items',
        templateUrl: '/app/components/electronic-items/electronic-items.component.html'
    }),
    __metadata("design:paramtypes", [main_service_1.MainService])
], ElectronicItemsComponent);
exports.ElectronicItemsComponent = ElectronicItemsComponent;
//# sourceMappingURL=electronic-items.component.js.map