import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSolicitudesPage } from './list-solicitudes.page';

describe('ListSolicitudesPage', () => {
  let component: ListSolicitudesPage;
  let fixture: ComponentFixture<ListSolicitudesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
