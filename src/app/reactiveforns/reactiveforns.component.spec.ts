import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefornsComponent } from './reactiveforns.component';

describe('ReactivefornsComponent', () => {
  let component: ReactivefornsComponent;
  let fixture: ComponentFixture<ReactivefornsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivefornsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivefornsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
