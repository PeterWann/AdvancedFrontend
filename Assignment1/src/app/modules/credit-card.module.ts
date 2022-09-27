import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from '../components/credit-card/credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from '../components/credit-card/credit-card-details/credit-card-details.component';
import { CreditCardRoutingModule } from '../routing/credit-card-routing.module';
import { AddCreditCardComponent } from '../components/credit-card/add-credit-card/add-credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreditCardDetailsComponent, CreditCardListComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    AddCreditCardComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class CreditCardModule {}
