import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSesionPage } from './detail-sesion.page';

describe('DetailSesionPage', () => {
  let component: DetailSesionPage;
  let fixture: ComponentFixture<DetailSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
