import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ContactDetailComponent } from './features/contact/contact-detail/contact-detail.component'; 
  import { DashboardModule } from './features/dashboard/dashboard/dashboard-module';
import { LayoutModule } from './core/layout/layout.module';
// import { ErrorComponent} from './error.component'

const appRoutes: Routes = [
  {path: "", redirectTo: '/dashboard',pathMatch: 'full' },

  // { path: '', redirectTo: '/contactlist', pathMatch: 'full' },
  // { path: 'contactlist', component: ContactListComponent, children:
  //   [
  //    { path: 'contactdetail/:id', component: ContactDetailComponent }
  //  // { path: ':id', component: ContactDetailComponent }
  // ] },
  // { path: 'contactlist/contact', component: ContactComponent },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    DashboardModule,LayoutModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
