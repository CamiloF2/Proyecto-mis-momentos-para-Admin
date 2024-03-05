import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuReservasPage } from './menu-reservas.page';

describe('MenuReservasPage', () => {
  let component: MenuReservasPage;
  let fixture: ComponentFixture<MenuReservasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
