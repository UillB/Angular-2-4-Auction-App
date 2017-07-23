import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Item} from '../../app.models';

import {PostItem} from '../../app.models'

import {MainService} from '../../services/main.service';


@Component({
  selector: 'sell-button',
  templateUrl: '/app/components/sell-button/sell-button.component.html',

})
export class SellButtonComponent implements OnInit {

  items: Item[];
  electronicsItems: Item[];
  fashionItems: Item[];
  homeItems: Item[];
  bookItems: Item[];
  childrenItems: Item[];
  miscItems: Item[];
  addingItem: PostItem;
  weeks: number;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.items = this.mainService.getItems();
    this.electronicsItems = this.mainService.getElectronicItems();
    this.fashionItems = this.mainService.getFashionItems();
    this.homeItems = this.mainService.getHomeItems();
    this.bookItems = this.mainService.getBookItems();
    this.childrenItems = this.mainService.getChildrenItems();
    this.miscItems = this.mainService.getMiscItems();
    this.initNewItem();
  }

  addItem() {
    this.addingItem.StartTime = new Date().getTime();
    this.addingItem.EndTime = this.addingItem.StartTime + this.weeks * 7 * 24 * 60 * 60 * 1000;
    this.mainService.postItems(this.addingItem).subscribe(x => {
      console.log(JSON.stringify(this.addingItem));
      // this.initNewItem();
    });
    alert('Item has been added!');
    this.reloadData()
    this.initNewItem()
  }

  initNewItem() {
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
  }

  reloadData() {
    this.mainService.getItemsFromServer()
  }

  countdown(){
    if(this.weeks === 1){
      console.log("Work 1")
    }
    if(this.weeks === 2){
      console.log("Work 2")
    }
    if(this.weeks === 3){
      console.log("Work 3")
    }
  }
}
