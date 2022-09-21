import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsListComponent } from '../components/transactions/transactions-list/transactions-list.component';
import { TransactionsScreenComponent } from '../components/transactions/transactions-screen/transactions-screen.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsScreenComponent,
  },
  {
    path: 'list',
    component: TransactionsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
