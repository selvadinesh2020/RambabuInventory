import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { DevileryChallansComponent } from './devilery-challans.component';
import { DeliveryChallanRoutongChallans } from './deliveryChallan-routing.module';


@NgModule({
    imports:[
       CommonModule,
       DeliveryChallanRoutongChallans,
       FormsModule,
       ReactiveFormsModule,
       MaterialModule
    ],
    exports:[],
    declarations:[DevileryChallansComponent]

})

export class DeliveryChallanModule {


}