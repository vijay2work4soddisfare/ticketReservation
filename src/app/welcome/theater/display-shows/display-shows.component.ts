import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TheaterService } from '../theater.service';
@Component({
  selector: 'app-display-shows',
  templateUrl: './display-shows.component.html',
  styleUrls: ['./display-shows.component.css'],
  providers:[TheaterService]
})
export class DisplayShowsComponent implements OnInit {
  @Output() data=new EventEmitter<any>();
  @Input('halls') set sethalls(halls){
    this.halls=halls;
  };
  halls;
  @Input('films') set setfilms(films){
    this.films=films;
    //console.log("inside display shows : ",this.films);
  };
  films;

  dateOfShows($event){

        console.log($event);
    this.theater.dateOfShows($event.$key).push({'date':$event.date})
      .then(result=>{
        console.log(result,' : result');
      });
  }
  constructor(private theater:TheaterService) { }

  ngOnInit() {
  }

}
