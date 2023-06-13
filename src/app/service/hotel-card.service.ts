import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class hotelApiService {
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '5b94a6310amsh271e8533bde539cp147d31jsn8e2a2935572c',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}
  
  fetchHotelDetails(hotel_id: string) {
    const params = {
      hotel_id: hotel_id,
      currency: 'EUR',
      locale: 'pt-pt',
      checkout_date: '2023-09-28',
      checkin_date: '2023-09-27'
    }
    return this.http.get(
      `https://booking-com.p.rapidapi.com/v2/hotels/details`,
      { params: params, headers: this.headers }
    );
  }

  fetchHotelPhotos(hotel_id: string) {
    const params = {
      hotel_id: hotel_id,
      currency: 'EUR',
      locale: 'pt-pt'
    }
    return this.http.get(
      `https://booking-com.p.rapidapi.com/v1/hotels/photos`,
      { params: params, headers: this.headers }
    );
  }

  //Receber data que contem  review por estrelas 
  fetchOtherData(hotel_id: string){
   
    const params = {
      sort_type: 'SORT_MOST_RELEVANT',
      hotel_id: hotel_id,
      locale: 'pt-pt'
    }
    return this.http.get(
      `https://booking-com.p.rapidapi.com/v1/hotels/data`,
      { params: params, headers: this.headers }
    );
  }
}
