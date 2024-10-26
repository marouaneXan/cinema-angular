import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }
  getCities() {
    try {
      return this.http.get(environment.BASE_URL)
    } catch (error) {
      return throwError(error);
    }
  }
}
