import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrdersComponent } from './purchase-orders.component';


const routes: Routes = [
  {
    path: 'add',
    component: PurchaseOrdersComponent,
   
  }
];

@NgModule({ 
    imports: [],
    exports: [RouterModule]
  })

  export class PurchaseOrdersRoutingModule{
      
  }