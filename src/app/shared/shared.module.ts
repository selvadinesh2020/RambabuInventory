import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './APIServices';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';

import { LoaderService } from './loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader/loader.interceptor';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MatProgressSpinnerModule
      ],
    exports:[],
    declarations: [
        
    ],  
    providers: [LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ]
})
export class SharedModule{

}