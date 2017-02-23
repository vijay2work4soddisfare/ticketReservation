import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-update-schedules',
  templateUrl: './update-schedules.component.html',
  styleUrls: ['./update-schedules.component.css']
})
export class UpdateSchedulesComponent implements OnInit {

  @Input('singleSchedule') set getSchedule(singleSchedule){
  	if(singleSchedule!=undefined) {
      this.singleSchedule=singleSchedule;
  		this.setForm(this.singleSchedule.scheduleDetails);
  	}
  };
  @Input() films;
  singleSchedule;
  form:FormGroup;
  constructor(public fb:FormBuilder,private theater:TheaterService) {
  }
  ngOnInit() {
    /*
    this.theater.updateObject("schedules/"+this.singleSchedule.showKey+"/"+this.singleSchedule.scheduleDetails.$key)
    .subscribe();*/
  }
  setForm(scheduleDetails){
    this.form=this.fb.group({
      endTime:[scheduleDetails.endTime,Validators.required],
      film:[scheduleDetails.film,Validators.required],
      ticketsReserved:[scheduleDetails.ticketsReserved,Validators.required],
      houseFull:[(scheduleDetails.houseFull==undefined)?false:scheduleDetails.houseFull,Validators.required]
    });
  }
  housefull(){
    this.theater.showsSchedule(this.singleSchedule.showKey)
    .update(this.singleSchedule.scheduleDetails.$key,{'houseFull':true});
    this.form.controls["houseFull"].setValue(true);
  }
  cancelHousefull(){
    this.theater.showsSchedule(this.singleSchedule.showKey)
    .update(this.singleSchedule.scheduleDetails.$key,{'houseFull':false});
    this.form.controls["houseFull"].setValue(false);
  }
  update(){
    this.theater.showsSchedule(this.singleSchedule.showKey)
    .update(this.singleSchedule.scheduleDetails.$key,this.form.value);
  }
  cancelShows(){
    this.theater.showsSchedule(this.singleSchedule.showKey)
    .remove(this.singleSchedule.scheduleDetails.$key).then(response=>{
      this.theater.showsSchedule(this.singleSchedule.showKey)
      .first().subscribe(data=>{
        console.log("inside shows : ",data)
        if(data.length==0) { 
    	    //remove date of shows
        }
      })
    });
    this.theater.filmsForUser()
    .remove(this.singleSchedule.scheduleDetails.$key);
  }

}
