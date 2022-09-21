import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit {
  cardDetails$!: CreditCard;
  id!: number;

  constructor(
    private cardService: CreditCardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cardService.getCreditCard(this.id).subscribe((cardDetails) => {
      this.cardDetails$ = cardDetails;
    });
  }

  deleteCreditCard() {
    this.cardService.deleteCreditCard(this.id).subscribe(() => {
      console.log('User Deleted');
      this.router.navigate(['']);
    });
  }
}
