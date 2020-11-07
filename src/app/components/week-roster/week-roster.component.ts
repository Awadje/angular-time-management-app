import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';
import { IAreaList } from '../../interfaces/area-list.interface';

@Component({
  selector: 'app-week-roster',
  templateUrl: './week-roster.component.html',
  styleUrls: ['./week-roster.component.scss']
})
export class WeekRosterComponent implements OnInit {
  areas: IAreaList;

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas()
  }
}
