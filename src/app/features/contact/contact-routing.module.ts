import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: 'add2',
    component: ContactComponent,
   
  }
];

@NgModule({ 
  imports: [],
  exports: [RouterModule]
})

export class ContactRoutingModule{

}