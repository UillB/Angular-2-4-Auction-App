import {Component, OnInit} from '@angular/core';

import {Item} from '../../app.models';

import {PostItem} from '../../app.models'

import {MainService} from '../../services/main.service';
import {TruncatePipe} from '../../config/truncate';

@Component({
  selector: 'all-items',
  templateUrl: '/app/components/all-items/all-items.component.html'
})

export class AllItemsComponent implements OnInit {
  allItems: Item[];
  selectedItem: Item;
  currentTime: Number;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.updateCurrentTime();
    this.allItems = this.mainService.getItems();
    this.getServItems();
  }

  updateCurrentTime(): void {
    this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
    setInterval(() => {
      this.currentTime = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
    }, 1000);
  }

  onSelect(item: Item) {
    this.selectedItem = item;

    if (this.selectedItem && this.selectedItem.BidCount === 0) {
      this.selectedItem.HighestBid = {};
    }
  }

  placeBid() {
    if (this.selectedItem.HighestBid.Bid > this.selectedItem.StartBid) {
      this.selectedItem.StartBid = this.selectedItem.HighestBid.Bid;
      this.selectedItem.BidCount += 1;
    }
    else {
      this.selectedItem.StartBid
    }

    this.mainService.putBid(this.selectedItem.Id, this.selectedItem.HighestBid.Bid).subscribe((data) => {
      console.log("Check new bid please")
    })
  }

  delItem(item: Item) {
    this.mainService.deleteItem(item.Id).subscribe(() => {
      let index = this.allItems.indexOf(item.Id);
      this.allItems.splice(index, 1);
      this.repaint()
    })
  }

  getServItems() {
    this.mainService.getItemsFromServer()
  }

  repaint() {
    this.mainService.getItemsFromServer();
  }

}
