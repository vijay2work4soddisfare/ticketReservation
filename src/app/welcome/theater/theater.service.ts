import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs';

@Injectable()
export class TheaterService {
  operator=new Subject<any>();
  managerKey=new Subject<any>();
  timeKey=new Subject<any>();
  private managerInfoKey;
  constructor(private af:AngularFire) { 
  	this.af.auth.subscribe(auth=>{
  		if(auth!=undefined) {
  			this.af.database.list("operatorLogin").subscribe(data=>{
  				if(data.length!=0) {
  					data.map(managerData=>{
  						//console.log("Each manager info :",managerData);
  						this.af.database.list("operatorLogin/"+managerData.$key,{query:{
                orderByChild:"email",
                equalTo:auth.auth.email
              }}).first().subscribe(operatorList=>{
                  if(operatorList.length!=0) {
                  operatorList.map(operator=>{
                    //console.log("Each operator info of the manager :",operator);
	  								//if(operator.email==auth.auth.email) {
                      this.managerInfoKey=managerData.$key;
	  									this.operator.next(operator);
	  									this.managerKey.next(managerData.$key);
                    //}
                  });
	  						}
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
  showsSchedule(dateKey){
    return this.af.database.list("schedules/"+dateKey);
  }
  updateObject(path){
  	return this.af.database.object(path);
  }
  removeShowsSchedule(showKey){
    
    this.af.database.list("halls/"+this.managerInfoKey).first().subscribe(hallInfo=>{
      if(hallInfo.length!=0) {
        hallInfo.map(eachHall=>{
          this.af.database.list("date/"+eachHall.$key).first().subscribe(dateInfo=>{
            if(dateInfo.length!=0) {
              dateInfo.map(eachDate=>{
                if(eachDate.$key==showKey) {
                  console.log("foundDate");
                  this.af.database.list("schedules/"+eachDate.$key).first().subscribe(schedulesInfo=>{
                    if(schedulesInfo.length!=0) {
                      schedulesInfo.map(eachSchedule=>{
                        this.showsSchedule(showKey)
                        .remove(eachSchedule.$key);
                        this.filmsForUser()
                        .remove(eachSchedule.$key);
                      });
                      this.af.database.list("date/"+eachHall.$key).remove(showKey);
                    }else{
                      this.af.database.list("date/"+eachHall.$key).remove(showKey);
                    }
                  });
                }
              });
            }
          });
        });
      }
    });


    //get all the shows fot this date

    //delete single show


    //if last show for the date delete the date
  }

}
