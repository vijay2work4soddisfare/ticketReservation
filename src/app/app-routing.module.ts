import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { PageNotFoundComponent }    from './not-found.component';

const routes: Routes = [
   { path: '', redirectTo: '/Welcome', pathMatch: 'full'}, 
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      { preloadingStrategy: SelectivePreloadingStrategy, useHash: true }

   )],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule { }
