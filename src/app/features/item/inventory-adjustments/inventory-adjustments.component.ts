import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-inventory-adjustments',
  templateUrl: './inventory-adjustments.component.html',
  styleUrls: ['./inventory-adjustments.component.css']
})
export class InventoryAdjustmentsComponent implements OnInit {

  constructor() { }
  itemList: any = [
    {
    'Id': 1,
    'Date': '26/01/2018',
    'Reason': 'TEST',
    'Description': '200000',
    'Reference': '2',
    'AdjustmentType': 'test',
    'AdjustedBy': 'john'
    },
    {
      'Id': 2,
      'Date': '26/01/2019',
      'Reason': 'TEST',
      'Description': '400000',
      'Reference': '5',
      'AdjustmentType': 'test',
      'AdjustedBy': 'raj'
      }
    ]

  displayedColumns: string[] = ['SELECT', 'DATE', 'REASON', 'DESCRIPTION', 'REFERENCE', 'ADJUSTMENT TYPE', 'ADJUSTED BY'];
  dataSource = new MatTableDataSource<any>(this.itemList);
  selection = new SelectionModel<any>(true, []);

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


}
