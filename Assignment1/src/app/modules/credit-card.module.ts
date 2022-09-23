import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from '../components/credit-card/credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from '../components/credit-card/credit-card-details/credit-card-details.component';
import { CreditCardRoutingModule } from '../routing/credit-card-routing.module';
import { AddCreditCardComponent } from '../components/credit-card/add-credit-card/add-credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreditCardDetailsComponent, CreditCardListComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    AddCreditCardComponent,
    ReactiveFormsModule
  ],
})
export class CreditCardModule {}
