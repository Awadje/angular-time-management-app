import { IAreaDetail } from '../interfaces/area-detail.interface';
import { IAreaList } from './../interfaces/area-list.interface';
import { Injectable } from '@angular/core';
import { AREAS } from './mock-areas';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  getAreas() {
    return AREAS
  }
}
