import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { PieGraphComponent } from 'src/app/components/graphs/pie-graph/pie-graph.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { Accounts } from 'src/app/models/accounts.model';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from '../authorization/authorization.service';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AppCommunicationService {

  user!: User;
  home!: HomeComponent;
  dashboard!: DashboardComponent;
  appComponent!: AppComponent;
  accounts! : Accounts;
  pieGraph! : PieGraphComponent;
  
  constructor(private authorizationService: AuthorizationService, private router: Router, private loginService: LoginService) {

   }

  setAppComponent(component: AppComponent){
    this.appComponent = component;
  }

  setDashboard(component: DashboardComponent){
    this.dashboard = component;
  }

  setHome(component:HomeComponent){
    this.home = component;
  }

  setUser(user: User){
    this.user = user;
    this.loginService.getUserAccounts(user.id).subscribe(response => {
      this.accounts = {accountsTotal: response.accountsTotal, portfolioTotal: response.portfolioTotal, total: response.accountsTotal + response.portfolioTotal};
      this.dashboard.setAccounts();
    })
  }

  getUser(): User{
    if(this.user == undefined){
      this.router.navigate(['/']);
    }
      return this.user;
  }

  getAccounts(): Accounts{

    return this.accounts;
  }

  setPieGraph(component: PieGraphComponent){
    this.pieGraph = component;
  }



}
