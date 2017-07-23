import {Injectable} from '@angular/core';

import {HttpService} from './http.service';

import {Item} from '../../app/app.models';
import {PostItem} from '../../app/app.models';
import {Observable} from "rxjs/Observable";

@Injectable()

export class MainService {
  items: Item[];
  electronics: Item[];
  fashion: Item[];
  home: Item[];
  bookItems: Item[];
  childrenItems: Item[];
  miscItems: Item[];

  constructor(private httpService: HttpService) {
    this.items = [

      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla This is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla blaThis is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: {
      //     Bid: 130,
      //     BidTime: 1491369604022
      //   },
      //   BidCount: 1
      // },
    ];
    this.electronics = [
      // {
      //   Id: 3,
      //   Title: "Product 3",
      //   Description: "This is third test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 4500.00,
      //   IsItemNew: true,
      //   Picture1: "https://s.appleinsider.ru/2015/04/macbook-pro-13-retina-late-2013-1.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 3,
      //     Name: "Shay Friedman",
      //     Email: "shay-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 1,
      //     Name: "Electronics",
      //   },
      //   HighestBid: null,
      //   BidCount: 1
      // }
    ];
    this.fashion = [
      // {
      //   Id: 1,
      //   Title: "Product 1",
      //   Description: "This is first test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 100.50,
      //   IsItemNew: false,
      //   Picture1: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 1,
      //     Name: "Vova Burd",
      //     Email: "vova-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 2,
      //     Name: "Fashion",
      //   },
      //   HighestBid: null,
      //   BidCount: 3
      // }
    ];
    this.home = [
      // {
      //   Id: 4,
      //   Title: "Product 4",
      //   Description: "This is fourth test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 530.50,
      //   IsItemNew: false,
      //   Picture1: "https://i.ytimg.com/vi/CjZxUk8heZA/maxresdefault.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 4,
      //     Name: "Some Guy",
      //     Email: "some-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 3,
      //     Name: "Home",
      //   },
      //   HighestBid: null,
      //   BidCount: 2
      // }
    ];
    this.bookItems = [
      // {
      //   Id: 5,
      //   Title: "Product 5",
      //   Description: "This is fifth test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 160.50,
      //   IsItemNew: true,
      //   Picture1: "http://www.mlinking.net/Courses/IoCS.2015/content/Books/Invitation-to-Computer-Science.5ed.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 5,
      //     Name: "Book Guy",
      //     Email: "bookguy-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 4,
      //     Name: "Books",
      //   },
      //   HighestBid: null,
      //   BidCount: 1
      // }
    ];
    this.childrenItems = [
      // {
      //   Id: 6,
      //   Title: "Product 6",
      //   Description: "This is sixth test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 80.0,
      //   IsItemNew: false,
      //   Picture1: "http://www.belliesbeyond.com/blog/wp-content/uploads/2012/11/11-27-12-Ride-on-Toy.jpg",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 6,
      //     Name: "Yosi Aibinder",
      //     Email: "yosi-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 5,
      //     Name: "Children",
      //   },
      //   HighestBid: null,
      //   BidCount: 1
      // }
    ];
    this.miscItems = [
      // {
      //   Id: 7,
      //   Title: "Product 7",
      //   Description: "This is seventh test item and his description bla bla bla bla bla bla bla bla",
      //   StartTime: 1491368604022,
      //   EndTime: 1491368604023,
      //   StartBid: 80.0,
      //   IsItemNew: false,
      //   Picture1: "https://images.kitchenaid.com/is/image/KitchenAid/KMT4115ER?id=USQR32&fmt=jpg&fit=constrain,1&wid=434&hei=434",
      //   Picture2: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture3: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   Picture4: "http://ikrossovki.com/images/BRANDS/Nike/Roshe-Run/nike-roshe-run-midnight-navy.jpg",
      //   User: {
      //     Id: 7,
      //     Name: "Yonathan Netaniyagu",
      //     Email: "yonathan-test@gmail.com",
      //     LastLoginTime: 1491368605022,
      //     CreatedOn: 1491369604022
      //   },
      //   Category: {
      //     Id: 6,
      //     Name: "Misc",
      //   },
      //   HighestBid: null,
      //   BidCount: 5
      // }
    ];
  }

  getItems() {
    return this.items;
  }

  getElectronicItems() {
    return this.electronics;
  }

  getFashionItems() {
    return this.fashion;
  }

  getHomeItems() {
    return this.home;
  }

  getBookItems() {
    return this.bookItems;
  }

  getChildrenItems() {
    return this.childrenItems;
  }

  getMiscItems() {
    return this.miscItems;
  }

  getItemsFromServer() {
    this.items.length = 0;
    this.electronics.length = 0;
    this.fashion.length = 0;
    this.home.length =0;
    this.bookItems.length = 0;
    this.childrenItems.length = 0;
    this.miscItems.length = 0;
    return this.httpService.getItems().subscribe((data) => {
      for (let item of data) {
        if(!item.Category) continue
        switch (item.Category.Id) {
          case 1 :
            this.electronics.push(item)
            break
          case 2 :
            this.fashion.push(item)
            break
          case 3 :
            this.home.push(item)
            break
          case 4 :
            this.bookItems.push(item)
            break
          case 5 :
            this.childrenItems.push(item)
            break
          case 6 :
            this.miscItems.push(item)
            break
        }
        this.items.push(item)
      }

    });
  }

  postItems(sendingData: PostItem): Observable<PostItem[]> {
    return this.httpService.sendItem(sendingData);
  }

  putBid(id: string, bid: number): Observable<Item[]> {
    return this.httpService.putBidItem(id, bid)
  }

  deleteItem(id: string): Observable<Item[]> {
    return this.httpService.deleteItem(id);
  }
}
