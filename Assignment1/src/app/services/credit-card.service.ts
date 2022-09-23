import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../models/credit-card.interface';
import { catchError, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = `http://${environment.api.creditcard.host}:${environment.api.creditcard.port}`;

  constructor(private http: HttpClient) {}

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/cards`);
  }

  getCreditCard(id: number): Observable<CreditCard> {
    return this.http.get<CreditCard>(`${this.rootUrl}/cards/${id}`);
  }

  addCreditCard(card: FormGroup) {
    return this.http.post(`${this.rootUrl}/cards/`, card.value).subscribe();
  }

  deleteCreditCard(id: number) {
    return this.http.delete(`${this.rootUrl}/cards/${id}`);
  }
}
