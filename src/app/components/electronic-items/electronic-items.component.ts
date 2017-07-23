import {Component, OnInit} from '@angular/core';

import {Item} from '../../app.models';

import {PostItem} from '../../app.models'

import {MainService} from '../../services/main.service';

import {TruncatePipe} from '../../config/truncate';

@Component({
  selector: 'electronic-items',
  templateUrl: '/app/components/electronic-items/electronic-items.component.html'
})

export class ElectronicItemsComponent implements OnInit {
  electronicItems: Item[];
  selectedItem: Item;
  currentTime: number;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.updateCurrentTime();
    this.electronicItems = this.mainService.getElectronicItems();
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

  getServItems() {
    this.mainService.getItemsFromServer()
  }
}
