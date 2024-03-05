import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteFotografosPage } from './delete-fotografos.page';

describe('DeleteFotografosPage', () => {
  let component: DeleteFotografosPage;
  let fixture: ComponentFixture<DeleteFotografosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteFotografosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
