import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthBtnsComponent } from './userauth-btns.component';

describe('UserauthBtnsComponent', () => {
  let component: UserauthBtnsComponent;
  let fixture: ComponentFixture<UserauthBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserauthBtnsComponent]
    });
    fixture = TestBed.createComponent(UserauthBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
