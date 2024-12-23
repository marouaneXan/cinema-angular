import { Component } from '@angular/core';
import { CinemaService } from '../../services/cinema/cinema.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cinemas',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './cinemas.component.html',
  styleUrl: './cinemas.component.scss'
})
export class CinemasComponent {
  cinemas: any = [];
  seances: any = [];
  projection:any=[]
  active = 1

  constructor(private cinemaSrv: CinemaService, private sharedSrv: SharedDataService) { }

  ngOnInit(): void {
    this.sharedSrv.cinemasByCity$.subscribe(
      cinema => {
        this.cinemas = cinema
      }
    )

    this.cinemaSrv.getSeances().subscribe(
      s => {
        this.seances = s
      }
    )
  }

  getProjectionsByCinema(cinemaID:any) {
    this.cinemaSrv.getProjectionsByCinema(cinemaID).subscribe(p => {
      this.projection=p
      console.log(p);
      
    },
      err => {
        alert('Failed to load cinemas. Please try again later.');
      })
  }
}
