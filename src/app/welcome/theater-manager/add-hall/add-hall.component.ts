import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})
export class AddHallComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  form:FormGroup;
  constructor(public fb:FormBuilder) {
  	this.setForm();
  }
  ngOnInit() {
  }
  setForm(){
    this.form=this.fb.group({
      name:['',Validators.required]
    });
  }
  submit(){
  	this.data.emit(this.form.value);
  	this.setForm();
  }

}
