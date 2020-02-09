import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';



@NgModule({
     imports:[
        CommonModule,
        BillsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[BillsComponent]

})
export class BillsModule{

}