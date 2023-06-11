import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingapiPageRoutingModule } from './bookingapi-routing.module';

import { BookingapiComponent } from './bookingapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingapiPageRoutingModule
  ],
  declarations: [BookingapiComponent]
})
export class BookingapiPageModule {}
