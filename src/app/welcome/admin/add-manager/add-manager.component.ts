import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

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
