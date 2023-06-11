import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelCardComponent } from './hotel-card.page';

const routes: Routes = [
  {
    path: '',
    component: HotelCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelCardPageRoutingModule {}
