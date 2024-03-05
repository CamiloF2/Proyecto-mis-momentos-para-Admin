import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteSesionPage } from './delete-sesion.page';

describe('DeleteSesionPage', () => {
  let component: DeleteSesionPage;
  let fixture: ComponentFixture<DeleteSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
