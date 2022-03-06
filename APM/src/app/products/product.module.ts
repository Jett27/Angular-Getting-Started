import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StarComponent - moved to Shared Module
  ],
  imports: [
    // CommonModule, - moved to Shared Module
    // FormsModule, - moved to Shared Module
    RouterModule.forChild([ //USE forChild if you're doing routing not for the main app.module; Di na kasi sya main aka "root", child na sya
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard] //Angular concept of "Route guards"; To check url parameters, limit people who access a page, etc.
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
