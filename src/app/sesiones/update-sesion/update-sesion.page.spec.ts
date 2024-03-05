import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSesionPage } from './update-sesion.page';

describe('UpdateSesionPage', () => {
  let component: UpdateSesionPage;
  let fixture: ComponentFixture<UpdateSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
