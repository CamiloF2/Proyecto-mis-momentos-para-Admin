import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSolicitudesPage } from './detail-solicitudes.page';

describe('DetailSolicitudesPage', () => {
  let component: DetailSolicitudesPage;
  let fixture: ComponentFixture<DetailSolicitudesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
