import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailReservasPage } from './detail-reservas.page';

describe('DetailReservasPage', () => {
  let component: DetailReservasPage;
  let fixture: ComponentFixture<DetailReservasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
