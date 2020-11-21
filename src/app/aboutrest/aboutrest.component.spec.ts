import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutrestComponent } from './aboutrest.component';

describe('AboutrestComponent', () => {
  let component: AboutrestComponent;
  let fixture: ComponentFixture<AboutrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
