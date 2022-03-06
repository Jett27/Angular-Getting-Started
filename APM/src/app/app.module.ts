import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    // ProductListComponent, -- Moved to Product Module
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // For RxJS (Reactive Programming)/Observables (kinda like Awaitable/Tasks)
    RouterModule.forRoot([
      // { path: 'products', component: ProductListComponent },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent,
      //   canActivate: [ProductDetailGuard] //Angular concept of "Route guards"; To check url parameters, limit people who access a page, etc.
      // },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // When application loads, we want to default to welcome component
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Wildcard path, when url does not match any prior paths, you can redirect to 404 page but here we can redirect to welcome page
    ]), 
    ProductModule
    // FormsModule, -- Moved to Product Module
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

/*
1-1 An angular component can only be connected to one module BUT a module can have multiple angular components.

If you want the module to use component you declare it in the module BUT if the component is already connected to a module you can import that module instead. Kinda like the BrowserModule.
*/

