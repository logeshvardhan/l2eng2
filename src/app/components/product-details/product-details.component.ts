import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { ProductDetailsService } from '../../services/product-details-service/product-details.service'
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css',
  '../../app.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private productId:string;
  private product:any;
  private config:any;
  private imagescommonpath: string;
  private imagesproductpath: string;
  private tab ='Basic';
  benefits:String[];
  constructor(
    private _route: Router,
    private _actdRoute: ActivatedRoute,
    private _prodDetilServ:ProductDetailsService,
    private _configService :ConfigService) {
      this.config = this._configService.getData();
      this.imagescommonpath = this.config.imagescommonpath;
      this.imagesproductpath = this.config.imagesproductpath;
      this._actdRoute.params
        .subscribe(data => {
          this.productId = data['productId'];
          console.log("productId "+this.productId);

        })
        this.getProductDetails(this.productId);
  }

  ngOnInit() {
  }

  getProductDetails(prodId:string){
    //getProductsByfilter
    console.log("testt")
    this._prodDetilServ.getProductDetails(prodId)
      .then(response =>
      {
        this.product = (response.data);
        this.benefits = ((this.product.benefits)!=null)?(this.product.benefits).split("."):[];
        this.benefits.length = this.benefits.length-1;
        //console.log("benefits "+this.benefits)
      //  console.log("products "+JSON.stringify(this.product))
      })
  }

}
