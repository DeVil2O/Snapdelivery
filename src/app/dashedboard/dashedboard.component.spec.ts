import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedboardComponent } from './dashedboard.component';

describe('DashedboardComponent', () => {
  let component: DashedboardComponent;
  let fixture: ComponentFixture<DashedboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashedboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashedboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
