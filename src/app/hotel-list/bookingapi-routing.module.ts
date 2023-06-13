import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingapiComponent } from './bookingapi.page';

const routes: Routes = [
  {
    path: '',
    component: BookingapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingapiPageRoutingModule {}
