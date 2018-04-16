import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginData } from './login-data';
import { HttpClient, 
         HttpHeaders } from '@angular/common/http';

const URL:string = 'http://web-dev/js-test-projects/2018/10-angular-form/angular-form/server/';


@Injectable()
export class LoginService {

  constructor( private http: HttpClient) { }

  login( data:LoginData):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let options = { headers: headers};
    console.log('data:',data);
    return this.http.post(URL + 'login.php', data, options);
  }

}
