import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortofolioPage } from './portofolio.page';

describe('PortofolioPage', () => {
  let component: PortofolioPage;
  let fixture: ComponentFixture<PortofolioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PortofolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
