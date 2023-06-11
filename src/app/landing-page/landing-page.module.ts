import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { LandingPageComponent } from './landing-page.component';
import { LandingPageService } from './landing-page.service';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    LandingPageRoutingModule,
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule // Add this line to import the FormsModule
  ],
  providers: [LandingPageService]
})
export class LandingPageModule {}
