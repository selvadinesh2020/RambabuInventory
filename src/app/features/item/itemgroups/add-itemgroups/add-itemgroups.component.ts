import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-itemgroups',
  templateUrl: './add-itemgroups.component.html',
  styleUrls: ['./add-itemgroups.component.css']
})
export class AddItemgroupsComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.validationForm();
  }
  contanctModel: ContactModel = new ContactModel();
  contactForm: FormGroup;
  submitted = false;
  salutations: Selection[] = [
    {value : 'mr', viewValue: 'Mr.'},
    {value : 'mrs', viewValue: 'Mrs.'},
    {value : 'ms', viewValue: 'Ms.'},
    {value : 'miss', viewValue: 'Miss.'},
    {value : 'dr', viewValue: 'Dr.'}
  ];
  ngOnInit() {
  }
  validationForm(): void {
  this.contactForm = this.fb.group({
  primaryContact: this.fb.group({
    salutionName: [this.contanctModel.salutation,Validators.required],
    firstName : [this.contanctModel.fistName,Validators.required,Validators.minLength(3)],
    lastName: [this.contanctModel.lastName,Validators.required,Validators.minLength(3)]
  })
});
  }
  contactSubmit(): void{
    this.submitted = true;
    console.warn(this.contactForm.value);

    if(this.contactForm.invalid)
    {
      return;
    }

    console.log('json for contact form:'+ JSON.stringify(this.contactForm.value));
  }
  getErrorMessage(filedName: string){
    return 'the ' + filedName + ' filed required';
  }
}

export class ContactModel{
  salutation: string;
  fistName: string;
  lastName: string;
  companyName: string;
  displayName: string;
  contactEmail: string;
  workPhone: number;
  mobile: number;
  website: string;
  contactType: string;
  facebook: string;
  twitter: string;
  GSTTreatment: string;
  GSTIdentificationNumber: string;
  placeofSupply: string;
  taxPreferences: string;
  currency: string;
  paymentTerms: string;
  attention: string;
  billingAttention: string;
  shippingAttention: string;
  billingAddress: string;
  shippingAddress: string;
  billingCity: string;
  shippingCity: string;
  billingState: string;
  shippingState: string;
  billingZipCode: string;
  shippingZipCode: string;
  billingCountry: string;
  shippingCountry: string;
  billingFax: string;
  shippingFax: string;
  billingPhone: string;
  shippingPhone: string;
}
export interface Selection {
  value: string;
  viewValue: string;
}
