import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailFotografosPage } from './detail-fotografos.page';

describe('DetailFotografosPage', () => {
  let component: DetailFotografosPage;
  let fixture: ComponentFixture<DetailFotografosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailFotografosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
