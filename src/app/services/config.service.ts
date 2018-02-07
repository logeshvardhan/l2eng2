import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

  private _result: any;
  public data: any;
  constructor(private _http: Http) {
  	 //console.log('config service called.')
  }
  getJsonData(){
    return this._http
      .get('src/app/config/navbar.data.json')
      .map(res => res.json())
      // .subscribe(data => this.data = data)
  }

  getConfigJsonData(){
    return this._http
      .get('src/app/config/navbar.data.json')
      .toPromise()
      .then(res => this._result = res.json())
      .catch(err => this.handleError)
  }

  load(){
  	return new Promise((resolve) => {
  		//this._http.get('src/app/config/test.json')
  		this._http.get('src/app/config/navbar.data.json')
  		.map(res=> res.json())
  		.subscribe(data => {
  			//console.log("result "+JSON.stringify(data))
  			this._result = data;
  			 resolve();
  		});
  	});
  }

  getData(){
  	return this._result;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
