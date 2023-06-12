import { Component, OnInit } from '@angular/core';
import { BookingapiService } from '../service/bookingapi.service';
import { ActivatedRoute, Router } from '@angular/router';


// Definir a estrutura da informaçao dos hotéis
interface HotelData {
  additional_policies: string;
  address: string;
  adult_age_restrictions: {
    min_age: number;
    
  };
  book_domestic_without_cc_details: boolean;
  chain_id: number;
  checkin_checkout_times: {
    checkout_to: string;
    checkin_from: string;
    checkout_from: string;
    checkin_to: string;
  };
  city: string;
  city_id: number;
  default_language: string;
  district_id: number;
  hotel_description: string;
  hotel_facilities: string;
  hotel_id: number;
  name: string;
  number_of_rooms: number;
  region_id: number;
  region_ids: string;
  url: string;
  zip: string;
  rating: number;
}

@Component({
  selector: 'app-bookingapi',
  templateUrl: './bookingapi.page.html',
  styleUrls: ['./bookingapi.page.scss'],
})
export class BookingapiComponent implements OnInit {
  hotels: HotelData[] = []; // Array para conter a lista de hotéis
  fake_hotel_image = '../../assets/fake_hotel_image.jpg';
  destId: number = 1234; 
  destination!: string;
  checkinDate!: string; 
  checkoutDate!: string; 
  adultsNumber!: number; 
  roomNumber!: number; 

  constructor(
    private bookingApiService: BookingapiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Verificar se existem parametros da query no URL
    const queryParams = this.route.snapshot.queryParams;
    if (Object.keys(queryParams).length > 0) {
      this.filterHotels();
    } else {
      this.fetchHotels();
    }
  }

    // Buscar os hotéis com base nos parametros fornecidos

  fetchHotels() {
    this.bookingApiService
      .fetchHotels(
        this.destId,
        this.checkinDate,
        this.checkoutDate,
        this.adultsNumber,
        this.roomNumber
      )
      .subscribe((response) => {
        let auxList: any = response;
        this.hotels = auxList.result;
        console.log('hotels', this.hotels);
      });
  }


    //Filtrar os hotéis com base no destino
  filterHotels() {
    // Receber os parametros d query
    const queryParams = this.route.snapshot.queryParams;
    // Verificar se foi fornecido um destino
    const destination = queryParams['destination'];
    if (!destination) {
      this.hotels = []; // Limpar a lista de hotéis
      return;
    }
    const hotels = JSON.parse(queryParams['hotels']);
   
    this.hotels = [...hotels];
  }

  
  // Receber o número total de hotéis
  totalHotels() {
    return this.hotels ? this.hotels.length : 0;
  }


  // Calcular o preço total de um hotél com base no preço do quarto, n+umero do quarto, e as noites
  getTotalPrice(hotel: any) {
    let roomPrice = hotel.price_breakdown.room_total_price / this.roomNumber;
    return roomPrice * this.roomNumber * this.totalNights();
  }


  // Calcular o número total de noites com base nas datas de check-int e check out
  totalNights() {
    let checkinDate = new Date(this.checkinDate);
    let checkoutDate = new Date(this.checkoutDate);
    let timeDiff = Math.abs(checkoutDate.getTime() - checkinDate.getTime());
    let nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return nightCount;
  }

  getHotelName(hotel: any) {
    return hotel.hotel_name;
  }

  getHotelStarRating(hotel: any) {
    return hotel.star_rating;
  }

  getHotelAddress(hotel: any) {
    return hotel.address;
  }

  viewDetail(hotelId: number) {
    this.router.navigate([`/hotel-card/${hotelId}`]);
  }

  getStars(stars: number): string {
    return '⭐️'.repeat(stars);}
  
}
