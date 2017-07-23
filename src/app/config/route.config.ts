import { Routes } from '@angular/router';

import { AllItemsComponent } from '../components/all-items/all-items.component';
import { ElectronicItemsComponent } from '../components/electronic-items/electronic-items.component';
import { FashionItemsComponent } from '../components/fashion-items/fashion-items.component';
import { HomeItemsComponent } from '../components/home-items/home-items.component';
import { BookItemsComponent } from '../components/book-items/book-items.component';
import { ChildrenItemsComponent } from '../components/children-items/children-items.component';
import { MiscItemsComponent } from '../components/misc-items/misc-items.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: AllItemsComponent
    },
    {
        path: "all-items",
        component: AllItemsComponent
    },
    {
        path: "electronic-items",
        component: ElectronicItemsComponent
    },
    {
        path: "fashion-items",
        component: FashionItemsComponent
    },
    {
        path: "home-items",
        component: HomeItemsComponent
    },
    {
        path: "book-items",
        component: BookItemsComponent
    },
    {
        path: "children-items",
        component: ChildrenItemsComponent
    },
    {
        path: "misc-items",
        component: MiscItemsComponent
    }
]