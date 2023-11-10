import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProdukteRequestService } from '../produkte-request.service';
import { Produkt } from '../produkt';
import { ProdukteService } from '../produkte.service';

@Component({
  selector: 'app-produkt-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produkt-liste.component.html',
  styleUrls: ['./produkt-liste.component.css'],
})
export class ProduktListeComponent implements OnInit {
  produkte: Produkt[] = [];

  constructor(
    private service: ProdukteService,
    private serviceRequest: ProdukteRequestService
  ) {
    // this.produkte = this.service.getAll();
    this.serviceRequest.getAll().subscribe((infos) => {
      this.produkte = infos;
    });
  }

  ngOnInit() {}
}
