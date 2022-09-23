import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
  creditCards$: CreditCard[] = [];
  issuer!: string;

  constructor(private cardService: CreditCardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.issuer = params['issuer'];
    })

    this.cardService.getCreditCards().subscribe(value => {
      this.creditCards$ = value;
      this.sortCard();
    })
  }

  sortCard(): void {
    this.creditCards$ = this.creditCards$.filter(v => v.issuer === this.issuer)
  }
}
