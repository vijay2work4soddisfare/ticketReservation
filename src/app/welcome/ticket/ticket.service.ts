import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs';


@Injectable()
export class TicketService {
  user=new Subject<any>();
  constructor(private af:AngularFire) { 
  	this.af.auth.subscribe(auth=>{
  		if(auth!=undefined) {
  			this.user.next({
  				name:auth.auth.displayName,
  				email:auth.auth.email,
  				uid:auth.auth.uid
  			});
  			this.af.database.object("bookings/"+auth.auth.uid).subscribe();
  		}else{

		}
  	});
  }
  getUserInfo(){
    return this.user.asObservable();
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
  showsSchedule(dateKey){
    return this.af.database.list("schedules/"+dateKey);
  }
  updateObject(path){
  	return this.af.database.object(path);
  }
}
