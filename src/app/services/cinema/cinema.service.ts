import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }
  getCinemas() {
    try {
      return this.http.get(environment.BASE_URL+"/cinemas")
    } catch (error) {
      return throwError(error);
    }
  }

  getCinemasByCity(ville_id:any) {
    try {
      return this.http.get(environment.BASE_URL+"/cinemas/city/"+ville_id)
    } catch (error) {
      return throwError(error);
    }
  }
}
