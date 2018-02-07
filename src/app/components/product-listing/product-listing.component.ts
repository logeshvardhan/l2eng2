import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../../services/product-listing-service/product-listing.service';
import { AppComponent } from '../../app.component';
import { PaginatePipe, PaginationService } from 'ng2-pagination';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PagerService } from '../../services/paging/pager.service'
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css',
  '../../app.component.css']
})
export class ProductListingComponent implements OnInit {

	config: any;
	products: any = [];
	imagePath:string;
	headers: any;
	totelProduct: number;
	pageSize:any;
	pages = [];
	pageCount = 0;
	pageSlice:any;
	currPageNumber:number;
	sliceStart:number;
	sliceEnd:number;
	toSlice:number = 0;
  paramsData:any;
  filterValue:any;
  crossFilter:any;
  mainFilter:any;
  queryCond:any;
  testPageNum:number;
  // pager object
  pager: any = {};
	private _page: number = 1;
    private _total: number;
  constructor(
  	private _prodListService :ProductListingService,
  	private _appComp: AppComponent,
  	private _route: Router,
    private _actdRoute: ActivatedRoute,
    private _pagerService: PagerService,
    private _configService :ConfigService) {
      this.config = this._configService.getData();
      this.imagePath = this.config.imagesproductpath;
      this.pageSize = parseInt(this.config.common_pagesize);//get total prod per page
      this.pageSlice = parseInt(this.config.max_slice);
      this._actdRoute.params
        .subscribe(data => {
          this.filterValue = data['fltrVal'];
          this.crossFilter = data['crossFlt'];
          this.mainFilter = data['mainFlt'];
          this.queryCond = data['qryCond'];
          this.currPageNumber = parseInt(data['pgNum']);
          //console.log("test comp cons")
          this.getPage(this.currPageNumber);
        })


    // this._configService.getJsonData()
    //   .subscribe(data => {
    //     this.config = data;
    //     this.imagePath = data.imagesproductpath;
    //     this.pageSize = data.common_pagesize;//get total prod per page
    //   	this.pageSlice = parseInt(data.max_slice);
    //     this.getPage(this.currPageNumber);
    //   })

    //.switchMap((params:Params) => this.currPageNumber = params['pgNum'])

    //console.log("page size "+this.pageSize)
    // console.log("filterValue "+this.filterValue)
    // console.log("crossFilter "+this.crossFilter)
    // console.log("mainFilter "+this.mainFilter)
    // console.log("queryCond "+this.queryCond)
    // console.log("currPageNumber "+this.currPageNumber)
  }

  ngOnInit() {
    //console.log("test comp init")

  	//this.config = this._appComp.appData;
  	//this.imagePath = this._appComp.appData.imagesproductpath;
  	//this.pageSize = this.config.common_pagesize;//get total prod per page
  	//this.pageSlice = this.config.max_slice; //get total pages to show
  	//this.sliceStart = 0;
  	//this.sliceEnd = this.sliceEnd==null?this.pageSlice:this.sliceEnd;
    //this._route.navigate(['/list', this.currPageNumber, this.pageSize])
    // this._actdRoute.params
    // .switchMap((params:Params) => this.currPageNumber = params["pgNum"])
    //this.currPageNumber = this._pagerService.getCurrentPage();
    //console.log("currPage "+this.currPageNumber)
  	//console.log("page size "+this.pageSize)
    //console.log("currPageNumber "+this.currPageNumber)
    //this.getPage(this.currPageNumber);

  }

  getPage(currPage: number){
    this.currPageNumber = currPage;
  	this._page = currPage -1;
  	this._prodListService.getProductsByFilterPaging(
      this.filterValue,
      this.crossFilter,
      this.mainFilter,
      this.queryCond,
  		this.pageSize,
  		this._page
  		).then(response => {
			this.products = (response.data);
			this.headers = response.headers;
			this.totelProduct = response.productCount;
			this.pageCount = Math.ceil(+this.totelProduct /+this.pageSize);
      //console.log("page count "+this.pageCount)
      this.pager = this._pagerService.getPager(this.totelProduct, this.currPageNumber, this.pageSize);
      //console.log("pager "+JSON.stringify(this.pager))
      //this.currPageNumber = this.pager.currentPage;
      //this._pagerService.setCurrentPage(this.currPageNumber)
      // let serCurrPage = this._pagerService.getCurrentPage();
      //this.testPageNum = response.currPage;
      //console.log("server testPageNum "+this.testPageNum)
      //console.log("after currPageNumber "+this._pagerService.getCurrentPage())
      //this._route.navigate(['/list', this.pager.currentPage])
      /*console.log("------------------------")
      console.log("pager "+JSON.stringify(this.pager))
      console.log("------------------------")*/

		})

  }



}
