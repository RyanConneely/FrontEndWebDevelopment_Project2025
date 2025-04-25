import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RubblePage } from './rubble.page';

describe('RubblePage', () => {
  let component: RubblePage;
  let fixture: ComponentFixture<RubblePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RubblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
