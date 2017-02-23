import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-snacks',
  templateUrl: './add-snacks.component.html',
  styleUrls: ['./add-snacks.component.css']
})
export class AddSnacksComponent implements OnInit {

  @Output() data = new EventEmitter<any>();
  form:FormGroup=this.fb.group({
      pepsi:['',Validators.required],
      popcorn:['',Validators.required],
      icecream:['',Validators.required]

  });
  @Input('snacks') set snacksSetter(snacks){
  	if(snacks!=undefined) {
	  	snacks.subscribe(data=>{
		  	this.snacks={
		  		pepsi:data==undefined?false:data.pepsi,
		  		popcorn:data==undefined?false:data.popcorn,
		  		icecream:data==undefined?false:data.icecream
		  	}
		  	this.setForm();
  	//console.log(this.form);
	  	});
  	}
  };
  snacks;
  constructor(public fb:FormBuilder) {
  }
  ngOnInit() {
  }
  setForm(){
    this.form=this.fb.group({
      pepsi:[(this.snacks.pepsi==undefined)?false:this.snacks.pepsi,Validators.required],
      popcorn:[(this.snacks.popcorn==undefined)?false:this.snacks.popcorn,Validators.required],
      icecream:[(this.snacks.icecream==undefined)?false:this.snacks.icecream,Validators.required]
    });
  }
  submit($event){
  	//this.data.emit(this.form.value);
  	//this.setForm();
  	console.log($event)
  }
}
