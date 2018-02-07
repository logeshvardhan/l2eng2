import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../app.component.css']
})
export class HomeComponent implements OnInit {
	config: any;
  imagePath:string;
  constructor(
  	private _configService : ConfigService,
    private _appComp: AppComponent) {
      this._configService.getJsonData()
       .subscribe(data => this.config = data)
     }

  ngOnInit() {
  	//this.config = this._appComponent.appData;
    //console.log("home "+this.config)

    //console.log('home: '+ this._configService.getData());
  }

}
