import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSesionesPage } from './menu-sesiones.page';

describe('MenuSesionesPage', () => {
  let component: MenuSesionesPage;
  let fixture: ComponentFixture<MenuSesionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuSesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
