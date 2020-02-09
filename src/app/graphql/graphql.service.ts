import { Injectable } from '@angular/core';
import { BaseService } from '../graphql/baseService';
import { ITarget } from './ITarget';
import {Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraphqlService implements ITarget{
  private _service: BaseService

  constructor(service: BaseService,private apollo: Apollo) {
              this._service = service;      
  }

  public getList(getQuery: string): Observable<any>{
    return this._service.getQuery(this.apollo,getQuery);
  }

  public getById(getQuery: string,Id: number): Observable<any>{
    return this._service.getQueryById(this.apollo,getQuery,Id);
  }

  public post(mutationgql: any,postMessage: any): any{
    return this._service.postMutation(this.apollo,mutationgql,postMessage);
  }

  public update(Id: any,mutationgql: any,updateMessage: any): any{
    return this._service.updateMutation(this.apollo,mutationgql,updateMessage,Id);
  }

  public delete(Id: any,mutationgql: any,deleteMessage: any): any{
    return this._service.deleteMutation(this.apollo,mutationgql,deleteMessage,Id);
  }

}

