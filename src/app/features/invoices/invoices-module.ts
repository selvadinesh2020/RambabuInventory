import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { invoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';



@NgModule({
     imports:[
        CommonModule,
        invoicesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[InvoicesComponent]

})
export class invoicesModule{

}