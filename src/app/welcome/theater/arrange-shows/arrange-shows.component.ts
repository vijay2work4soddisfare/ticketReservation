import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-arrange-shows',
  templateUrl: './arrange-shows.component.html',
  styleUrls: ['./arrange-shows.component.css']
})
export class ArrangeShowsComponent implements OnInit {
  @Input() halls;
  @Input('films') set setfilms(films){
    this.films=films;
    //console.log("inside arrange shows : ",this.films);
  };
  films;
  @Output() dataDate = new EventEmitter<any>();
  form:FormGroup=this.fb.group({});
  dateYesterday;
  show=false;
  constructor(public fb:FormBuilder) {
    //console.log(this.schedules);
    this.setFormDate();
    var yesterday=new Date(Date.now()-24*60*60*1000);
    this.dateYesterday=yesterday.getFullYear()+"-"+yesterday.getMonth()+"-"+yesterday.getDate();
  }
  ngOnInit() {
  }
  schedules:FormArray=this.fb.array([]);
  setFormDate(){
    this.time="10:30";
    this.show=false;
    this.form=this.fb.group({
      date:[{value:'',disabled:true},Validators.required],
      hall:['',Validators.required],
      schedules:this.buildSchedules()
    });
  }
  enableDate(){
    if(this.form.controls['hall'].valid) {
      this.form.controls['date'].enable();
    }else{
      this.show=false;
      this.form.controls['date'].disable();
    }
  }
  addScheduleView(){
    if(this.form.controls['date'].valid) {
      this.show=true;
    }else{
      this.show=false;
    }
  }
  buildSchedules():FormArray{
    this.schedules=this.fb.array([
      this.buildScheduleItem()
    ]);
    return this.schedules;
  }
  addSchedules(){
    this.schedules.push(this.buildScheduleItem());
  }
  submitDate(){
    this.dataDate.emit(this.form.value);
    this.setFormDate();
  }
  time="10:30";
  timeSet(){
    switch (this.time) {
      case "10:30":
        this.time="13:30";
        break;
      case "13:30":
        this.time="17:30";
        break;
      case "17:30":
        this.time="20:30";
        break;
    }
  }
  buildScheduleItem():FormGroup{
    var formObject=this.fb.group({
      endTime:[this.time,Validators.required],
      film:['',Validators.required],
      ticketsReserved:['15',Validators.required]
    });
    this.timeSet();
    return formObject;
  }

}
