import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorderlistComponent } from './restorderlist.component';

describe('RestorderlistComponent', () => {
  let component: RestorderlistComponent;
  let fixture: ComponentFixture<RestorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
