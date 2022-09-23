import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule], // OBS what to import
})
export class AddCreditCardComponent implements OnInit {
  creditCardForm = this.formBuilder.group({
    card_number: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]{7,16}'), // Must be integers and 7 to 16 digits
      ],
    ],csc_code: [
      '',
      [
        Validators.pattern('[0-9]{3,3}'), // Must be integers and 3 digits
        Validators.required,
      ],
    ],
    cardholder_name: ['', Validators.required],
    expiration_date_month: ['', Validators.pattern('(^0?[1-9]$)|(^1[0-2]$)')], // Range from 1 to 12
    expiration_date_year: ['', Validators.required],
    issuer: ['', Validators.required],
  });

  newCreditCard!: CreditCard;

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CreditCardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cardService.addCreditCard(this.creditCardForm)
    this.router.navigate(['']);
  }
}
