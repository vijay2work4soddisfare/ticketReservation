import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs';

@Injectable()
export class TheaterService {
  operator=new Subject<any>();
  managerKey=new Subject<any>();
  timeKey=new Subject<any>();
  constructor(private af:AngularFire) { 
  	this.af.auth.subscribe(auth=>{
  		if(auth!=undefined) {
  			this.af.database.list("operatorLogin").subscribe(data=>{
  				if(data.length!=0) {
  					data.map(managerData=>{
  						//console.log("Each manager info :",managerData);
  						this.af.database.list("operatorLogin/"+managerData.$key).first()
  							.subscribe(operatorList=>{
	  							operatorList.map(operator=>{
	  								//console.log("Each operator info of the manager :",operator);
	  								if(operator.email==auth.auth.email) {
	  									this.operator.next(operator);
	  									this.managerKey.next(managerData.$key);
	  								}
	  							});
  							});
  					});
  				}
  			});
  		}else{

		}
  	});
  }
  getManagerKey(){
    return this.managerKey.asObservable();
  }
  getTimeKey(){
  	return this.timeKey.asObservable();
  }
  operatorInfo(){
  	return this.operator.asObservable();
  }
  halls(managerKey){
  	return this.af.database.list("halls/"+managerKey);
  }

  filmsForOperator(managerKey){
  	//console.log("filmsOperators/"+managerKey);
  	return this.af.database.list("filmsOperators/"+managerKey);
  }
  filmsForUser(){
    return this.af.database.list("films");
  }
  dateOfShows(hallKey){
    return this.af.database.list("date/"+hallKey);
  }
  showsSchedule(timeKey){
  	return this.af.database.list("time/"+timeKey);
  }

}
