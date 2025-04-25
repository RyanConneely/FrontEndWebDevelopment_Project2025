import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YenPage } from './yen.page';

describe('YenPage', () => {
  let component: YenPage;
  let fixture: ComponentFixture<YenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
