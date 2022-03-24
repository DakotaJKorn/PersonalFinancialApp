import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommunicationService } from './services/app communication/app-communication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  loggedIn = false;

  menuIconSelected = false;

  dashboardButtonSelected = false;
  marketplacesButtonSelected = false;
  loginButtonSelected = false;
  createAccountButtonSelected = false;

  constructor(private appCommunicationService: AppCommunicationService, private router: Router){
    appCommunicationService.setAppComponent(this);
  }

  toggleMenuIconSelected(){
    this.menuIconSelected = !this.menuIconSelected;
  }

  logoClicked(){
    this.dashboardButtonSelected = false;
    this.marketplacesButtonSelected = false;
    this.loginButtonSelected = false;
    this.createAccountButtonSelected = false;
    this.router.navigate(['/']);
  }

  dashboardButtonClicked(){
    this.dashboardButtonSelected = true;
    this.marketplacesButtonSelected = false;
  }

  marketplacesButtonClicked(){
    this.marketplacesButtonSelected = true;
    this.dashboardButtonSelected = false;
  }

  loginButtonClicked(){
    this.loginButtonSelected = true;
    this.createAccountButtonSelected = false;
    this.router.navigate(['/']);
  }

  createAccountButtonClicked(){
    this.createAccountButtonSelected = true;
    this.loginButtonSelected = false;
    this.router.navigate(['/createAccount']);

  }

  scroll(e: Event){
    let a = ((e.target as Element).scrollTop).toFixed();
    let b = +a;
    this.appCommunicationService.home.setYPosition(b);
  }

  setLoggedIn(){
    this.loggedIn = true;
    this.dashboardButtonClicked();
  }

}
