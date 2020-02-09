import {Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';


export class BaseService{

constructor() {}


    public getQuery(apollo: Apollo,getQuery: string): Observable<any>{   

      return apollo.watchQuery<any>({
            query:getQuery
        }).valueChanges;    
    };

    public getQueryById(apollo : Apollo,getQuery: string, Id: number): Observable<any>{

        return apollo.watchQuery<any>({
            query: getQuery,
            variables:{
                id: Id
            }
        }).valueChanges;
    };

    public postMutation(apollo: Apollo,mutationgql: any,postMessage: any):any {
console.log(mutationgql);   
        var input = postMessage;
        return apollo.mutate({
            mutation: mutationgql,
            variables:{
                input:input
            }
        });
    }

    public updateMutation(apollo: Apollo,mutationgql: any,updateMessage: any,Id: any):any {
        
        var input = updateMessage;
        return apollo.mutate({
            mutation: mutationgql,
            variables:{
                id: Id,
                input:input
            }
        });
    }

    public deleteMutation(apollo: Apollo,mutationgql: any,deleteMessage: any,Id: any):any {
        var input = deleteMessage;
        return apollo.mutate({
            mutation: mutationgql,
            variables:{
                id: Id,
                input:input
            }
        });
    }
}

  


