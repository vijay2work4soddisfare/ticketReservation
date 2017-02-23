import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { TheaterComponent } from './theater/theater.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';
import { TheaterManagerComponent } from './theater-manager/theater-manager.component';
import { AddManagerComponent } from './admin/add-manager/add-manager.component';
import { AddOperatorsComponent } from './theater-manager/add-operators/add-operators.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AddHallComponent } from './theater-manager/add-hall/add-hall.component';
import { HallComponent } from './theater-manager/hall/hall.component';
import { AddFilmComponent } from './theater/add-film/add-film.component';
import { FilmComponent } from './theater/film/film.component';
import { ArrangeShowsComponent } from './theater/arrange-shows/arrange-shows.component';
import { DisplayShowsComponent } from './theater/display-shows/display-shows.component';
import { ShowsComponent } from './theater/display-shows/shows/shows.component';
import { UpdateSchedulesComponent } from './theater/update-schedules/update-schedules.component';
import { AddSingleScheduleComponent } from './theater/update-schedules/add-single-schedule/add-single-schedule.component';
import { VendorComponent } from './vendor/vendor.component';
import { SwitchControlComponent } from './switch-control/switch-control.component';
import { MoviesComponent } from './ticket/movies/movies.component';
import { ItemsComponent } from './Vendor/items/items.component';
import { AddItemsComponent } from './Vendor/add-items/add-items.component';
import { ActiveOrdersComponent } from './Vendor/active-orders/active-orders.component';
import { AddSnacksComponent } from './theater-manager/add-snacks/add-snacks.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
	ReactiveFormsModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent, TheaterComponent, TicketComponent, HallComponent, AdminComponent,  TheaterManagerComponent, AddManagerComponent, AddManagerComponent, AddOperatorsComponent, AddHallComponent, AddHallComponent, HallComponent, AddFilmComponent, FilmComponent, ArrangeShowsComponent, DisplayShowsComponent, ShowsComponent, UpdateSchedulesComponent, AddSingleScheduleComponent, VendorComponent, SwitchControlComponent, MoviesComponent, ItemsComponent, AddItemsComponent, ActiveOrdersComponent, AddSnacksComponent]
})
export class WelcomeModule { }
