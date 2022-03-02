import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products', 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ] // dependency injection; so you can use ProductService class in this component
})
export class ProductListComponent implements OnInit, OnDestroy{ /* OnInit is a Lifecycle Hook */
  pageTitle: string = 'Product List';
  imageWidth: number = 60;
  imageMargin: number = 2;
  showImage : boolean = false;
  errorMessage: string = '';
  sub!: Subscription; // ! means we are guaranteeing Typescript that we'll assign a value to this variable later (Quick Fix of VS Code) 

  //listFilter : string = 'cart'; // We'll make this private & use getter/setter

  private _listFilter : string = '';
  
  private _productService;
  constructor(productService : ProductService) { // dependency injection; so you can use ProductService class in this component
    this._productService = productService;
  }

  /*
  constructor (private productService : ProductService) { } //Typescript's shorthand notation for dependency injection
  // see https://angular.io/guide/dependency-injection#injecting-services
  // doesn't have to be private, can be public or protetected too
  */

  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('_listFilter set to: ' + value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = []; //uses ProductService to get its values; depedency injection topic

  /* Pre-lesson/exercise 10
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    }
  ];
  */

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void { // Topic: Lifecycle hook
    //this._listFilter = ''; // not needed; setting initial value for _listFilter
    //this.products = this._productService.getProducts(); //dependency injection topic
    //this.filteredProducts = this.performFilter(this._listFilter);
    this.sub = this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    console.log('ProductListComponent Initialized');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy : string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product : IProduct) => { // Arrow function
        return product.productName.toLocaleLowerCase().includes(filterBy);
      }
    )
  }

  onRatingClicked(message: string) : void{ // Data came from StarComponent; Was passed using @Output() decorator and (event binding) in HTML file
    this.pageTitle = 'Product List: ' + message;
  }
}