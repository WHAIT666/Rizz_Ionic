import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  private headers = new HttpHeaders({
<<<<<<< HEAD
    'X-RapidAPI-Key': '5b94a6310amsh271e8533bde539cp147d31jsn8e2a2935572c',
=======
    'X-RapidAPI-Key': 'e761e5ace1msh02038ca94aa3b61p1656fdjsn5a62347f3376',
>>>>>>> 47be99c7ca5edc5b37faea354f628d776e91f8ed
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) { }

  fetchDestinations(): Observable<any> {
    const params = {
      locale: 'pt-pt'
    };

    return this.http.get(
      `https://booking-com.p.rapidapi.com/v1/static/regions?country=pt&order_by=name`,
      { params: params, headers: this.headers }
    );
  }

  fetchHotels(region_id: string): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        dest_type: 'region',
        units: 'metric',
        order_by: 'popularity',
        locale: 'pt-pt',
      },
    });

    return this.http.get(
      `https://booking-com.p.rapidapi.com/v1/static/hotels?region_id=${region_id}`,
      { params: params, headers: this.headers }
    );
  }

  getAccommodations(): Observable<any[]> {
    return this.fetchDestinations().pipe(
      switchMap((regions: any) => {
        const region_id = regions.result[0].dest_id; // Assuming you want to fetch hotels for the first region

        return this.fetchHotels(region_id);
      }),
      map((hotels: any) => {
        return hotels.result.map((hotel: any) => {
          return {
            image: hotel.main_photo_url,
            name: hotel.hotel_name,
            rating: hotel.review_score,
            address: hotel.address_trans,
            totalCost: hotel.min_total_price,
            costPerNight: hotel.price_breakdown.gross_price,
            link: hotel.url,
          };
        });
      })
    );
  }
}
