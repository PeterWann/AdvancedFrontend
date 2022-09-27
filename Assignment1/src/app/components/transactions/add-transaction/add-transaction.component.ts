import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { Transaction } from 'src/app/models/transactions.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  transactionForm = this.formBuilder.group({
    amount: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'), // Must be number
      ],
    ],
    currency: ['', [Validators.required]],
    date: ['', Validators.required],
    comment: [],
    credit_card: ['', Validators.required],
  });

  newTransaction!: Transaction;
  creditCards: CreditCard[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionsService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private cardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.getCreditCards();
  }
  getCreditCards() {
    this.cardService.getCreditCards().subscribe((creditCards) => {
      this.creditCards = creditCards;
    });
  }

  onSubmit() {
    this.transactionService.createTransaction(this.transactionForm);
    this.router.navigate(['/transactions']);
    this._snackBar.open('Submitted!', 'Done');
  }
}
