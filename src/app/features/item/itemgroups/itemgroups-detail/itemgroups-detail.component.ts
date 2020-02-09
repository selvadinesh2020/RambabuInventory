import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemgroups-detail',
  templateUrl: './itemgroups-detail.component.html',
  styleUrls: ['./itemgroups-detail.component.css']
})
export class ItemgroupsDetailComponent implements OnInit {

  constructor(private _location: Location,
    private router: Router,
    private Activatedroute: ActivatedRoute ) {
  }
  displayedColumns: string[] = ['date', 'details'];
  dataSource = ELEMENT_DATA;
  itemId: number;
  ngOnInit() {
    this.itemId = + this.Activatedroute.snapshot.queryParamMap.get('Id');
  }
  backClicked() {
    this.router.navigate(['/item/itemGroups']); // , {queryParams: {Id: this.itemId}});
  }
}
export interface History {
  date: string;
  details: string;
  operation: string;
}

const ELEMENT_DATA: History[] = [
  {date: '01/01/2018', details: 'Hydrogen', operation: 'Updated'},
  {date: '02/01/2019', details: 'Hydrogen', operation: 'Craated'},
];
