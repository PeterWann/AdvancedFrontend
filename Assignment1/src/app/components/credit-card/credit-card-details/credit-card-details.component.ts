import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transactions.interface';
import { map, Observable, tap } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit {
  cardDetails$!: CreditCard;
  all_transactions$!: Observable<Transaction[]>;
  card_transactions$: Transaction[] = [];
  id!: number;

  constructor(
    private cardService: CreditCardService,
    private transactionService: TransactionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cardService.getCreditCard(this.id).subscribe((cardDetails) => {
      this.cardDetails$ = cardDetails;
    });
    this.all_transactions$ = this.transactionService.getTransactions();
    this.cardTransactions();
  }

  deleteCreditCard() {
    this.cardService.deleteCreditCard(this.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  cardTransactions() {
    this.all_transactions$.forEach((transactions) => {
      transactions.forEach((transaction) => {
        if (transaction.credit_card.card_number === this.cardDetails$.card_number) {
          this.card_transactions$.push(transaction);
        }
      });
    });
  }
}
