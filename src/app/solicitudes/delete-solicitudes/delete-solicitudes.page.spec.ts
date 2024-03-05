import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteSolicitudesPage } from './delete-solicitudes.page';

describe('DeleteSolicitudesPage', () => {
  let component: DeleteSolicitudesPage;
  let fixture: ComponentFixture<DeleteSolicitudesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
