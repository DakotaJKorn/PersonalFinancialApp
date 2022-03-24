import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login_url = "https://blooming-chamber-88429.herokuapp.com/userlogin/loginAttempt"
  accounts_url = "https://blooming-chamber-88429.herokuapp.com/useraccounts/";
  createLogin_url = "https://blooming-chamber-88429.herokuapp.com/userlogin"
  createUser_url = "https://blooming-chamber-88429.herokuapp.com/user"

  constructor(private http: HttpClient) { }


  getUserData(email : string, password : string): Observable<any>{
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);

    return this.http.get(this.login_url, {params: params});
  }

  getUserAccounts(id: number): Observable<any>{
    return this.http.get(this.accounts_url + String(id));
  }

  addUserLogin(email: string, password: string): Observable<any>{
    return this.http.post(this.createLogin_url + `?email=${email}&password=${password}`, {});
  }

  addUser(email: string, password: string, firstName: string, lastName: string, phoneNumber: string): Observable<any>{
    return this.http.post(this.createUser_url + `?email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}`, {});
  }

}
