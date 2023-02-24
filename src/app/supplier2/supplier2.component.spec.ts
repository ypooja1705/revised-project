import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplier2Component } from './supplier2.component';

describe('Supplier2Component', () => {
  let component: Supplier2Component;
  let fixture: ComponentFixture<Supplier2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Supplier2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
