import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   // inject dependencies needed for http calls
   constructor(private http: HttpClient) { }

   async loggedIn(): Promise<boolean>{
     let isLoggedIn = false;
     if(sessionStorage.getItem('user')){
       const body: {} = {
         token : sessionStorage.getItem('user')
       }
       const res: any = await firstValueFrom(this.http.post("https://vg-db-users.herokuapp.com/auth/getTokenData", body));
       if(!res.error){
         isLoggedIn = true;
       }
     }
     return isLoggedIn;
   }
 
   getToken(body: {}): Observable<any>{
     return this.http.post("https://vg-db-users.herokuapp.com/auth/getToken", body);
   }
 
   getTokenData(body: {}): Observable<any>{
     return this.http.post("https://vg-db-users.herokuapp.com/auth/getTokenData", body);
   }
 
   getUserData(body: {}): Observable<any>{
     return this.http.post("https://vg-db-users.herokuapp.com/auth/getUserData", body);
   }
 
  logout(body: {}): Observable<any>{
    sessionStorage.removeItem('user');
    return this.http.post("https://vg-db-users.herokuapp.com/auth/logout", body);
  }
 
}
