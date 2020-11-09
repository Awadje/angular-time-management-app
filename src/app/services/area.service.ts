import { IAreaDetail } from './../interfaces/area-detail.d.interface';
import { Injectable } from '@angular/core';
import { AREAS } from './mock-areas';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  getAreas(): IAreaDetail[] {
    return AREAS
  }
}
