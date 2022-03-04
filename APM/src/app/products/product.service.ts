import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products/products.json'; // can be replaced with API get links
  constructor(private http: HttpClient) { } //Dependency injection shortcut/shorthand declaration

  getProducts(): Observable<IProduct[]> { // Similar to Task<> in .NET; Observable = Awaitable???
    //return this.http.get<IProduct[]>(this.productUrl); // without error handling

    return this.http.get<IProduct[]>(this.productUrl).pipe( //Observable has a .pipe function which you can use to transform data, like how data are transformed in the Pipes topic
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}