"use strict";
var all_items_component_1 = require("../components/all-items/all-items.component");
var electronic_items_component_1 = require("../components/electronic-items/electronic-items.component");
var fashion_items_component_1 = require("../components/fashion-items/fashion-items.component");
var home_items_component_1 = require("../components/home-items/home-items.component");
var book_items_component_1 = require("../components/book-items/book-items.component");
var children_items_component_1 = require("../components/children-items/children-items.component");
var misc_items_component_1 = require("../components/misc-items/misc-items.component");
exports.appRoutes = [
    {
        path: '',
        component: all_items_component_1.AllItemsComponent
    },
    {
        path: "all-items",
        component: all_items_component_1.AllItemsComponent
    },
    {
        path: "electronic-items",
        component: electronic_items_component_1.ElectronicItemsComponent
    },
    {
        path: "fashion-items",
        component: fashion_items_component_1.FashionItemsComponent
    },
    {
        path: "home-items",
        component: home_items_component_1.HomeItemsComponent
    },
    {
        path: "book-items",
        component: book_items_component_1.BookItemsComponent
    },
    {
        path: "children-items",
        component: children_items_component_1.ChildrenItemsComponent
    },
    {
        path: "misc-items",
        component: misc_items_component_1.MiscItemsComponent
    }
];
//# sourceMappingURL=route.config.js.map