import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from '../components/credit-card/credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from '../components/credit-card/credit-card-details/credit-card-details.component';
import { CreditCardRoutingModule } from '../routing/credit-card-routing.module';
import { AddCreditCardComponent } from '../components/credit-card/add-credit-card/add-credit-card.component';
import { MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [CreditCardListComponent, CreditCardDetailsComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    AddCreditCardComponent,
  ],
})
export class CreditCardModule {}
