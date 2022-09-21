import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardListComponent } from './components/credit-card/credit-card-list/credit-card-list.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardListComponent,
  },
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./modules/credit-card.module').then((m) => m.CreditCardModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./modules/transactions.module').then((m) => m.TransactionsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
