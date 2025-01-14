import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthbtnsComponent } from './user-authbtns.component';

describe('UserAuthbtnsComponent', () => {
  let component: UserAuthbtnsComponent;
  let fixture: ComponentFixture<UserAuthbtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAuthbtnsComponent]
    });
    fixture = TestBed.createComponent(UserAuthbtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
