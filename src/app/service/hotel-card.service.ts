import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class hotelApiService {
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e761e5ace1msh02038ca94aa3b61p1656fdjsn5a62347f3376',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  // Buscar detalhes do hotel com base no ID do hotel
  fetchHotelDetails(hotel_id: string) {
    const params = {
      hotel_id: hotel_id,
      currency: 'EUR',
      locale: 'pt-pt',
      checkout_date: '',
      checkin_date: ''
    }
    return this.http.get(
      `https://booking-com.p.rapidapi.com/v2/hotels/details`,
      { params: params, headers: this.headers }
    );
  }

  // Buscar fotos do hotel com base no ID do hotel
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

  // Buscar outros dados relacionados ao hotel com base no ID do hotel
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
