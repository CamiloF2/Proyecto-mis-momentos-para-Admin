import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListReservasPage } from './list-reservas.page';

describe('ListReservasPage', () => {
  let component: ListReservasPage;
  let fixture: ComponentFixture<ListReservasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
