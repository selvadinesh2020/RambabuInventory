import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemgroupsComponent } from './itemgroups/itemgroups.component';
import { ItemComponent } from './item.component';

// export const routes: Routes = [
//   { path: 'item',
//   component:  ItemComponent,
//   children: [
//     {
//       path: 'itemGroups',
//       component: ItemgroupsComponent
//     },
//     {
//       path: 'itemGroups/edit',
//       component: EditItemsComponent
//     },
//     {
//       path: 'itemGroups/add',
//       component: AddItemsComponent
//     }
//   ]}
// ];



@NgModule({
    imports: [
      //  RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })

  export class ItemRoutingModule {

  }
