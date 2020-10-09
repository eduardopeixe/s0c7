import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarcellComponent } from './avatarcell.component';

describe('AvatarcellComponent', () => {
  let component: AvatarcellComponent;
  let fixture: ComponentFixture<AvatarcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
