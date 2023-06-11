import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '7048f4efa8mshe49fa77e07f556cp16fb4fjsn6907d2b2c17d',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) { }

  fetchDestinations( ) {
    const params = {
    locale: 'pt-pt'
    }


      // BUSCAR DESTINOS COM o endpoint RAPIDAPI
    return this.http.get(
    `https://booking-com.p.rapidapi.com/v1/static/regions?country=pt&order_by=name`,
    { params: params, headers: this.headers }
    );
    }

  fetchHotels(region_id: string ) {
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
}
