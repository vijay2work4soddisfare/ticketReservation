import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TheaterService } from '../../theater.service';
@Component({
  selector: 'app-add-single-schedule',
  templateUrl: './add-single-schedule.component.html',
  styleUrls: ['./add-single-schedule.component.css']
})
export class AddSingleScheduleComponent implements OnInit {
  @Input() managerKey;
  @Input() operatorKey;
  form:FormGroup;
  @Input() showKey;
  @Input() films;
  constructor(public fb:FormBuilder,private theater:TheaterService) {
  	this.setForm();
  }
  ngOnInit() {
  }
  setForm(){
    this.form=this.fb.group({
      endTime:['',Validators.required],
      film:['',Validators.required],
      ticketsReserved:['15',Validators.required]
    });
  }
  submit(){
  	this.theater.showsSchedule(this.showKey).push(this.form.value).then(result=>{
      //console.log({to:result.key,man:this.managerKey,opp:this.operatorKey,film:this.form.value.film});
      this.theater.filmsForUser().update(result.key,{
              name:this.form.value.film,
              managerKey:this.managerKey,
              operatorKey:this.operatorKey
            }).then(result=>{
  	            this.setForm();
            });
    });
  }
}
