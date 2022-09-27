import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transactions.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TransactionsService } from 'src/app/services/transactions.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
  ], //OBS what to transport
})
export class TransactionsListComponent implements OnInit {
  isLoading: boolean = true;

  transactions: Transaction[] = [];
  displayedColumns: string[] = [
    'credit_card.card_number',
    'amount',
    'comment',
    'date',
    'delete',
  ];
  dataSource = new MatTableDataSource<Transaction>([]);
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator; // from https://stackoverflow.com/questions/46786757/angular-matsort-does-not-sort
  @ViewChild(MatSort, { static: false }) sort!: MatSort; // from https://stackoverflow.com/questions/46786757/angular-matsort-does-not-sort

  constructor(
    private transactionService: TransactionsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService
      .getTransactions()
      .subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
        this.isLoading = false;
        this.dataSource.data = this.transactions;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (obj, property) =>
          this.getProperty(obj, property);
        this.dataSource.sort = this.sort;
      });
  }

  getProperty = (
    obj: any,
    path: any // from https://stackoverflow.com/questions/48891174/angular-material-2-datatable-sorting-with-nested-objects
  ) => path.split('.').reduce((o: any, p: any) => o && o[p], obj);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter) => {
      // from https://stackoverflow.com/questions/48891174/angular-material-2-datatable-sorting-with-nested-objects
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    };

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(transaction: Transaction) {
    if (transaction.uid) {
      this.transactionService.deleteTransaction(transaction.uid).subscribe(
        () => {
          const itemIndex = this.dataSource.data.findIndex(
            (obj) => obj['uid'] === transaction.uid
          );
          this.dataSource.data.splice(itemIndex, 1);
          this.dataSource.paginator = this.paginator;
          this._snackBar.open('Deleted!', "OK")
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.message);
          this._snackBar.open('Delete did not happen', "OK");
        }
      );
    }
  }
}
