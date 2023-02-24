import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTwoComponent } from './application-two.component';

describe('ApplicationTwoComponent', () => {
  let component: ApplicationTwoComponent;
  let fixture: ComponentFixture<ApplicationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
