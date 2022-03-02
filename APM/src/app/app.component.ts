import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
  </div>
  `
})
export class AppComponent implements OnInit { /* OnInit is a Lifecycle Hook */
  pageTitle: string = 'Acme Product Management';

  ngOnInit(): void {
    console.log('AppComponent Initaliazed');
  }
}
