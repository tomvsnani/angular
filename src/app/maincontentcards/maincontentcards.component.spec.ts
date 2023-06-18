import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentcardsComponent } from './maincontentcards.component';

describe('MaincontentcardsComponent', () => {
  let component: MaincontentcardsComponent;
  let fixture: ComponentFixture<MaincontentcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincontentcardsComponent]
    });
    fixture = TestBed.createComponent(MaincontentcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
