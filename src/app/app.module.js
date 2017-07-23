"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var route_config_1 = require("./config/route.config");
var main_component_1 = require("./components/main/main.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var all_items_component_1 = require("./components/all-items/all-items.component");
var electronic_items_component_1 = require("./components/electronic-items/electronic-items.component");
var fashion_items_component_1 = require("./components/fashion-items/fashion-items.component");
var home_items_component_1 = require("./components/home-items/home-items.component");
var book_items_component_1 = require("./components/book-items/book-items.component");
var children_items_component_1 = require("./components/children-items/children-items.component");
var misc_items_component_1 = require("./components/misc-items/misc-items.component");
var sell_button_component_1 = require("./components/sell-button/sell-button.component");
var main_service_1 = require("./services/main.service");
var http_service_1 = require("./services/http.service");
var truncate_1 = require("./config/truncate");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(route_config_1.appRoutes),
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_2.CarouselModule.forRoot()
        ],
        declarations: [
            main_component_1.MainComponent,
            navigation_component_1.NavigationComponent,
            all_items_component_1.AllItemsComponent,
            electronic_items_component_1.ElectronicItemsComponent,
            fashion_items_component_1.FashionItemsComponent,
            home_items_component_1.HomeItemsComponent,
            book_items_component_1.BookItemsComponent,
            children_items_component_1.ChildrenItemsComponent,
            misc_items_component_1.MiscItemsComponent,
            sell_button_component_1.SellButtonComponent,
            truncate_1.TruncatePipe
        ],
        providers: [
            main_service_1.MainService,
            http_service_1.HttpService
        ],
        bootstrap: [main_component_1.MainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map