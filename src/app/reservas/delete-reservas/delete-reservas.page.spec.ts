import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteReservasPage } from './delete-reservas.page';

describe('DeleteReservasPage', () => {
  let component: DeleteReservasPage;
  let fixture: ComponentFixture<DeleteReservasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
