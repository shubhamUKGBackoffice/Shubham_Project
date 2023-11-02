import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdemoLoginComponent } from './ddemo-login.component';

describe('DdemoLoginComponent', () => {
  let component: DdemoLoginComponent;
  let fixture: ComponentFixture<DdemoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdemoLoginComponent]
    });
    fixture = TestBed.createComponent(DdemoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
