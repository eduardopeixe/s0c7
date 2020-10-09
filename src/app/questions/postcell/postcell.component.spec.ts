import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcellComponent } from './postcell.component';

describe('PostcellComponent', () => {
  let component: PostcellComponent;
  let fixture: ComponentFixture<PostcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
