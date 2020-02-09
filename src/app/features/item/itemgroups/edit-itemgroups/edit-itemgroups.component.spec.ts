import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemgroupsComponent } from './edit-itemgroups.component';

describe('EditItemgroupsComponent', () => {
  let component: EditItemgroupsComponent;
  let fixture: ComponentFixture<EditItemgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
