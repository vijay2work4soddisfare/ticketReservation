import { Component, OnInit } from '@angular/core';
import { TheaterService } from './theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css'],
  providers:[TheaterService]
})
export class TheaterComponent implements OnInit {
   films;
  constructor( public theater: TheaterService) {
    this.theater.operatorInfo().subscribe(data=>{
      if(data!=undefined) {
        this.operator=data;
        console.log(this.operator);
      }
    });
    this.theater.getManagerKey().subscribe(data=>{
      this.managerKey=data;
      if(this.managerKey!=undefined) {
        this.films=this.theater.filmsForOperator(this.managerKey);
        this.halls=this.theater.halls(this.managerKey);
      }
    });

  }
  halls;
  operator;
  managerKey;
  ngOnInit() {
  }
 
}
