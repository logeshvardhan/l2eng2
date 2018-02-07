import { Injectable } from '@angular/core';
import {Http,} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailsService {
  private _resourceURL = "http://ec2-35-154-65-5.ap-south-1.compute.amazonaws.com:8070";
  constructor(
		private _http: Http,
    ) { }

  getProductDetails(prodId:string) {
    console.log("app comp")
    return this._http
      .get(this._resourceURL+"/api/products/"+prodId)
      .toPromise()
      .then(res => {
        let response:any = {};
  			response.data = res.json();
  			response.headers = res.headers;
        //console.log("prod data "+response.data)
        return response;
        })
      .catch(err => console.log("get product list service error "+err))

		// return this._http
		// .get(this.resourceURL
		// 	+'/api/products/userfilter?filtervalue=prodclass~FRUVEG~eq;&querycond=and&crossFilter=filter')
		// .toPromise()
		// .then(response => response.json())
		// .catch(err => console.log("get product list service error "+err))
	}
}
