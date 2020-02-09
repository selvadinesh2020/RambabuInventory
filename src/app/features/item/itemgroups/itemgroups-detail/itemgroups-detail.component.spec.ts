import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemgroupsDetailComponent } from './itemgroups-detail.component';

describe('ItemgroupsDetailComponent', () => {
  let component: ItemgroupsDetailComponent;
  let fixture: ComponentFixture<ItemgroupsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgroupsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgroupsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
