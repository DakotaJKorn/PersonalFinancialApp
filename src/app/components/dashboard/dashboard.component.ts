import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppCommunicationService } from 'src/app/services/app communication/app-communication.service';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { PieGraphComponent } from '../graphs/pie-graph/pie-graph.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user!: User;

  accountTotal: number = 500642.91;
  accountsTotal: number = 194600;
  portfolioTotal: number = 306042.91;

  pieGraph!: PieGraphComponent;

  constructor(private appCommunicationService: AppCommunicationService, private authorizationService: AuthorizationService) { 
    appCommunicationService.setDashboard(this);
   }

  ngOnInit(): void {
      this.user = this.appCommunicationService.getUser();
  }

  setAccounts(){
    let accounts = this.appCommunicationService.getAccounts();
    this.accountsTotal = accounts.accountsTotal;
    this.portfolioTotal = accounts.portfolioTotal;
    this.accountTotal = accounts.total;

    this.appCommunicationService.pieGraph.createGraph(this.accountTotal,this.accountsTotal,this.portfolioTotal);
  }


}
