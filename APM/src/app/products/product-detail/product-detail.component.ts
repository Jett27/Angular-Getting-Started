import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogService } from 'src/app/dog/dog.service';
import { IProduct } from '../product';

@Component({
  //selector: 'pm-product-detail', //only required if we will nest the component; so comment muna
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ DogService ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string | null = 'Product Detail'; // String or null data type; Nullable string
  id: Number = 0; 
  product: IProduct | undefined;


  dogJSON!: string;   // ! means we are guaranteeing Typescript that we'll assign a value to this variable later (Quick Fix of VS Code) 
  dogURL!: string;
  sub!: Subscription; // ! means we are guaranteeing Typescript that we'll assign a value to this variable later (Quick Fix of VS Code) 

  constructor(private route : ActivatedRoute, private dogService : DogService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.dogService.getDogImage().subscribe({
      next: dogImageJSON => {
        this.updateDogVariables(JSON.stringify(dogImageJSON));
      }
    });

    this.id = Number(this.route.snapshot.paramMap.get('id')); // Get value from parameter 'id' at that certain point; If params change you need the subscribe method of doing this
    this.pageTitle += ': ' + this.id;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  updateDogVariables(val: string): void{
    this.dogJSON = val;
    this.dogURL = JSON.parse(this.dogJSON)['message'];
    console.log('DOG URL: ' + this.dogURL);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/products']); 
    //this.router.navigate(['/products', 67]); // Can you pass variables here?? yes!
  }
}
