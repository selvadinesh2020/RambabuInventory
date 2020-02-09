import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
    providedIn: 'root',
})
export class APIService {

        constructor(private http: HttpClient){

        }



        get(getURL): Observable<any>{
            return this.http.get<any>(getURL).pipe(
                tap(_ => console.log('fetch data')),
                catchError(this.handleError('getEmployee', []))

            )
        }

        post(postUrl,postjson): Observable<any>{
            return this.http.post<any>(postUrl,postjson,httpOptions).pipe(
                tap(_ =>console.log(JSON.stringify(postjson))),
                catchError(this.handleError('getEmployee', []))

            )
        }

    



   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
        
}