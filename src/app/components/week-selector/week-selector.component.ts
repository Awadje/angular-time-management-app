import { async } from '@angular/core/testing';
import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { addWeeks, subWeeks, subYears, getWeek, getYear } from 'date-fns';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit {

  @Input() currentDate: Date;
  @Input() startDate: Date;
  @Input() subTitle: string;

  @Output() passDate = new EventEmitter<number>();

  weekNumber: number;
  year: number;
  isCurrentWeek: boolean;
  isStartingWeek: boolean;
  disabledLeft: boolean = false;
  disabledRight: boolean;
  date: Date

  constructor() {}

  ngOnInit() {
    this.isCurrentWeek = true;
    this.disabledRight = true;
    this.date = this.currentDate
    this.weekNumber = getWeek(this.date);
    this.passDate.emit(this.weekNumber)
    this.year = getYear(this.date)
  }

  onPreviousWeek() {
    this.date = subWeeks(this.date, 1);
    this.weekNumber = getWeek(this.date)
    
    this.setCurrentWeekBoolean();
    
    
    this.disabledRight = false;
    this.disabledLeft = this.isDateBeforeStartDate();
    
    this.passDate.emit(this.weekNumber);
  }

  onNextWeek() {
    this.date = addWeeks(this.date, 1);
    this.weekNumber = getWeek(this.date)
    
    this.passDate.emit(this.weekNumber);
    
    this.disabledLeft = false;
    this.isStartingWeek = false
    
    this.disabledRight = this.setCurrentWeekBoolean();
  }

  private setCurrentWeekBoolean() {
    return getYear(this.date) === getYear(this.currentDate) && getWeek(this.date) === getWeek(this.currentDate);
  }

  private isDateBeforeStartDate() {
    return getYear(this.date) < getYear(this.startDate) || (getYear(this.date) === getYear(this.startDate) && getWeek(this.date) <= getWeek(this.startDate) );
  }
}
