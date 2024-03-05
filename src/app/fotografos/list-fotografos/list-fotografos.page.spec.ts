import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFotografoPage } from './list-fotografos.page';

describe('ListFotografosPage', () => {
  let component: ListFotografoPage;
  let fixture: ComponentFixture<ListFotografoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListFotografoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
