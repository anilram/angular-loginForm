import { Component,OnInit } from '@angular/core';
import {Login} from './model/login';
import accounts from './data/accounts.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  constructor(){}
  model: Login;
  accountTypes:any;
  ngOnInit(){
   this.model = new Login('e','d');
   this.accountTypes=accounts;
  }
 
  onSubmit(name : string,pwd: string){
    console.log(name +" "+ pwd);
  }
 
}
