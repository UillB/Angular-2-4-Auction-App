export interface Item {
    Id: any;
    Title: string;
    Description: any;
    StartTime: number;
    EndTime: number;
    StartBid: number;
    IsItemNew: boolean;
    Picture1: any;
    Picture2: any;
    Picture3: any;
    Picture4: any;
    User: {
        Id: number,
        Name: string,
        Email: any,
        LastLoginTime: number,
        CreatedOn: number
    };
    Category: {
        Id: number,
        Name: string,
    };
    HighestBid?: {
      Bid?  : number,
      BidTime?: number
    };
    BidCount: number;
};

export interface PostItem {
  Title: string,
  Description: string,
  StartTime: number,
  EndTime: number,
  StartBid: number,
  Picture1: any,
  Picture2: any,
  Picture3: any,
  Picture4: any,
  IsItemConditionNew: any,
  CategoryId: number
}
