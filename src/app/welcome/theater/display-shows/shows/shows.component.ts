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
  @Input() films;
  @Input() operatorKey;
  @Input() managerKey;
	shows;
  showKey;
  schedules;
  constructor(private theater:TheaterService) { }
  displaySchedules(showKey){
    this.showKey=showKey;
    this.schedules=this.theater.showsSchedule(showKey);
  }
  ngOnInit() {
  }
  removeShow(key){
    this.theater.removeShowsSchedule(key);
  }

}
