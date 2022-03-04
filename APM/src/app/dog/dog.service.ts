import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DogService {

    private dogUrl = 'https://dog.ceo/api/breeds/image/random'; // can be replaced with API get links
    
    constructor(private http: HttpClient) {} //Dependency injection shortcut/shorthand declaration

    getDogImage(): Observable<string> { // Similar to Task<> in .NET; Observable = Awaitable???
        return this.http.get<string>(this.dogUrl); // without error handling

        // return this.http.get<IProduct[]>(this.dogUrl).pipe( //Observable has a .pipe function which you can use to transform data, like how data are transformed in the Pipes topic
        //     tap(data => console.log('All', JSON.stringify(data))),
        //     catchError(this.handleError)
        // );
    }
}