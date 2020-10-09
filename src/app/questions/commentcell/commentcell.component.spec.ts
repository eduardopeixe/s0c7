import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcellComponent } from './commentcell.component';

describe('CommentcellComponent', () => {
  let component: CommentcellComponent;
  let fixture: ComponentFixture<CommentcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
