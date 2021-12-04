import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentInMyModelComponent } from './my-component-in-my-model.component';

describe('MyComponentInMyModelComponent', () => {
  let component: MyComponentInMyModelComponent;
  let fixture: ComponentFixture<MyComponentInMyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentInMyModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentInMyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
