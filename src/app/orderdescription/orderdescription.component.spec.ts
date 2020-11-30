import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdescriptionComponent } from './orderdescription.component';

describe('OrderdescriptionComponent', () => {
  let component: OrderdescriptionComponent;
  let fixture: ComponentFixture<OrderdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
