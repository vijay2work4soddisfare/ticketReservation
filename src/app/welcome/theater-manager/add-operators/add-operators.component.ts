import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-operators',
  templateUrl: './add-operators.component.html',
  styleUrls: ['./add-operators.component.css']
})
export class AddOperatorsComponent implements OnInit {

  @Output() data = new EventEmitter<any>();
  form:FormGroup;
  constructor(public fb:FormBuilder) {
  	this.setForm();
  }
  ngOnInit() {
  }
  setForm(){
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required]
    });
  }
  submit(){
  	this.data.emit(this.form.value);
  	this.setForm();
  }
}
