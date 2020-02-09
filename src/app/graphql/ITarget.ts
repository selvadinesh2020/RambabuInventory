export interface ITarget {

    getList(query: string): any;
    getById(query: string,Id: number):any; 
    post(mutationgql: any,postMessage: any): any;
    update(mutationgql: any,postMessage: any,id: any): any;

}