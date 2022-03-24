import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { PieGraphComponent } from './components/graphs/pie-graph/pie-graph.component';
import { LineGraphComponent } from './components/graphs/line-graph/line-graph.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StockGraphComponent } from './components/stock-graph/stock-graph.component';
import { MatListModule } from '@angular/material/list';
import { CreateAccountComponent } from './components/create-account/create-account.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PieGraphComponent,
    LineGraphComponent,
    StocksComponent,
    StockGraphComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
