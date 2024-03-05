import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteClientePage } from './delete-cliente.page';

describe('DeleteClientePage', () => {
  let component: DeleteClientePage;
  let fixture: ComponentFixture<DeleteClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
