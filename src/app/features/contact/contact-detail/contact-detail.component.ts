import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  transactionList:any= [
    {
    'Id':1,
    'Name':'SalesOrder',
    },
    {
      'Id':2,
      'Name':'Invoice',
      },
      {
        'Id':3,
        'Name':'Invoice Payment',
        },
        {
          'Id':4,
          'Name':'Delivery Challan',
          }
    ];
    otherActionList:any= [
      {
        'Id':1,
        'Name':'Merge Contacts'
        },
        {
          'Id':2,
          'Name':'Email Contact'
          },
          {
            'Id':3,
            'Name':'Clone'
          },
        {
              'Id':4,
              'Name':'Link to Vendor'
        },
        {
          'Id':5,
          'Name':'Mark as Inactive'
    },
    {
      'Id':6,
      'Name':'Delete'
    }
    ];
  constructor(private _location: Location) { }

  ngOnInit() {
  }
  gotoContactList() {
    this._location.back();
  }

  getTransactionList(){
   
    
  }
  getOtherActionList(){
    
  }

}
