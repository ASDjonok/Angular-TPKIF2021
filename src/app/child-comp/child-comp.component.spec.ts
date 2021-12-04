import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompComponent } from './child-comp.component';

describe('ChildCompComponent', () => {
  let component: ChildCompComponent;
  let fixture: ComponentFixture<ChildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
