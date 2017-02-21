import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

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
