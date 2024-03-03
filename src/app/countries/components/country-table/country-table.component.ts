import { Component, Input } from '@angular/core';
import { Contry } from '../../interfaces/contry';

@Component({
  selector: 'countries-components-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  public countries: Contry[] = [];
}
