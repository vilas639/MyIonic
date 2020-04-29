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
      //  this.showAlert('sucess');

      this.calculate('sucess');
        
      },
      err => {
        console.log(err);
        this.isLoading = false;
        //this.showAlert('Failed');
        this.calculate('sucess');
       
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

    async calculate(message: string) {
      // If my condition is true.
      if (true) {
        // show the user a confirm alert.
        const confirmation = await this.warn(message);
        // break out of function since they hit cancel.
        if (!confirmation) return;
      }
  
      // The user hit Okay, continue with this function.
      this.router.navigateByUrl('/addoffers');
    }

    async warn(message: string) {
      return new Promise(async (resolve) => {
        const confirm = await this.alertCtrl.create({
          header: 'confirm',
          message: message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                return resolve(false);
              },
            },
            {
              text: 'OK',
              handler: () => {
                return resolve(true);
              },
            },
          ],
        });
  
        await confirm.present();
      });
    }

    
}
