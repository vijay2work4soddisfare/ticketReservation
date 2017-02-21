import { Component, OnInit, Input } from '@angular/core';
import { TheaterService } from '../../theater.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers:[TheaterService]
})
export class ShowsComponent implements OnInit {
	@Input('hallKey') set getShows(hallKey){
		this.shows=this.theater.dateOfShows(hallKey);
	};
	shows;
  constructor(private theater:TheaterService) { }

  ngOnInit() {
  }

}
