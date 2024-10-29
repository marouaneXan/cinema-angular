import { Component } from '@angular/core';
import { CinemaService } from '../../services/cinema/cinema.service';

@Component({
  selector: 'app-cinemas',
  standalone: true,
  imports: [],
  templateUrl: './cinemas.component.html',
  styleUrl: './cinemas.component.scss'
})
export class CinemasComponent {
  cinemas: any=[];

  constructor(private cinemaSrv: CinemaService) { }

  ngOnInit(): void {
    this.getAllCinemas();
    console.log(this.cinemas);
  }
  getAllCinemas() {
    this.cinemaSrv.getCinemas().subscribe(c => {
      this.cinemas = c;
      console.log(c);
      
    },
      err => {
        alert('Failed to load cinemas. Please try again later.');
      })
  }
}
