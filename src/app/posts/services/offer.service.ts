import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../models/offer.model';
import { Observable, of } from 'rxjs';

const url = "http://localhost:3001/offers/";

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  
  constructor(private http: HttpClient) {
   }
  public getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(url);
  }

  public getOffer(id: string): Observable<Offer> {
    if (typeof id === "undefined" || id === null) {
      return of(null);
    }
    return this.http.get<Offer>(`${url}/${id}`);
  }
}