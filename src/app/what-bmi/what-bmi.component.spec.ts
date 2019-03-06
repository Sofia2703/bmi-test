import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatBmiComponent } from './what-bmi.component';

describe('WhatBmiComponent', () => {
  let component: WhatBmiComponent;
  let fixture: ComponentFixture<WhatBmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatBmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
