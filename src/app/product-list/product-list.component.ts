import { Component } from '@angular/core';

import { products } from '../products';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private route: ActivatedRoute) { }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('Sarai avvisato quando il prodotto sarà in vendita');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/