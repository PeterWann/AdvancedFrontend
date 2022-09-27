import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-screen',
  templateUrl: './transactions-screen.component.html',
  styleUrls: ['./transactions-screen.component.scss'],
})
export class TransactionsScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

}
