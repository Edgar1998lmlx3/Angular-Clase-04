import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'countries-pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {



  searchByCapital(term:string):void{
    console.log('desde ByCapitalPage')
    console.log({term});
  }
}
