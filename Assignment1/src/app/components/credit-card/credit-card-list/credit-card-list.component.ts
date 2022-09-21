import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
  creditCards$!: Observable<CreditCard[]>;

  constructor(private cardService: CreditCardService) {}

  ngOnInit(): void {
    this.creditCards$ = this.cardService.getCreditCards();
  }
}
