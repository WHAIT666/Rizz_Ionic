import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPageModule)

  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },

  {
    path: 'hotel-card/:id',
    loadChildren: () => import('./hotel-card/hotel-card.module').then( m => m.HotelCardPageModule)
  },
  {
    path: 'hotel-list',
    loadChildren: () => import('./hotel-list/bookingapi.module').then( m => m.BookingapiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
