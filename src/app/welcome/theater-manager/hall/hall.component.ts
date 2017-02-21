import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  constructor() { }
  @Output() data=new EventEmitter<any>();
  @Input() halls;
  ngOnInit() {
  }

}
