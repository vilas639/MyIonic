import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { AddoffersService } from '../addoffers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newoffers',
  templateUrl: './newoffers.page.html',
  styleUrls: ['./newoffers.page.scss'],
})
export class NewoffersPage implements OnInit {

  product: any = {};
  isLoading = false;
  items:any;

  constructor(public navCtrl: NavController , 
    private addoff: AddoffersService,
    private router: Router,
     private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  insert(){
     // this.product.action = "insert";
     this.isLoading = true;
     this.addoff.insetProduct(this.product).subscribe(data => {
        console.log(data);
        this.items = data;
        this.isLoading = false;
        this.showAlert('sucess');
        this.router.navigateByUrl('/addoffers');
      },
      err => {
        console.log(err);
        this.isLoading = false;
        this.showAlert('Failed');
        this.router.navigateByUrl('/addoffers');
        });
    }


    private showAlert(message: string) {
      this.alertCtrl
        .create({
          header: 'Authentication failed',
          message: message,
          buttons: ['Okay']
        })
        .then(alertEl => alertEl.present());
    }

    
}
