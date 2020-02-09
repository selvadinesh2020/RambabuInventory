import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppMainLayoutComponent } from '../../../core/layout/app-main-layout/app-main-layout.component';
import { ContactListComponent } from '../../contact/contact-list/contact-list.component';
import { ContactComponent } from '../../contact/contact.component';
import { ContactDetailComponent } from '../../contact/contact-detail/contact-detail.component';
import { AddContactComponent } from '../../contact/add-contact/add-contact.component';
import { ItemComponent } from '../../item/item.component';
import { ItemgroupsComponent } from '../../item/itemgroups/itemgroups.component';
import { CompositeItemsComponent } from '../../item/composite-items/composite-items.component';
import { InventoryAdjustmentsComponent } from '../../item/inventory-adjustments/inventory-adjustments.component';
import { SalesOrdersComponent } from '../../sales-orders/sales-orders.component';
import { PackagesComponent } from '../../packages/packages.component';
import { InvoicesComponent } from '../../invoices/invoices.component';
import { DevileryChallansComponent } from '../../devilery-challans/devilery-challans.component';
import { PurchaseOrdersComponent } from '../../purchase-orders/purchase-orders.component';
import { AddPurchaseOrderComponent } from '../../purchase-orders/add-purchase-order/add-purchase-order.component';
import { BillsComponent } from '../../bills/bills.component';
import { IntegrationsComponent } from '../../integrations/integrations.component';
import { ReportsComponent } from '../../reports/reports.component';
import { ItemsComponent } from '../../item/items/items.component';
import { AddItemgroupsComponent } from '../../item/itemgroups/add-itemgroups/add-itemgroups.component';
import { EditItemgroupsComponent } from '../../item/itemgroups/edit-itemgroups/edit-itemgroups.component';
import { AddSalesOrderComponent } from '../../sales-orders/add-sales-order/add-sales-order.component';
import { ItemgroupsDetailComponent } from '../../item/itemgroups/itemgroups-detail/itemgroups-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainLayoutComponent,

    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'contact',
        component: ContactComponent,
        children:
        [
          /*ROUTE for Contact TAB*/
          {path: '', component: ContactListComponent},
         { path: 'add', component: AddContactComponent }
        ]

      },
      {
        path: 'item',
        component: ItemComponent,
        children: [
          /* ROUTE for Items TAB*/

          {path: '', component: ItemComponent},
          {path: 'items', component: ItemsComponent},
          {path: 'itemGroups', component: ItemgroupsComponent,
        children: [
          {path: 'add', component: AddItemgroupsComponent},
          { path: 'edit', component: EditItemgroupsComponent},
          { path: 'detials', component: ItemgroupsDetailComponent}
        ]},
          {path: 'compositeItems', component: CompositeItemsComponent},
          {path: 'invAdjustments', component: InventoryAdjustmentsComponent}

        ]
      },
      {
        path: 'salesOrder',
        children: [
          {
            path: 'add', component: AddSalesOrderComponent
          },
          {
            path: '', component: SalesOrdersComponent
          }
        ]
      },
      {
        path: 'packages',
        component: PackagesComponent,
        children: [
          {path: '', component: PackagesComponent}
        ]
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
        children: [
          {path: '', component: InvoicesComponent}
        ]
      },
      {
        path: 'deliveryChallans', component: DevileryChallansComponent,
        children: [
          {path: '', component: DevileryChallansComponent}
        ]
      },
      {
        path: 'purchaseOrders', component: PurchaseOrdersComponent,
        children: [
          { path: 'add', component: AddPurchaseOrderComponent },
          {path: '', component: PurchaseOrdersComponent},

        ]
      },
      {
        path: 'bills', component: BillsComponent,
        children: [
          {path: '', component: BillsComponent}
        ]
      },
      {
        path: 'integrations', component: IntegrationsComponent,
        children: [
          {path: '', component: IntegrationsComponent}
        ]
      },
      {
        path: 'reports', component: ReportsComponent,
        children: [
          {path: '', component: ReportsComponent}
        ]
      },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
