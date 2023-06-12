import { Component, OnInit } from '@angular/core';
import { hotelApiService } from '../service/hotel-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.page.html',
  styleUrls: ['./hotel-card.page.scss']
})
export class HotelCardComponent implements OnInit {
  hotelDetails: any = '';
  hotelOtherDetails: any = '';
  hotelReviews: any = [];
  hotelImage: any = [];
  hotelId: string = '';
  hotelName: string = '';

  constructor(
    private hotelApiService: hotelApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.hotelId = params['id'];
    });

    // Fetch hotel details
    this.hotelApiService.fetchHotelDetails(this.hotelId).subscribe((res: any) => {
      this.hotelDetails = res;
      this.hotelName = res.name; // Assign the hotel's name to the hotelName variable
      console.log('Hotel Details:', this.hotelDetails);
    });

    // Fetch hotel images
    this.hotelApiService.fetchHotelPhotos(this.hotelId).subscribe((res: any) => {
      this.hotelImage = res[0].url_1440;
      console.log('Hotel Image:', this.hotelImage);
    });

    // Fetch rating and reviews
    this.hotelApiService.fetchOtherData(this.hotelId).subscribe((res: any) => {
      this.hotelOtherDetails = res;
      if (res.reviews) {
        this.hotelReviews = res.reviews;
      }
      console.log('Other Details:', this.hotelOtherDetails);
      console.log('Hotel Reviews:', this.hotelReviews);
    });
  }

  getHotelName() {
    return this.hotelName;
  }

  getTextualRating(rating: number): string {
    if (rating >= 4.5) {
      return 'Excelente';
    } else if (rating >= 4) {
      return 'Muito Bom';
    } else if (rating >= 3.5) {
      return 'Bom';
    } else {
      return 'Razoável';
    }
  }
}
