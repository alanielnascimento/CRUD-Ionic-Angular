import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailUsuarioPage } from './detail-usuario.page';

describe('DetailUsuarioPage', () => {
  let component: DetailUsuarioPage;
  let fixture: ComponentFixture<DetailUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
