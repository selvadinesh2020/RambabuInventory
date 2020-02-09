import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-composite-items',
  templateUrl: './composite-items.component.html',
  styleUrls: ['./composite-items.component.css']
})
export class CompositeItemsComponent implements OnInit {

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedRows$: Observable<ItemGroupDate[]>;
  totalRows$: Observable<number>;


  ngOnInit() {
    // const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    // const pageEvents$: Observable<PageEvent> = fromMatPaginator(this.paginator);

    const rows$ = of(exampleShips);

    // this.totalRows$ = rows$.pipe(map(rows => rows.length));
    this.displayedRows$ = rows$;
  }
}

export interface ItemGroupDate {
  Id: number;
  Name: string;
  SKU: string;
  StockOnHand: string;
  ReorderLevel: string;
}

export const exampleShips: ItemGroupDate[] = [
  {
    'Id': 1,
    'Name': 'MensApperal',
    'SKU': '300',
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

];
