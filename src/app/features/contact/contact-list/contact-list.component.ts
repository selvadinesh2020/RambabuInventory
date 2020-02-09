import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isGridRequired:Boolean=true;
  contactTypeList:string[] = [
    'All',
    'Customers',
    'Vendors',
    'Active',
    'InActive'
  ];

  contactDetailList:any= [
  {
  'Id':1,
  'Name':'Santhip',
  'CompanyName':'BSIT',
  'Email':'sandy10@gmail.com',
  'Phone':'	9442928360',
  'placeofsupply': '',
  'Receivables':'',
  'unusedcredits':''
  },
  {
    'Id':2,
    'Name':'Dinesh',
    'CompanyName':'BSIT',
    'Email':'sandy10@gmail.com',
    'Phone':'	9442928360'
    },
    {
      'Id':3,
      'Name':'Param',
      'CompanyName':'BSIT',
      'Email':'sandy10@gmail.com',
      'Phone':'	9442928360'
      },
      {
        'Id':4,
        'Name':'Rambabu',
        'CompanyName':'BSIT',
        'Email':'sandy10@gmail.com',
        'Phone':'	9442928360'
        }
  ];

  cols: any[];
 

  constructor(private _router: Router) {
   }

  ngOnInit() {
    this.cols = [
      { field: 'Name', header: 'Name' },
      { field: 'CompanyName', header: 'CompanyName' },
      { field: 'Email', header: 'Email' },
      { field: 'Phone', header: 'Phone' }
  ];
  }
   ngAfterViewChecked() {
    this.LoadDefaultValues();
   }
  gotoContactDetail(contactId:string) {
    this.isGridRequired=false;
    this._router.navigate(['contactlist/contactdetail/'+ contactId],{ fragment: 'contactdetail' });
  }

  LoadDefaultValues(){
    this.isGridRequired=true;
  }

  displayedColumns: string[] = ['select', 'NAME', 'COMPANY NAME', 'EMAIL', 'WORK PHONE','PLACE OF SUPPLY','RECEIVABLES','UNUSEDCREDITS'];
  dataSource = new MatTableDataSource<any>(this.contactDetailList);
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];