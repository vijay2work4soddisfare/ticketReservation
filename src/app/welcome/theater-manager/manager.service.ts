import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs';
@Injectable()
export class ManagerService {
manager=new Subject<any>();
  constructor(private af:AngularFire) { 
  	this.af.auth.subscribe(auth=>{
  		if(auth!=undefined) {
  			this.af.database.list("managerLogin",{query:
  				{orderByChild:"email",equalTo:auth.auth.email}
  			}).subscribe(data=>{
  				if(data.length==1) {
  					data.map(managerData=>{
  						this.manager.next(managerData);
  					});
  				}
  			});
  		}else{

  		}
  	});
  }
  managerInfo(){
  	return this.manager.asObservable();
  }

  theaterOperators(managerKey){
    return this.af.database.list("operatorLogin/"+managerKey);
  }
  snacks(managerKey){
    return this.af.database.object("snacks/"+managerKey);
  }
  halls(managerKey){
  	return this.af.database.list("halls/"+managerKey);
  }


}
