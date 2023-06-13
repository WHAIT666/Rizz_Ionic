import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HotelCardPageRoutingModule } from './hotel-card-routing.module';
import { HotelCardComponent } from './hotel-card.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelCardPageRoutingModule
  ],
  declarations: [HotelCardComponent],
  
})
export class HotelCardPageModule {}
