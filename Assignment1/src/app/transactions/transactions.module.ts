import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsScreenComponent } from './transactions-screen/transactions-screen.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';



@NgModule({
  declarations: [
    TransactionsScreenComponent,
    TransactionsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
