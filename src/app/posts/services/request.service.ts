import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request.model';
import { Observable, of } from 'rxjs';

const url = "http://localhost:3001/requests/";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  
  constructor(private http: HttpClient) {
   }
  public getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(url);
  }

  public getRequest(id: string): Observable<Request> {
    if (typeof id === "undefined" || id === null) {
      return of(null);
    }
    return this.http.get<Request>(`${url}/${id}`);
  }
}