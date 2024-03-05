import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailClientePage } from './detail-cliente.page';

describe('DetailClientePage', () => {
  let component: DetailClientePage;
  let fixture: ComponentFixture<DetailClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
