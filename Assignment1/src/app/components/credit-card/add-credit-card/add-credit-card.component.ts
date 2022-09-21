import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss'],
  standalone: true,
  imports: [FormsModule], // OBS what to import
})
export class AddCreditCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
