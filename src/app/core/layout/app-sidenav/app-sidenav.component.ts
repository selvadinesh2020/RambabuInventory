import { Component, OnInit } from '@angular/core';
import { TreeControl, NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';
import { of } from 'rxjs';

// const GetLevel = (node: TestData) => node.level;
// const IsExpandable = (node: TestData) => node.children && node.children.length > 0;
const GetChildren = (node: TestData) => of(node.children);
// const TC = new FlatTreeControl(GetLevel, IsExpandable);
const TC = new NestedTreeControl(GetChildren);

@Component({
  selector: 'app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.css']
})
export class AppSidenavComponent implements OnInit {
  constructor() { }
  showFiller = true;

  link: string = 'item';

  // node tree
  tc = TC;
  data = [
    {
      name: 'Item',
      children: [
        { name: 'Item Groups', link: 'itemGroups' },
        { name: 'Items',link: 'items' },
        { name: 'Composite Items', link: 'compositeItems' },
        { name: 'Inventory Adjustments', link: 'invAdjustments' },
      ]
    }];

  ngOnInit() {
  }

  hasChild(_: number, node: TestData) {
    console.log(node);
    return node.children != null && node.children.length > 0;
  }

}

interface TestData {
  name: string;
  // level: number;
  children?: TestData[];
}
