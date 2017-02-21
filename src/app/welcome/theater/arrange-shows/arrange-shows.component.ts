import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-arrange-shows',
  templateUrl: './arrange-shows.component.html',
  styleUrls: ['./arrange-shows.component.css']
})
export class ArrangeShowsComponent implements OnInit {
  @Input() halls;
  @Input('dateKey') set setDateKey(dateKey){
    this.dateKey=dateKey;
    if(dateKey!=undefined) {
      this.setFormSchedule(dateKey);
    }
    console.log("inside arrange shows : ",this.dateKey);
  };
  dateKey;
  @Input('films') set setfilms(films){
    this.films=films;
    //console.log("inside arrange shows : ",this.films);
  };
  films;
  @Output() dataDate = new EventEmitter<any>();
  @Output() dataSchedule = new EventEmitter<any>();
  formDate:FormGroup;
  formSchedule:FormGroup;
  dateYesterday;
  constructor(public fb:FormBuilder) {
    //console.log(this.schedules);
    this.setFormDate();
    var yesterday=new Date(Date.now()-24*60*60*1000);
    this.dateYesterday=yesterday.getFullYear()+"-"+yesterday.getMonth()+"-"+yesterday.getDate();
    //console.log(this.dateYesterday);
  }
  ngOnInit() {
  }
  setFormSchedule(dateKey){
    this.formSchedule=this.fb.group({
      date:[dateKey,Validators.required],
      schedules:this.buildSchedules()
    });
  }
  schedules:FormArray=this.fb.array([]);
  setFormDate(){
    this.formDate=this.fb.group({
      date:['',Validators.required],
      hall:['',Validators.required]
    });
  }
  buildSchedules():FormArray{
    this.schedules=this.fb.array([
      this.buildScheduleItem()
    ]);
    return this.schedules;
  }
  addSchedules(){
    this.schedules.push(this.buildScheduleItem());
    //console.log(this.schedules);
  }
  submitDate(){
    this.dataDate.emit(this.formDate.value);
    this.setFormDate();
  }
  submitSchedule(){
  	this.dataSchedule.emit(this.formDate.value);
  }
  buildScheduleItem():FormGroup{
    return this.fb.group({
      endTime:['',Validators.required],
      film:['',Validators.required],
      tickets:['',Validators.required]
    });
  }

}
