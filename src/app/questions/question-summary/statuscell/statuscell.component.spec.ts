import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscellComponent } from './statuscell.component';

describe('StatuscellComponent', () => {
  let component: StatuscellComponent;
  let fixture: ComponentFixture<StatuscellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuscellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
