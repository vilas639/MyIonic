import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddoffersService } from './addoffers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.page.html',
  styleUrls: ['./addoffers.page.scss'],
})
export class AddoffersPage implements OnInit ,OnDestroy {

  isLoading = false;
  productList: any;

  private placesSub: Subscription;
  constructor(public navCtrl: NavController, private addoff: AddoffersService) {
  }
 

  ngOnInit() {
    this.placesSub =   this.addoff.getProductList().subscribe(
    res => {
      console.log(res);
      this.productList = res;
    }
  );
  }

  ionViewWillEnter() {

    console.log("ionViewWillEnter")
    this.isLoading = true;
    this.placesSub =   this.addoff.getProductList().subscribe(
      res => {
        console.log(res);
        this.productList = res;
      }
      );
    }

  ionViewDidEnter()
  {
    console.log("ionViewDidEnter")
  }

  ionViewDidLeave()
  {
    //cancel  Observables
    console.log("ionViewDidLeave")
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

  ionViewWillUnload()
  {
    console.log("ionViewWillUnload")
  }


  ngOnDestroy() {
    console.log("ngOnDestroy")
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
  

  goAddNew(){
    }


}
