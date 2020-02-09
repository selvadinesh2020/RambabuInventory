import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { SalesOrdersComponent } from './sales-orders.component';
import { salesOrderRoutingModule } from './salesOrder-routing.module';
import { AddSalesOrderComponent } from './add-sales-order/add-sales-order.component';




@NgModule({
     imports:[
        CommonModule,
        salesOrderRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[SalesOrdersComponent, AddSalesOrderComponent]

})
export class SalesOrderModule{

}