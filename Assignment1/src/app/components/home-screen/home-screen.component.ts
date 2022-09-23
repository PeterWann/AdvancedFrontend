import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})

export class HomeScreenComponent implements OnInit {
  creditcards$: CreditCard[] = [];

  constructor(private cardService: CreditCardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cardService.getCreditCards().subscribe(value => {
      this.creditcards$ = value;
      this.uniqueIssuers();
    });
  }

  uniqueIssuers(): void {
    this.creditcards$ = this.creditcards$.filter((value, index, arr) => {
      return index === arr.findIndex(obj => obj.issuer === value.issuer)
    })
  }
}
