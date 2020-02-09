import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { APIService } from '../../shared/APIServices';

interface ICurrency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  //decleration
  currency = [];
  selectedCurrency: ICurrency;
 
  employeelist: any[] = [];
  errorMessage: any;
  employee: any;

  readonly _employeeUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  public  _postUrl = "http://dummy.restapiexample.com/create";

  ngOnInit() {
    // this.getEmployeeDetails();

   this.postEmployeeDetails();
  }
    constructor(private fb: FormBuilder,public httpService:APIService) {


        // SelectItem API with label-value pairs
        this.currency = [
            {label: 'Select Currency', value: null},
            {label: 'US Dollar', value: { id: 1, name: 'USD', code: 'USD'}},
            {label: 'AED', value: {id: 2, name: 'AED', code: 'USD'}}
        ];


    }

    getEmployeeDetails() : void{
      this.httpService.get(this._employeeUrl).subscribe(
        emp => {
            this.employeelist = emp;
             console.log(emp)
        },
        error => this.errorMessage = <any>error
 
      );   
   }

   postEmployeeDetails() : void{
    this.httpService.post("http://dummy.restapiexample.com/create",'{"name":"test","salary":"123","age":"23"}').subscribe(
      emp => {
          this.employeelist = emp;
           console.log(emp)
      },
      error => this.errorMessage = <any>error

    );   
 }




}




