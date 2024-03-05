import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuClientesPage } from './menu-clientes.page';

describe('MenuClientesPage', () => {
  let component: MenuClientesPage;
  let fixture: ComponentFixture<MenuClientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
