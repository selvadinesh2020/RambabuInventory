import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-itemgroups',
  templateUrl: './itemgroups.component.html',
  styleUrls: ['./itemgroups.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ItemgroupsComponent implements OnInit {
  router: Router;
  showSplitRight = true;
  constructor(private route: Router) {
    this.router = route;
  }
  itemList: any = [
    {
    'Id': 100,
    'Name': 'MensApperal',
    'SKU': ' 300',
    'StockOnHand': '200000',
    'ReorderLevel': '2'
    },
    {
    'Id': 200,
    'Name': 'MensApperal',
    'SKU': '100',
    'StockOnHand': '100000',
    'ReorderLevel': '4'
      }
    ];
  displayedColumns: string[] = ['select', 'Expand', 'NAME', 'SKU', 'STOCK ON HAND', 'REORDER LEVEL'];
  dataSource = new MatTableDataSource<any>(this.itemList);
  selection = new SelectionModel<any>(true, []);
  expandedElement: any | null;
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
  toggleRightSidenav(): void {
    this.showSplitRight = true;
  }
}
