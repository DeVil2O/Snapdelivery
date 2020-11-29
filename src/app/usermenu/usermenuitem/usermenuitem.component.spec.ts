import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenuitemComponent } from './usermenuitem.component';

describe('UsermenuitemComponent', () => {
  let component: UsermenuitemComponent;
  let fixture: ComponentFixture<UsermenuitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermenuitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
