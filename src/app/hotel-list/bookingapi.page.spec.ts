import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingapiComponent } from './bookingapi.page';

describe('BookingapiPage', () => {
  let component: BookingapiComponent;
  let fixture: ComponentFixture<BookingapiComponent>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookingapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
