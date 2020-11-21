import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestregisterComponent } from './restregister.component';

describe('RestregisterComponent', () => {
  let component: RestregisterComponent;
  let fixture: ComponentFixture<RestregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
