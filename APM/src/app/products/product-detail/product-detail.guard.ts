import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const id = Number(route.paramMap.get('id'));

    // If invalid parameter, alert an error and redirect!
    if(isNaN(id) || id < 1) { 
      alert('Invalid product id!');
      alert('Use route guards to prevent users from navigating to parts of an application without authorization.');
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }
}
