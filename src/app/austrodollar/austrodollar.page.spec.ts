import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AustrodollarPage } from './austrodollar.page';

describe('AustrodollarPage', () => {
  let component: AustrodollarPage;
  let fixture: ComponentFixture<AustrodollarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AustrodollarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
