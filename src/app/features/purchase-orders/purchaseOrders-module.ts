import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { PurchaseOrdersRoutingModule } from './purchaseOrders-routing.module';
import { PurchaseOrdersComponent } from './purchase-orders.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';



@NgModule({
     imports:[
        CommonModule,
        PurchaseOrdersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[PurchaseOrdersComponent,AddPurchaseOrderComponent]

})
export class PurchaseOrderModule{

}