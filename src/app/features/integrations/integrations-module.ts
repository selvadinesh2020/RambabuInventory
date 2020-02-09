import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { IntegrationssRoutingModule } from './integrations-routing.module';
import { IntegrationsComponent } from './integrations.component';



@NgModule({
     imports:[
        CommonModule,
        IntegrationssRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
     ],
     exports:[],
     declarations:[IntegrationsComponent]

})
export class IntegrationsModule{

}