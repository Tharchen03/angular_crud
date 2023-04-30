import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutingComponent } from './child-routing.component';

describe('ChildRoutingComponent', () => {
  let component: ChildRoutingComponent;
  let fixture: ComponentFixture<ChildRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
