import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCommunicationService } from 'src/app/services/app communication/app-communication.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  submitted: boolean = false;
  createAccountForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private loginService: LoginService, private appCommunication: AppCommunicationService, private router: Router) { }

  ngOnInit(): void {
    this.createAccountForm = this._formBuilder.group(
      {
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      },
      {
        //validators: [Validators.required]
      }
    )

    if(sessionStorage.getItem("email")){
      this.createAccountForm.get("email")?.setValue(sessionStorage.getItem("email"));
    }
  }

  createAccount(){

    let email = this.createAccountForm.get('email')?.value;
    let password = this.createAccountForm.get('password')?.value;
    let firstName = this.createAccountForm.get('firstName')?.value;
    let lastName = this.createAccountForm.get('lastName')?.value;
    let phoneNumber = this.createAccountForm.get('phoneNumber')?.value;
    this.loginService.addUser(email, password, firstName, lastName, phoneNumber).subscribe((response) => {
      
        this.loginService.getUserData(email,password).subscribe(response => {
          if(!response.error){
            this.appCommunication.setUser(response);
            this.appCommunication.appComponent.setLoggedIn();
            this.router.navigate(['/dashboard']);
          }
        });      


    })
    //this.submitted = true;
  }
}
