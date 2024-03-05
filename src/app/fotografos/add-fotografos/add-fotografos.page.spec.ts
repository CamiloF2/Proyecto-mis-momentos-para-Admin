import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFotografosPage } from './add-fotografos.page';

describe('AddFotografosPage', () => {
  let component: AddFotografosPage;
  let fixture: ComponentFixture<AddFotografosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddFotografosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
