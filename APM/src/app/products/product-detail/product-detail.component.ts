import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'pm-product-detail', //only required if we will nest the component; so comment muna
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}
