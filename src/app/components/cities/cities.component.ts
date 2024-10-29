import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities/cities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent implements OnInit {
  cities: any=[];

  constructor(private cSrv: CitiesService) { }

  ngOnInit(): void {
    this.getAllCities();
    console.log(this.cities);
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

}
