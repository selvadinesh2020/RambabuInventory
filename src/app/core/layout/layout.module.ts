import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMainLayoutComponent } from './app-main-layout/app-main-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
 import { MaterialModule } from '../../material.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        MaterialModule
    ],
    exports: [
        AppMainLayoutComponent,
        
    ],
    declarations: [
        AppMainLayoutComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppSidenavComponent
    ]
})

export class LayoutModule{

}