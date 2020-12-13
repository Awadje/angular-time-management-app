import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDetailComponent } from './area-detail.component';

describe('AreaDetailComponent', () => {
  let component: AreaDetailComponent;
  let fixture: ComponentFixture<AreaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDetailComponent);
    component = fixture.componentInstance;
    component.area = { 
      area: 'test', 
      role: 'test', 
      action: 'test'
   }
   fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });
});
