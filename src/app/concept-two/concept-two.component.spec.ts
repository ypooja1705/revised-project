import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptTwoComponent } from './concept-two.component';

describe('ConceptTwoComponent', () => {
  let component: ConceptTwoComponent;
  let fixture: ComponentFixture<ConceptTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
