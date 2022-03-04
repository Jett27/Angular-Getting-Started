import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // For RxJS (Reactive Programming)/Observables (kinda like Awaitable/Tasks)
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // When application loads, we want to default to welcome component
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Wildcard path, when url does not match any prior paths, you can redirect to 404 page but here we can redirect to welcome page
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
1-1 An angular component can only be connected to one module BUT a module can have multiple angular components.

If you want the module to use component you declare it in the module BUT if the component is already connected to a module you can import that module instead. Kinda like the BrowserModule.
*/

