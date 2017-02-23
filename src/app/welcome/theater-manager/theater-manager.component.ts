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
        this.snacks=this.manager.snacks(this.managerInfo.$key);
        this.ticketOperators=this.manager.theaterOperators(this.managerInfo.$key);
        this.halls=this.manager.halls(this.managerInfo.$key)
      }
    });
  }
  addOperator($event){
    //console.log("$vent",$event);
      this.manager.theaterOperators(this.managerInfo.$key).push({'name':$event.name,'email':$event.email});
  }
  updateSnacks($event){
      this.manager.snacks(this.managerInfo.$key).update($event);
  }
  halls;
  ticketOperators;
  snacks;
  managerInfo;
  ngOnInit() {
  }

}
