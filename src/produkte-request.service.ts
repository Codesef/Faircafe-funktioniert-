import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produkt } from './produkt';

@Injectable({
  providedIn: 'root',
})
export class ProdukteRequestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produkt[]> {
    return this.http.get<Produkt[]>('../assets/produkte.json')
  }

}