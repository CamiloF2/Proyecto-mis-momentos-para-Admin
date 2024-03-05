import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuFotografosPage } from './menu-fotografos.page';

describe('MenuFotografosPage', () => {
  let component: MenuFotografosPage;
  let fixture: ComponentFixture<MenuFotografosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuFotografosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
