import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private loginService:LoginService ){}

  onSubmit(frm:NgForm){
    console.log(frm.value);
    this.loginService.login( frm.value)
                     .subscribe( data=>console.log(data),
                                 err=>console.log('err:',err),
                                 ()=>console.log('complete'));
  }
}
