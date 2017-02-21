import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { TheaterComponent } from './theater/theater.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';

import { TheaterManagerComponent } from './theater-manager/theater-manager.component';
const routes: Routes = [
  {path: 'Welcome', component: WelcomeComponent, children: [
   {path: 'Admin', component: AdminComponent, outlet: 'admin'},
   {path: 'TheaterManager', component: TheaterManagerComponent, outlet: 'theaterManager'},
   {path: 'Theater', component: TheaterComponent, outlet: 'theater'},
   {path: 'Ticket',  component: TicketComponent, outlet: 'ticket'},
  

  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WelcomeRoutingModule { }
