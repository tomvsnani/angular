import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsComponent } from './shots.component';

describe('ShotsComponent', () => {
  let component: ShotsComponent;
  let fixture: ComponentFixture<ShotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShotsComponent]
    });
    fixture = TestBed.createComponent(ShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
