import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagcellComponent } from './tagcell.component';

describe('TagcellComponent', () => {
  let component: TagcellComponent;
  let fixture: ComponentFixture<TagcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
