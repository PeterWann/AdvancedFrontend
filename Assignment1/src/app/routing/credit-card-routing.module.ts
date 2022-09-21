import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreditCardComponent } from '../components/credit-card/add-credit-card/add-credit-card.component';
import { CreditCardDetailsComponent } from '../components/credit-card/credit-card-details/credit-card-details.component';
import { CreditCardListComponent } from '../components/credit-card/credit-card-list/credit-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardListComponent,
  },
  { path: 'add', component: AddCreditCardComponent }, 
  { path: ':id', component: CreditCardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
