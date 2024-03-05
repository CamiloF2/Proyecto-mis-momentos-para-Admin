import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateFotografosPage } from './update-fotografos.page';

describe('UpdateFotografosPage', () => {
  let component: UpdateFotografosPage;
  let fixture: ComponentFixture<UpdateFotografosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateFotografosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
