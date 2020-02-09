import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }
  itemList: any = [
    {
    'Id': 1,
    'Name': 'MensApperal',
    'SKU':' 300',
    'StockOnHand': '200000',
    'ReorderLevel': '2'
    },
    {
    'Id': 2,
    'Name': 'MensApperal',
    'SKU': '100',
    'StockOnHand': '100000',
    'ReorderLevel': '4'
      }
    ]

  displayedColumns: string[] = ['select', 'NAME', 'SKU', 'STOCK ON HAND', 'REORDER LEVEL'];
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
