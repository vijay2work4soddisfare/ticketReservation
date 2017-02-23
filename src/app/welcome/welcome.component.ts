import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

constructor(public af: AngularFire,   
    private route: ActivatedRoute,
    private router: Router) {
  this.router.navigate(['../','Welcome', {
    outlets: {
      'admin': ['Admin'], 
      'theaterManager': ['TheaterManager'], 
      'theater': ['Theater'], 
      //'vendor': ['Vendor'], 
      'ticket': ['Ticket']
    }
  }],{relativeTo:this.route});
}

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit() {
  }

}
