import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {
  addPurchaseOrderForm:FormGroup;
  purchaseOrderModel: PurchaseOrderModel = new PurchaseOrderModel();
  constructor(private fb:FormBuilder) {
    this.validationForm();

   }
  options: string[] = ['One', 'Two', 'Three'];
  vendorList: Observable<string[]>;


  ngOnInit() {
    this.vendorList = this.addPurchaseOrderForm.get("Vendorddl").valueChanges
  .pipe(startWith(''),map(value => this._filter(value)));
  
 }
 validationForm(): void {
  this.addPurchaseOrderForm=this.fb.group({
    // vendor:[''],
    DeliveryTo:["Organization",Validators.required],
    PurchaseOrder:[this.purchaseOrderModel.PurchaseOrder,Validators.required],
    Reference:[this.purchaseOrderModel.Reference,Validators.required],
    FromTransactionDate:[this.purchaseOrderModel.FromTransactionDate,Validators.required],
    ToTransactionDate:[this.purchaseOrderModel.ToTransactionDate,Validators.required],
    // ExpectedDeliveryDate:[''],
    ShipmentPreference:[this.purchaseOrderModel.ShipmentPreference,Validators.required],
    // Discount:[''],
    // Adjustment:[''],
    // UploadFile:[''],
    // Notes:[''],
    // TermsAndConditions:[''],
    Vendorddl:[this.purchaseOrderModel.Vendorddl,Validators.required]
  });
}

 private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
purchaseOrderSubmit(): void{
}
getErrorMessage(filedName: string){
  return filedName+" filed required";
}
}
export class PurchaseOrderModel{
  public DeliveryTo:string;
  public Vendorddl:string;
  public PurchaseOrder:string;
  public Reference:string;
  public FromTransactionDate:Date;
  public ToTransactionDate:Date;
  public ShipmentPreference:string;
}
