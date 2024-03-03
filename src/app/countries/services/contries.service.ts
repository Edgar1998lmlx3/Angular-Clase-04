import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Contry } from '../interfaces/contry';

@Injectable({providedIn: 'root'})
export class ContriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }


  searchByCapital(query:string): Observable<Contry[]> {
    const url = `${this.apiUrl}/capital/${query}`
    return this.httpClient.get<Contry[]>(url).pipe(
      catchError(()=> of([]))
      );
  }
}
