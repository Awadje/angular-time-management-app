import { IAreaDetail } from './../../interfaces/area-detail.d.interface';
import { AreaService } from '../../services/area.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {
  areas: IAreaDetail[];

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas()
  }
}
