import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { GraphqlService } from '../../../graphql/graphql.service';
import { contactQuery } from '../../../graphql/query/contact/contactgraphqlQuery';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private graphqlService: GraphqlService) { 
                    //validation contact list
                    this.validationForm();
  }
  contactForm: FormGroup;
  submitted = false;
  contanctModel: ContactModel = new ContactModel();

  ngOnInit() {


    this.graphqlService.getList(contactQuery.GET_ContactSalutation).subscribe(
      (repsonse) =>{
          console.log("GET_ContactEmployeeType"+repsonse);
      });


  }
  validationForm(): void {
    this.contactForm = this.fb.group({

      primaryContact: this.fb.group({
         salutionName: [this.contanctModel.salutation,Validators.required],
         firstName : [this.contanctModel.fistName,Validators.required,Validators.minLength(3)],
         lastName: [this.contanctModel.lastName,Validators.required,Validators.minLength(3)]
       }),
   
       companyName: [this.contanctModel.companyName,Validators.required],
       displayName: [this.contanctModel.displayName,Validators.required],
       contactEmail: [this.contanctModel.contactEmail,Validators.required],
   
       phoneGroup: this.fb.group({
         workPhone: [this.contanctModel.workPhone,Validators.required],
         mobile: [this.contanctModel.mobile,Validators.required]
       }),
   
       website:[this.contanctModel.website,Validators.required],
       contactType: [this.contanctModel.contactType,Validators.required],

       taxPayment: this.fb.group({
        GSTTreatment: [this.contanctModel.GSTTreatment,Validators.required],
        GSTIdentificationNumber: [this.contanctModel.GSTIdentificationNumber,Validators.required],
        placeofSupply: [this.contanctModel.placeofSupply,Validators.required],
        taxPreferences: [this.contanctModel.taxPreferences,Validators.required],
        currency: [this.contanctModel.currency,Validators.required],
        paymentTerms: [this.contanctModel.paymentTerms,Validators.required],
        facebook: [this.contanctModel.facebook,Validators.required],
        twitter: [this.contanctModel.twitter,Validators.required],
       }),

       address: this.fb.group({
        billingAttention: [this.contanctModel.billingAttention,Validators.required],
        shippingAttention: [this.contanctModel.shippingAttention,Validators.required],
        billingAddress: [this.contanctModel.billingAddress,Validators.required],
        shippingAddress: [this.contanctModel.shippingAddress,Validators.required],
        billingCity: [this.contanctModel.billingCity,Validators.required],
        shippingCity: [this.contanctModel.shippingCity,Validators.required],
        billingState: [this.contanctModel.billingState,Validators.required],
        shippingState: [this.contanctModel.shippingState,Validators.required],
        billingZipCode: [this.contanctModel.billingZipCode,Validators.required], 
        shippingZipCode: [this.contanctModel.shippingZipCode,Validators.required], 
        billingCountry: [this.contanctModel.billingCountry,Validators.required], 
        shippingCountry: [this.contanctModel.shippingCountry,Validators.required], 
        billingFax: [this.contanctModel.billingFax,Validators.required], 
        shippingFax: [this.contanctModel.shippingFax,Validators.required], 
        billingPhone: [this.contanctModel.billingPhone,Validators.required],
        shippingPhone: [this.contanctModel.billingPhone,Validators.required],
       })


     });
  }


  getErrorMessage(filedName: string){
    return "the "+ filedName+" filed required";
  }

  // tslint:disable-next-line:member-ordering
  salutations: Selection[] = [
    {value: 'mr', viewValue: 'Mr.'},
    {value: 'mrs', viewValue: 'Mrs.'},
    {value: 'ms', viewValue: 'Ms.'},
    {value: 'miss', viewValue: 'Miss.'},
    {value: 'dr', viewValue: 'Dr.'}
  ];

  currencies: Selection[] = [
    {value: 'INR', viewValue: 'INR- Indian Rupee'},
    {value: 'AUD', viewValue: 'AUD- Australian Dollar'},
    {value: 'CAD', viewValue: 'Canadian Dollar'},
    {value: 'CNY', viewValue: 'CNY- Yuan Renminbi'},
    {value: 'EUR', viewValue: 'EUR- Euro'},
    {value: 'GBP', viewValue: 'GBP- Pound Sterling'},
    {value: 'JPY', viewValue: 'JPY- Yen'}
  ];

  paymentTerms: Selection[] = [
    {value: 'dueOnReceipt', viewValue: 'Due On Receipt'},
    {value: 'dueEndofNextMonth', viewValue: 'Due end of next month'},
    {value: 'dueEndoftheMonth', viewValue: 'Due end of the month'},
    {value: 'net15', viewValue: 'Net 15'},
    {value: 'net30', viewValue: 'Net 30'},
    {value: 'net45', viewValue: 'Net 45'},
    {value: 'net60', viewValue: 'Net 60'}
  ];
    // tslint:disable-next-line:one-line
    addContact(): void{
      this.submitted= true;
      console.warn(this.contactForm.value);


        // this.service.post(query.Mutation.createFirm,this.firmForm.value).subscribe(({ data }) => {

        //     console.log(data);
    
        // }, (error) => {
          
        //   console.log('there was an error sending the query', error);
        // });
  
      if(this.contactForm.invalid)
      {
        return;
      }
  
      console.log('json for contact form:'+ JSON.stringify(this.contactForm.value));
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
