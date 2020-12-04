import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { addWeeks, subWeeks, getWeek } from 'date-fns';

import { WeekSelectorComponent } from './week-selector.component';

describe('WeekSelectorComponent start date equal to current date', () => {
  let component: WeekSelectorComponent;
  let fixture: ComponentFixture<WeekSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSelectorComponent);
    component = fixture.componentInstance;
    component.currentDate = new Date(2020, 11);
    component.startDate = new Date(2020, 11);

    fixture.detectChanges();
  });

  it('should emit weeknumber minus one when clicked', () => {
    spyOn(component.passDate, 'emit');
 
    fixture.detectChanges();
    let currentWeekMinusOne = getWeek(subWeeks(component.date, 1))


    component.ngOnInit()
    component.selectWeek(false)

    expect(component.weekNumber).toBe(currentWeekMinusOne);
    expect(component.passDate.emit).toHaveBeenCalledWith(currentWeekMinusOne)
    expect(component.disabledLeft).toBe(true)
    expect(component.disabledRight).toBe(false)
  });

  it('should emit weeknumber plus one when clicked', () => {
    spyOn(component.passDate, 'emit');
    fixture.detectChanges();
    let currentWeekPlussOne = getWeek(addWeeks(component.date, 1))
    component.isCurrentWeek = true;
    component.date = component.currentDate

    component.ngOnInit()
    component.selectWeek(true)

    expect(component.weekNumber).toBe(currentWeekPlussOne);
    expect(component.passDate.emit).toHaveBeenCalledWith(currentWeekPlussOne)
    expect(component.disabledLeft).toBe(false)
    expect(component.disabledRight).toBe(false)
  });

  describe('WeekSelectorComponent current date before start date', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WeekSelectorComponent);
      component = fixture.componentInstance;
      component.currentDate = new Date(getWeek(subWeeks(Date.now(), 1)));
      component.startDate = new Date(Date.now())
  
      fixture.detectChanges();
    });
  
    it('should emit weeknumber minus one when clicked', () => {
      spyOn(component.passDate, 'emit');
   
      fixture.detectChanges();
      let currentWeekMinusOne = getWeek(subWeeks(component.date, 1))
  
      component.ngOnInit()
      component.selectWeek(false)
  
      expect(component.weekNumber).toBe(currentWeekMinusOne);
      expect(component.passDate.emit).toHaveBeenCalledWith(currentWeekMinusOne)
      expect(component.disabledLeft).toBe(true)
      expect(component.disabledRight).toBe(false)
    });
  });

  describe('WeekSelectorComponent current date equal to current week', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WeekSelectorComponent);
      component = fixture.componentInstance;
      component.currentDate = new Date(Date.now());
  
      fixture.detectChanges();
    });
  
    it('should emit weeknumber minus one when clicked', () => {
      component.ngOnInit()
      
      expect(component.disabledLeft).toBe(false)
      expect(component.disabledRight).toBe(true)
    });
  });
});