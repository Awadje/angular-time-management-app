import { IAreaDetail } from '../../interfaces/area-detail.d.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {


  @Input() area: IAreaDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
