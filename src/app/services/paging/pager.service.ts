import { Injectable } from '@angular/core';
//import * as _ from 'underscore';

@Injectable()
export class PagerService {

  constructor() { }
  pages: any = [];
  // private _currentPage : number = 1;
  // public getCurrentPage() : number {
  // 	return this._currentPage;
  // }
  // public setCurrentPage(v : number) {
  // 	this._currentPage = v;
  // }

  getPager(totalItems: number, currentPage: number, pageSize: number) {
        // calculate total pages
        //console.log("currentPage ..."+currentPage  )     
        let totalPages = Math.ceil(totalItems / pageSize);
        //console.log("totalPages ..."+totalPages  )     
        //console.log("pageSize ..."+pageSize  )     
        
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 		//console.log(" startPage "+startPage+" endPage "+endPage)
        // create an array of pages to ng-repeat in the pager control
		let pages = [];
		for(var i=startPage; i<=endPage ; i++){
			//console.log(" range "+i)
			if(i-startPage == 0){
				pages[(i-startPage)] = i;
			} else{
				pages[(i-startPage)] = i;
			}
			//console.log(" pages "+pages)
		}
        //let pages = _.range(startPage, endPage + 1);
        //console.log("currentPage "+currentPage  )      
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
