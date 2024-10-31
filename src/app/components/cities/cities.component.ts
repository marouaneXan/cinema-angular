import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities/cities.service';
import { CommonModule } from '@angular/common';
import { CinemaService } from '../../services/cinema/cinema.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent implements OnInit {
  cities: any=[];
  existedCinemasByCity: any=[];

  constructor(private cSrv: CitiesService,private cinemaSrv: CinemaService,private sharedSrv: SharedDataService) { }

  ngOnInit(): void {
    this.getAllCities();
  }
  getAllCities() {
    this.cSrv.getCities().subscribe(c => {
      this.cities = c;
      console.log(c);
      
    },
      err => {
        alert('Failed to load cities. Please try again later.');
      })
  }

  getCinemasByCity(ville_id:any) {
    this.cinemaSrv.getCinemasByCity(ville_id).subscribe(c => {
      this.sharedSrv.updateCinemasByCity(c)
    },
      err => {
        alert('Failed to load cinemas. Please try again later.');
      })
  }

}
