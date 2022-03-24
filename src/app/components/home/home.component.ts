import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommunicationService } from 'src/app/services/app communication/app-communication.service';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn:boolean = false;

  windowWidth!:number;
  windowHeight!:number;

  y:number = 0;

  a1small:boolean = false;
  a2small:boolean = false;
  a3small:boolean = false;
  a4small:boolean = false;
  a5small:boolean = false;

  a1Location!:number;
  a2Location!:number;
  a3Location!:number;
  a4Location!:number;
  a5Location!:number;

  a1LocationScroll!:number;
  a2LocationScroll!:number;
  a3LocationScroll!:number;
  a4LocationScroll!:number;
  a5LocationScroll!:number;

  a1_top_text: string = 'Security is our number one priority.';
  a2_top_text: string = 'Our team puts you first.';

  a3_top_text: string = 'Watch your profits grow.';
  a4_top_text: string = 'Get expert advise from our professionals.';

  a1_hidden_text: string = 'At Condor Financial, we deploy multiple means of security to keep your accounts safe.';
  a2_hidden_text: string = 'You have access to 24/7 support from our team to assist with any of your needs.';
  a3_hidden_text: string = 'Use our interactive features to get the best real time information and advice.';
  a4_hidden_text: string = 'Utilize our free expert advice from our professionals to learn how to secure your future.';

  createAccountTitle:string = 'Create an account today!'

  loginEmail: string = "";
  loginPassword: string = "";
  token: string = "";

  createAccountEmail: string = "";

  constructor(private appCommunication: AppCommunicationService, private router: Router, private loginService: LoginService){
    appCommunication.setHome(this);
  }

  ngOnInit(): void {
    sessionStorage.removeItem("email");
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    
    this.a1Location = document.querySelector('#a1')?.getClientRects()[0].top || 0;
    this.a2Location = document.querySelector('#a2')?.getClientRects()[0].top || 0;
    this.a3Location = document.querySelector('#a3')?.getClientRects()[0].top || 0;
    this.a4Location = document.querySelector('#a4')?.getClientRects()[0].top || 0;
    this.a5Location = document.querySelector('#a5')?.getClientRects()[0].top || 0;

    this.a1LocationScroll = (+((this.a1Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a2LocationScroll = (+((this.a2Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a3LocationScroll = (+((this.a3Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a4LocationScroll = (+((this.a4Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a5LocationScroll = (+((this.a5Location - this.windowHeight).toFixed()) + 200 + this.y);

  }

  
  setYPosition(y: number){

    this.y = y;

    if(y > this.a1LocationScroll) this.a1small = true; else this.a1small = false; 
    if(y > this.a2LocationScroll) this.a2small = true; else this.a2small = false;
    if(y > this.a3LocationScroll) this.a3small = true; else this.a3small = false;
    if(y > this.a4LocationScroll) this.a4small = true; else this.a4small = false;
    if(y > this.a5LocationScroll) this.a5small = true; else this.a5small = false;

  }

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number, innerHeight:number }; }) {
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;

    this.a1small = false;
    this.a2small = false;
    this.a3small = false;
    this.a4small = false;
    this.a5small = false;

    this.a1Location = document.querySelector('#a1')?.getClientRects()[0].top || 0;
    this.a2Location = document.querySelector('#a2')?.getClientRects()[0].top || 0;
    this.a3Location = document.querySelector('#a3')?.getClientRects()[0].top || 0;
    this.a4Location = document.querySelector('#a4')?.getClientRects()[0].top || 0;
    this.a5Location = document.querySelector('#a5')?.getClientRects()[0].top || 0;

    this.a1LocationScroll = (+((this.a1Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a2LocationScroll = (+((this.a2Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a3LocationScroll = (+((this.a3Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a4LocationScroll = (+((this.a4Location - this.windowHeight).toFixed()) + 100 + this.y);
    this.a5LocationScroll = (+((this.a5Location - this.windowHeight).toFixed()) + 200 + this.y);

    this.setYPosition(this.y);

  }

  loginAttempt(){

    this.loginService.getUserData(this.loginEmail,this.loginPassword).subscribe(response => {
      if(!response.error){
        this.appCommunication.setUser(response);
        this.appCommunication.appComponent.setLoggedIn();
        sessionStorage.setItem('user', this.token);
        this.router.navigate(['/dashboard']);
      }
    });

  }

  goToCreateAccount(){
    sessionStorage.setItem("email", this.createAccountEmail);
    this.router.navigate(['/createAccount']);
  }

}
