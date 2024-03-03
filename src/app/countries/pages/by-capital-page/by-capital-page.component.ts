import { Component } from '@angular/core';
import { ContriesService } from '../../services/contries.service';
import { Contry } from '../../interfaces/contry';

@Component({
  selector: 'countries-pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Contry[] = [];

  constructor(private countriesService:ContriesService){}


  searchByCapital(term:string):void{
    this.countriesService.searchByCapital(term).subscribe( coun =>{
      this.countries = coun;
    })
  }
}
