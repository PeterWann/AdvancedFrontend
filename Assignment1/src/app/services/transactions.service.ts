import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transactions.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  rootUrl = `http://${environment.api.creditcard.host}:${environment.api.creditcard.port}`;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.rootUrl}/transactions`, transaction);
  }

  deleteTransaction(uid: number) {
    return this.http.delete(`${this.rootUrl}/transactions/${uid}`);
  }
}
