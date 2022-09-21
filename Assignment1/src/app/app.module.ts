import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from './components/credit-card/credit-card-details/credit-card-details.component';
import { AddCreditCardComponent } from './components/credit-card/add-credit-card/add-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeScreenComponent,
    CreditCardListComponent,
    CreditCardDetailsComponent,
    AddCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
