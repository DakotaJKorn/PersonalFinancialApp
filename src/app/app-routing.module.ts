import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks', component: StocksComponent },  
  { path: 'createAccount', component: CreateAccountComponent },     
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
