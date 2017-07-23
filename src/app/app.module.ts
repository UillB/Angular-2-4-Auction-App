import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {appRoutes} from './config/route.config';

import {MainComponent} from './components/main/main.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AllItemsComponent} from './components/all-items/all-items.component';
import {ElectronicItemsComponent} from './components/electronic-items/electronic-items.component';
import {FashionItemsComponent} from './components/fashion-items/fashion-items.component';
import {HomeItemsComponent} from './components/home-items/home-items.component';
import {BookItemsComponent} from './components/book-items/book-items.component';
import {ChildrenItemsComponent} from './components/children-items/children-items.component';
import {MiscItemsComponent} from './components/misc-items/misc-items.component';
import {SellButtonComponent} from './components/sell-button/sell-button.component';


import {MainService} from './services/main.service';
import {HttpService} from './services/http.service';

import {TruncatePipe} from './config/truncate';

import {ModalModule} from 'ngx-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [
    MainComponent,
    NavigationComponent,
    AllItemsComponent,
    ElectronicItemsComponent,
    FashionItemsComponent,
    HomeItemsComponent,
    BookItemsComponent,
    ChildrenItemsComponent,
    MiscItemsComponent,
    SellButtonComponent,
    TruncatePipe
  ],
  providers: [
    MainService,
    HttpService
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
