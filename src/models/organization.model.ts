import { basemodel } from "./base.model";

//Organization info
//Table:Organization
export class organization extends basemodel {
OrganizationId:number;
UserId:number;
OrganizationName:string;
PortalName:string;
BusinessLocation:string;
Language:string;
TimeZone:string;
InventoryStartDate:Date;
Currency:string;
FiscalYear:Date;
}