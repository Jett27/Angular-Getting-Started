import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand' >
      <img src="assets/images/logo.jpg"  height="35" >
      {{pageTitle}}
    </a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']"  >Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']" >Product List</a></li>
      <!-- 
        Short-hand syntax for routerLink. You can use this if the array contains no additional elements/parameters
        <li><a class='nav-link'   routerLink='/welcome'  >Home</a></li>
        <li><a class='nav-link'   routerLink='/products' >Product List</a></li>
      -->
    </ul>
  </nav>

  <div class='container-fluid'>
    <router-outlet></router-outlet> <!-- THIS IS WHERE THE ROUTED COMPONENTS WILL BE DISPLAYED -->
  </div>
  `,

  // OLDtemplate: `
  //   <div><h1>{{pageTitle}}</h1>
  //       <pm-products></pm-products>
  //   </div>
  //   `
})
export class AppComponent implements OnInit { /* OnInit is a Lifecycle Hook */
  pageTitle: string = 'Product Management';

  ngOnInit(): void {
    console.log('AppComponent Initaliazed');
  }
}
