import { basemodel } from "./base.model";
//Customer or Vendor address info
//Table : address
export class address extends basemodel {
AddressId : number;
ContactId: number;
Attention:string;
Address:string;
City:string;
State:string;
ZipCode:string;
Country: string;
Fax:string;
Phone:string;
Type:string;
}