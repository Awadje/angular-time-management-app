import { IAreaDetail } from './../../interfaces/area-detail.d.interface';
import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-week-roster',
  templateUrl: './week-roster.component.html',
  styleUrls: ['./week-roster.component.scss']
})
export class WeekRosterComponent implements OnInit {
  areas: IAreaDetail[];

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas()
  }
}
