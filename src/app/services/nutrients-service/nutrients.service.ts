import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NutritionData } from '../../components/nutrients/nutrition-data';

@Injectable()
export class NutrientsService {
	
	private UrlResource:string = 'http://ec2-35-154-65-5.ap-south-1.compute.amazonaws.com:8070/api/products/nutrients';
  	 
  	 private _nutrients : any;
  	  public getNutrients() : any {
  	  	return this._nutrients;
  	  }
  	  public setNutrients(v : any) {
  	  	this._nutrients = v;
  	  } 

  	 nutrients:any;
  constructor(
  	private _http: Http) {
  	//this.test();
  	//this.queryNutrients();  	
  	 }
  	 /*test(){
  	 	return this.setNutrients("test");
  	 }*/

     


	  queryNutrients(){
	  	return this._http
	  		.get(this.UrlResource)
        .map(data => data.json());
        /*.toPromise()
        .then((result)=> result.json())
        .catch((error)=>this.handleError)*/
	  		/*.subscribe(
	  			data => console.log(data.json()),
                err => this.handleError(err),
                () => console.log('Simple GET completed'))*/
	  		// .toPromise()
	  		// .then((data) => (console.log(data.json)))
	  		// .catch(error => this.handleError)
	  }

    StrFirstLetterByCaps(input) {
            if (input !== null) {
                return input.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    ;
                });
            }
        }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
