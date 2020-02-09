import { Component, OnInit } from '@angular/core';
// import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // MenuItems: MenuItem[];
    constructor() { }
    ngOnInit() {
        // this.MenuItems = [
        //     {
        //         label: 'Home',
        //         icon: 'fa fa-fw fa-home', routerLink: ['/']
        //     },
        //     {
        //         label: 'Weather',
        //         icon: 'fa fa-fw fa-sun-o', routerLink: ['/fetch-data']
        //     },
        //     {
        //         label: 'File Manager',
        //         icon: 'fa fa-fw fa-files-o', routerLink: ['/files']
        //     },
        //     {
        //         label: 'Counters', icon: 'fa fa-fw fa-sitemap',
        //         items: [
        //             {
        //                 label: 'Counter',
        //                 icon: 'fa fa-fw fa-list-ol', routerLink: ['/counter']
        //             },
        //             {
        //                 label: 'PrimeNG Counter',
        //                 icon: 'fa fa-fw fa-list-ol', routerLink: ['/prime']
        //             },
        //         ]
        //     }
        // ];
    }
}
