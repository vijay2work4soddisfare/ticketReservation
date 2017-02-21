import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Output() data=new EventEmitter<any>();
  @Input('films') set setFilms(films){
  	this.films=films;
  };
  films;
  constructor() { }

  ngOnInit() {
  }

}
