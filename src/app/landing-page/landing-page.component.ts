import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../service/landing-page.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss'],
})
export class LandingPageComponent implements OnInit {
  myData: any;
  hotels: any[] = [];
  destinations: any[] = [];
  destination: string = '';
  checkinDate!: string;
  checkoutDate!: string;
  adultsNumber!: number;
  roomNumber!: number;
  showBookingPage: boolean = false;

  constructor(
    private landingPageService: LandingPageService, // Serviço para obter dados da página de destino
    private router: Router, // Serviço de roteamento
    private alertController: AlertController // Controller para mostrar as mensagens de alerta
  ) {}

  ngOnInit(): void {
    // Obter destinos do serviço LandingPageService
    this.landingPageService.fetchDestinations().subscribe((response: any) => {
      this.destinations = response.result;
    });
  }

  async onSearch(): Promise<void> {
    if (!this.destination || !this.checkinDate || !this.checkoutDate || !this.adultsNumber) {
      // Mostrar alerta para campos em falta
      const alert = await this.alertController.create({
        header: 'Campo em Falta',
        message: 'Por favor preencha todos os campos obrigatórios.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    this.landingPageService.fetchHotels(this.destination).subscribe(
      async (response: any) => {
        console.log(response.result);
        this.hotels = response.result;

        // Filtrar hotéis pelo destino selecionado
        const filteredHotels = this.hotels.filter((hotel) => hotel.city === this.destination);

        if (filteredHotels.length > 0) {
          // Obter o número de adultos do primeiro hotel na lista filtrada
          this.adultsNumber = filteredHotels[0].adults;
        } else {
          this.adultsNumber = 0;
        }

        const checkin = new Date(this.checkinDate);
        const checkout = new Date(this.checkoutDate);

        if (checkin > checkout) {
          // Mostrar alerta para datas inválidas
          const alert = await this.alertController.create({
            header: 'Data Inválida',
            message: 'Por favor selecione uma data de check-in/check-out válida.',
            buttons: ['OK'],
          });

          await alert.present();
          return;
        }

        // Construir os parâmetros da query para a rota '/hotel-list'
        const queryParams = {
          destination: this.destination,
          checkinDate: checkin.toISOString(),
          checkoutDate: checkout.toISOString(),
          adultsNumber: this.adultsNumber,
          hotels: JSON.stringify(this.hotels),
        };

<<<<<<< HEAD
=======
        // Navegar para a rota '/hotel-list' com os parâmetros da query
>>>>>>> 47be99c7ca5edc5b37faea354f628d776e91f8ed
        this.router.navigate(['/hotel-list'], { queryParams: queryParams });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
