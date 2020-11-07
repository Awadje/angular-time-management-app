import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetailComponent } from './area-detail.component';

describe('RoleComponent', () => {
  let component: RoleDetailComponent;
  let fixture: ComponentFixture<RoleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
