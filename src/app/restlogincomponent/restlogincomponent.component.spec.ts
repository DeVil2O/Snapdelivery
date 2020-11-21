import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestlogincomponentComponent } from './restlogincomponent.component';

describe('RestlogincomponentComponent', () => {
  let component: RestlogincomponentComponent;
  let fixture: ComponentFixture<RestlogincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestlogincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestlogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
