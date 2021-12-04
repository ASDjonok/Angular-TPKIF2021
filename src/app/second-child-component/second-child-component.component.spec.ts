import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildComponentComponent } from './second-child-component.component';

describe('SecondChildComponentComponent', () => {
  let component: SecondChildComponentComponent;
  let fixture: ComponentFixture<SecondChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChildComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
