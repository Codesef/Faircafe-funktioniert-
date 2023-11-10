import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProduktListeComponent } from './produkt-liste/produkt-liste.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ProduktListeComponent],
  template: `
    <h1>Faircafé-Helfer</h1>
    <app-produkt-liste></app-produkt-liste>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
