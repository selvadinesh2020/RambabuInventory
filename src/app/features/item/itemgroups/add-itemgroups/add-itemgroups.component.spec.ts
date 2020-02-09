import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemgroupsComponent } from './add-itemgroups.component';

describe('AddItemgroupsComponent', () => {
  let component: AddItemgroupsComponent;
  let fixture: ComponentFixture<AddItemgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
