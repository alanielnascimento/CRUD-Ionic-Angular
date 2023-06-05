import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUsuarioPage } from './delete-usuario.page';

describe('DeleteUsuarioPage', () => {
  let component: DeleteUsuarioPage;
  let fixture: ComponentFixture<DeleteUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
