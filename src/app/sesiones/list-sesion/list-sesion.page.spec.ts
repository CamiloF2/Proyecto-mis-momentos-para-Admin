import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSesionPage } from './list-sesion.page';

describe('ListSesionPage', () => {
  let component: ListSesionPage;
  let fixture: ComponentFixture<ListSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
