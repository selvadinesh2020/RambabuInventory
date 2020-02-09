import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [ContactComponent, ContactListComponent,
        ContactDetailComponent, AddContactComponent]
})
export class ContactModule {
}
