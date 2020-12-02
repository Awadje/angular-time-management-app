import { AreaService } from './../../services/area.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-roster',
  templateUrl: './week-roster.component.html',
  styleUrls: ['./week-roster.component.scss']
})
export class WeekRosterComponent implements OnInit {
  areas: IAreaDetail[];
  currentDate = new Date(Date.now())
  startDate = new Date(2020, 9 ,1)

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas()
  }
}
