import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncellComponent } from './questioncell.component';

describe('QuestioncellComponent', () => {
  let component: QuestioncellComponent;
  let fixture: ComponentFixture<QuestioncellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestioncellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioncellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
