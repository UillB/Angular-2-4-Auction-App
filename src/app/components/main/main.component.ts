import { Component, OnInit } from '@angular/core';

import { Item } from '../../app.models';

import { MainService } from '../../services/main.service';

@Component({
    selector: 'main',
    templateUrl: '/app/components/main/main.component.html'
})

export class MainComponent implements OnInit {

    allItems: Item[];

    constructor(private mainService: MainService) { }

    ngOnInit(): void  {
       this.allItems = this.mainService.getItems();
    }
}
