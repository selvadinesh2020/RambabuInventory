import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ItemComponent } from './item.component';
import { ItemgroupsComponent } from './itemgroups/itemgroups.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemsComponent } from './items/items.component';
import { EditItemgroupsComponent } from './itemgroups/edit-itemgroups/edit-itemgroups.component';
import { AddItemgroupsComponent } from './itemgroups/add-itemgroups/add-itemgroups.component';
import { ItemgroupsDetailComponent } from './itemgroups/itemgroups-detail/itemgroups-detail.component';



@NgModule({
    imports: [
        CommonModule,
        ItemRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [],
    declarations: [
        ItemComponent,
        ItemgroupsComponent,
        CompositeItemsComponent,
        InventoryAdjustmentsComponent,
        ItemsComponent,
        EditItemgroupsComponent,
        AddItemgroupsComponent,
        ItemgroupsDetailComponent
    ]

})
export class ItemMOdule {}
