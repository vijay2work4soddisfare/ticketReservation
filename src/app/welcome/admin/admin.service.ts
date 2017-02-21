import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
@Injectable()
export class AdminService {

  constructor(private af:AngularFire) {
  }
  manager(){
  	return this.af.database.list("managerLogin");
  }
}
