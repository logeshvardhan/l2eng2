import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service'
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
  '../../app.component.css']
})
export class NavbarComponent implements OnInit {
  config: any;
  constructor(
  	private _appComp: AppComponent,
    private _configService: ConfigService) {

      //.then(data => {this.config = data, console.log("navbar promise data "+data)})
    }

  ngOnInit() {
  	//this._configService.load();
    //console.log('navbar: '+ (this._appComp.appData));

    //this.config = this._appComp.appData;

    this._configService.getJsonData()
      .subscribe(data => this.config = data)

    //console.log("navbar promise data "+JSON.stringify(this.config))


    //this.config = this._configService.data;
    //console.log('navbar: '+ (this._configService.getData()));
  }

}
