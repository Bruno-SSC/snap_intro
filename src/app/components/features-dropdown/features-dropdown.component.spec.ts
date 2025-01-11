import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDropdownComponent } from './features-dropdown.component';

describe('FeaturesDropdownComponent', () => {
  let component: FeaturesDropdownComponent;
  let fixture: ComponentFixture<FeaturesDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesDropdownComponent]
    });
    fixture = TestBed.createComponent(FeaturesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
