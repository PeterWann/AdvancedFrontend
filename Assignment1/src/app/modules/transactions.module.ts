import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsScreenComponent } from '../components/transactions/transactions-screen/transactions-screen.component';
import { TransactionsRoutingModule } from '../routing/transactions-routing.module';
import { TransactionsListComponent } from '../components/transactions/transactions-list/transactions-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTransactionComponent } from '../components/transactions/add-transaction/add-transaction.component';

@NgModule({
  declarations: [TransactionsScreenComponent, AddTransactionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransactionsRoutingModule,
    TransactionsListComponent,
    MatButtonModule,
    FormsModule,
  ],
})
export class TransactionsModule {}
