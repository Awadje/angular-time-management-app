import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekRosterComponent } from './week-roster.component';

describe('WeekRosterComponent', () => {
  let component: WeekRosterComponent;
  let fixture: ComponentFixture<WeekRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
