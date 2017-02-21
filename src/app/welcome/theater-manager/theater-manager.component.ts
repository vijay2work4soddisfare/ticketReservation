import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';
@Component({
  selector: 'app-theater-manager',
  templateUrl: './theater-manager.component.html',
  styleUrls: ['./theater-manager.component.css'],
  providers:[ManagerService]
})
export class TheaterManagerComponent implements OnInit {

  constructor(private manager:ManagerService) {
  	this.manager.managerInfo().subscribe(data=>{
  		this.managerInfo=data;
    	if(this.managerInfo!=undefined) {
        console.log("operator set with : ",this.managerInfo);
    		this.operators=this.manager.theaterOperators(this.managerInfo.$key);
        this.halls=this.manager.halls(this.managerInfo.$key)
    	}
    });
  }
  halls;
  operators;
  managerInfo;
  ngOnInit() {
  }

}
