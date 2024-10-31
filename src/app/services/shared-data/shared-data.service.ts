import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private cinemasByCitySource = new BehaviorSubject<any[]>([]);
  cinemasByCity$ = this.cinemasByCitySource.asObservable();

  constructor() { }
  updateCinemasByCity(cinemas: any) {
    this.cinemasByCitySource.next(cinemas);
  }



}
