import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { ConfigService } from './services/config.service';
import { NutrientsService } from './services/nutrients-service/nutrients.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _resourceURL = "http://ec2-35-154-65-5.ap-south-1.compute.amazonaws.com:8070";

	public appData: any;
  public nutriData: any;
  public configData: any;
  title = 'Welcome to like2eat!';
  constructor(
  	private _configService : ConfigService,
    private _route: Router,
    private _nutriService: NutrientsService) {
  	this.appData = this._configService.getData();

    this._nutriService.queryNutrients()
      .subscribe(data => this.nutriData = data.nutritionData)
    //console.log("app comp data"+this.nutriData)
    // this._configService.getJsonData()
    //   .subscribe(data => this.appData = data)
      // this._configService.getConfigJsonData()
      // .then(data => {this.configData = data, console.log("app promise data "+data)})
      // console.log("app comp data"+this._configService.data)
    //this.getNutrients();
  }
  public getResourceUrl(){
    return this._resourceURL;
  }

  /*getNutrients(): void {
    //this.heroService.getHeroes().then(heroes=> this.heroes=heroes);
    this._nutriService.queryNutrients()
      .subscribe(data => this.nutriData = data.nutritionData)
    console.log("app compo data "+this.nutriData)

  }*/
 }
