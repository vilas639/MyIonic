import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddoffersService {

  productList: any;
  product: any = {};
  constructor(private http: HttpClient) { }



   getProductList() {
    return this.http.get("http://15.206.90.123/ionicservice/readproduct1.php").pipe(
      map(resu => {
            return resu;
            console.log(resu);
          }
      )
    );
   }

   insetProduct(prodcuct: any) {


//var myData = JSON.stringify({username: 'ram'});
var myData = JSON.stringify(prodcuct);


return this.http.post('http://15.206.90.123/ionicservice/insert1.php', myData).pipe(
      map(res =>  {
          return res;
        },
        error => {
          console.log("Oooops!");
          })
    );
  }



}
