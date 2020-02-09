import { basemodel } from "./base.model";

//Customer or Vendor info 
//Table : Contact
export class contact extends basemodel{
    ContactId:number;
    OrgainzationId?:number;
    CompanyName:string;
    FirstName:string;
    LastName:string;
    ContactDisplayName:string;
    Designation:string;
    Department:string;
    ContactEmail:string;
    ContactPhone:string;
    SkypeNameOrNumber:string;
    Website:string;
    ContactType:string;
    }