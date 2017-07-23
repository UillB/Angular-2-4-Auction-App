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
var AllItemsComponent = (function () {
    function AllItemsComponent(mainService) {
        this.mainService = mainService;
    }
    AllItemsComponent.prototype.ngOnInit = function () {
        this.updateCurrentTime();
        this.allItems = this.mainService.getItems();
        this.getServItems();
    };
    AllItemsComponent.prototype.updateCurrentTime = function () {
        var _this = this;
        this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
        setInterval(function () {
            _this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
        }, 1000);
    };
    AllItemsComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        if (this.selectedItem && this.selectedItem.BidCount === 0) {
            this.selectedItem.HighestBid = {};
        }
    };
    AllItemsComponent.prototype.placeBid = function () {
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
    AllItemsComponent.prototype.delItem = function (item) {
        var _this = this;
        this.mainService.deleteItem(item.Id).subscribe(function () {
            var index = _this.allItems.indexOf(item.Id);
            _this.allItems.splice(index, 1);
            _this.repaint();
        });
    };
    AllItemsComponent.prototype.getServItems = function () {
        this.mainService.getItemsFromServer();
    };
    AllItemsComponent.prototype.repaint = function () {
        this.mainService.getItemsFromServer();
    };
    return AllItemsComponent;
}());
AllItemsComponent = __decorate([
    core_1.Component({
        selector: 'all-items',
        templateUrl: '/app/components/all-items/all-items.component.html'
    }),
    __metadata("design:paramtypes", [main_service_1.MainService])
], AllItemsComponent);
exports.AllItemsComponent = AllItemsComponent;
//# sourceMappingURL=all-items.component.js.map