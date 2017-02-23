import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs';



@Injectable()
export class VendorService {
  vendor=new Subject<any>();
  managerKey=new Subject<any>();
  timeKey=new Subject<any>();
  constructor(private af:AngularFire) { 
  	this.af.auth.subscribe(auth=>{
  		if(auth!=undefined) {
  			this.af.database.list("vendorLogin").subscribe(data=>{
  				if(data.length!=0) {
  					data.map(managerData=>{
  						//console.log("Each manager info :",managerData);
  						this.af.database.list("vendorLogin/"+managerData.$key,{query:{
                orderByChild:"email",
                equalTo:auth.auth.email
              }}).first().subscribe(vendorList=>{
                  if(vendorList.length!=0) {
                  vendorList.map(vendor=>{
                    //console.log("Each vendor info of the manager :",vendor);
	  								//if(vendor.email==auth.auth.email) {
	  									this.vendor.next(vendor);
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
  vendorInfo(){
  	return this.vendor.asObservable();
  }
  halls(managerKey){
  	return this.af.database.list("halls/"+managerKey);
  }

  itemsForVendor(vendorKey){
  	//console.log("filmsvendors/"+managerKey);
  	return this.af.database.list("vendorsItems/"+vendorKey);
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
