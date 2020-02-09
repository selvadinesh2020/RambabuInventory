import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppBootstrapModule } from './common/app-bootstrap.module';
import { AppComponent } from './common/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardModule } from './features/dashboard/dashboard/dashboard-module';
import { ContactModule } from './features/contact/contact-module';
import { ItemMOdule } from './features/item/item.module';
import { SalesOrderModule } from './features/sales-orders/salesOrder-module';
import { packagesModule } from './features/packages/packages-module';
import { invoicesModule } from './features/invoices/invoices-module';
import { DeliveryChallanModule } from './features/devilery-challans/deliveryChallan-module';
import { PurchaseOrderModule } from './features/purchase-orders/purchaseOrders-module';
import { BillsModule } from './features/bills/bills-module';
import { IntegrationsModule } from './features/integrations/integrations-module';
import { ReportsModule } from './features/reports/reports-module';
import { SharedModule } from './shared/shared.module';
import { GraphQLModule } from './graphql/graphql.module';
import { LoaderComponent } from './shared/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    ContactModule,
    ItemMOdule,
    SalesOrderModule,
    packagesModule,
    invoicesModule,
    DeliveryChallanModule,
    PurchaseOrderModule,
    BillsModule,
    IntegrationsModule,
    ReportsModule,
    GraphQLModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
