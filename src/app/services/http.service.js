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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HttpService = (function () {
    function HttpService(httpService) {
        this.httpService = httpService;
    }
    HttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic dm92YS5hbmQudml0YWx5QGdtYWlsLmNvbTpDJEFkX2FBbkVweWU5ciVK');
        // + btoa('vova.and.vitaly@gmail.com:C$Ad_aAnEpye9r%J')
    };
    HttpService.prototype.getItems = function () {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        return this.httpService.get("https://ngauctions.azurewebsites.net/api/auctions", { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
        // return this.httpService.get("auctions.json")
        //   .map(this.extractData)
        //   .catch(this.handleError)
    };
    HttpService.prototype.sendItem = function (sendingItem) {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        return this.httpService.post("https://ngauctions.azurewebsites.net/api/auctions", sendingItem, { headers: headers })
            .map(this.extractData)
            .catch(this.extractData);
    };
    HttpService.prototype.putBidItem = function (auctionId, bid) {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        var itemBid = {
            Bid: bid,
            BidTime: new Date().getTime()
        };
        return this.httpService.post("https://ngauctions.azurewebsites.net/api/bids/" + auctionId, itemBid, { headers: headers })
            .map(this.extractData)
            .catch(this.extractData);
    };
    HttpService.prototype.deleteItem = function (auctionId) {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        return this.httpService.delete("https://ngauctions.azurewebsites.net/api/auctions/" + auctionId, { headers: headers })
            .map(this.extractData)
            .catch(this.extractData);
    };
    HttpService.prototype.extractData = function (res) {
        var body;
        try {
            body = res.json();
        }
        catch (err) {
            body = undefined;
        }
        return body;
    };
    HttpService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        var errorBody = '';
        if (error._body) {
            errorBody = error._body;
        }
        console.error(errMsg, errorBody);
        return Observable_1.Observable.throw(errMsg);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map