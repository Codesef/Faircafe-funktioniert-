import { Injectable } from '@angular/core';
import { Produkt } from './produkt';

@Injectable({
  providedIn: 'root'
})
export class ProdukteService {
  private produkte: Produkt[] = [];
  constructor() { 
  
    this.produkte = [
      new Produkt("Croissant","knuspriges Gebäck",2.80, 'https://bit.ly/46tlsn7'),
      new Produkt("Knifte","Brot mit Salami belegt",2.90, 'https://bit.ly/3Q1tmxa')
    ]
    
  }

  getAll(): Produkt[] {
    return this.produkte
  }
  
}