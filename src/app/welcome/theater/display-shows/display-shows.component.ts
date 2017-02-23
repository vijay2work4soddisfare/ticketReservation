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
  };
  films;
  managerKey;
  @Input() operatorKey;
  dateOfShows($event){
    this.theater.dateOfShows($event.hall).push({'date':$event.date})
      .then(result=>{
        $event.schedules.forEach(singleSchedule=>{
          this.theater.showsSchedule(result.key).push(singleSchedule)
          .then(scheduleData=>{//record in for operators film list
            //console.log(scheduleData);
            this.theater.filmsForUser().update(scheduleData.key,{
              name:singleSchedule.film,
              managerKey:this.managerKey,
              operatorKey:result.key
            });
          });
        });
      });
  }
  schedules($event){
  }
  constructor(private theater:TheaterService) {
    this.theater.getManagerKey().subscribe(managerKey=>{
      this.managerKey=managerKey;
    })
  }

  ngOnInit() {
  }

}
