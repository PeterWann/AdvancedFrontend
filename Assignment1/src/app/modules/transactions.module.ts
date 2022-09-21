import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsScreenComponent } from '../components/transactions/transactions-screen/transactions-screen.component';
import { TransactionsRoutingModule } from '../routing/transactions-routing.module';
import { TransactionsListComponent } from '../components/transactions/transactions-list/transactions-list.component';

@NgModule({
  declarations: [TransactionsScreenComponent],
  imports: [CommonModule, TransactionsRoutingModule, TransactionsListComponent],
})
export class TransactionsModule {}
