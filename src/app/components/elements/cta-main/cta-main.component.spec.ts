import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaMainComponent } from './cta-main.component';

describe('CtaMainComponent', () => {
  let component: CtaMainComponent;
  let fixture: ComponentFixture<CtaMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaMainComponent]
    });
    fixture = TestBed.createComponent(CtaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
