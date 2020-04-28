import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddoffersService } from './addoffers.service';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.page.html',
  styleUrls: ['./addoffers.page.scss'],
})
export class AddoffersPage implements OnInit {

  productList: any;
  constructor(public navCtrl: NavController, private addoff: AddoffersService) {
  }

  ngOnInit() {
   this.addoff.getProductList().subscribe(
    res => {
      console.log(res);
      this.productList = res;
    }
  );
  }

  goAddNew(){
    }


}
