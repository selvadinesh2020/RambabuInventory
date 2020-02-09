import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { packagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';



@NgModule({
     imports:[
        CommonModule,
        packagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[PackagesComponent]

})
export class packagesModule{

}