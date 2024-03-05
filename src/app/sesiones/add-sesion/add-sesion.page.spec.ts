import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSesionPage } from './add-sesion.page';

describe('AddSesionPage', () => {
  let component: AddSesionPage;
  let fixture: ComponentFixture<AddSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
