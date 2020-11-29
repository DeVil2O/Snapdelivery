import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddtocartmenuComponent } from './useraddtocartmenu.component';

describe('UseraddtocartmenuComponent', () => {
  let component: UseraddtocartmenuComponent;
  let fixture: ComponentFixture<UseraddtocartmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraddtocartmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddtocartmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
