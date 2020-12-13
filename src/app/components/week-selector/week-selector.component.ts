import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { addWeeks, subWeeks, getWeek, getYear } from 'date-fns';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit {

  @Input('currentDate') currentDate: Date;
  @Input('startDate') startDate: Date;
  @Input('subTitle') subTitle: string;

  @Output() passDate = new EventEmitter<number>();

  weekNumber: number;
  year: number;
  isCurrentWeek: boolean = true;
  disabledLeft: boolean = false;
  disabledRight: boolean = true;
  isStartingWeek: boolean;
  date: Date

  constructor() {}

  ngOnInit() {
    this.date = this.currentDate
    this.weekNumber = getWeek(this.date);
    this.passDate.emit(this.weekNumber)
    this.year = getYear(this.date)
  }

  goToNextWeek() {
    let selection = { direction: 'next' }
    this.selectWeek(selection)
  }

  goToPreviousWeek() {
    let selection = { direction: 'previous' }
    this.selectWeek(selection)
  }

  private selectWeek(selection: object) {
    selection['direction'] === 'next' ? this.date = addWeeks(this.date, 1) : this.date = subWeeks(this.date, 1);
    this.weekNumber = getWeek(this.date)
  
    const isDateBeforeStartDate = this.checkIsDateBeforeStartDate();
    const isCurrentWeek = this.getCurrentWeekBoolean()
    
    this.getCurrentWeekBoolean();
    
    this.disabledLeft = isDateBeforeStartDate
    this.disabledRight = isCurrentWeek 
    
    this.passDate.emit(this.weekNumber);
  }

  private getCurrentWeekBoolean() {
    return getYear(this.date) === getYear(this.currentDate) && 
    getWeek(this.date) === getWeek(this.currentDate);
  }

  private checkIsDateBeforeStartDate() {
    if(getYear(this.date) === getYear(this.startDate)) {
      return getWeek(this.date) <= getWeek(this.startDate);
   }
   return getYear(this.date) < getYear(this.startDate);  
  }
}
