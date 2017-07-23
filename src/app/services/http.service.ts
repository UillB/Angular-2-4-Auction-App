import {Injectable} from  '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Item} from '../../app/app.models';
import {PostItem} from '../../app/app.models';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {stringify} from "@angular/core/src/util";

@Injectable()

export class HttpService {
  constructor(private httpService: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic dm92YS5hbmQudml0YWx5QGdtYWlsLmNvbTpDJEFkX2FBbkVweWU5ciVK')
    // + btoa('vova.and.vitaly@gmail.com:C$Ad_aAnEpye9r%J')
  }

  getItems(): Observable<Item[]> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.httpService.get("https://ngauctions.azurewebsites.net/api/auctions",
      {headers: headers})
      .map(this.extractData)
      .catch(this.handleError)
    // return this.httpService.get("auctions.json")
    //   .map(this.extractData)
    //   .catch(this.handleError)
  }

  sendItem(sendingItem: PostItem): Observable<PostItem[]> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.httpService.post("https://ngauctions.azurewebsites.net/api/auctions", sendingItem,
      {headers: headers})
      .map(this.extractData)
      .catch(this.extractData)
  }

  putBidItem(auctionId: string, bid: number): Observable<Item[]> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let itemBid = {
      Bid: bid,
      BidTime: new Date().getTime()
    }
    return this.httpService.post("https://ngauctions.azurewebsites.net/api/bids/" + auctionId, itemBid,
      {headers: headers})
      .map(this.extractData)
      .catch(this.extractData)
  }

  deleteItem(auctionId: string) :Observable<Item[]>{
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.httpService.delete("https://ngauctions.azurewebsites.net/api/auctions/" + auctionId,
      {headers: headers})
      .map(this.extractData)
      .catch(this.extractData)
  }


  private extractData(res: Response) {
    let body: any;
    try {
      body = res.json();
    } catch (err) {
      body = undefined;
    }
    return body;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    let errorBody = '';
    if (error._body) {
      errorBody = error._body;
    }

    console.error(errMsg, errorBody);

    return Observable.throw(errMsg);
  }
}
