import { Product } from './../interfaces/product.interface';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductsService {

  products: Product[] = [];
  productsSubj = new Subject<Product[]>();

  constructor() {}

  getProductsObs() {
    return this.productsSubj.asObservable();
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubj.next(this.products);
  }

  getProducts() {
    return this.products.slice();
  }

  foundProductName(name, id) {
    return this.products.findIndex(prod => prod.Name === name && prod.Id !== id) > -1;
  }

  getProduct(id) {
    return this.products.find(prod => prod.Id === id);
  }

  removeProduct(id: string) {
    const prodIndex = this.products.findIndex(p => p.Id === id);
    if (prodIndex > -1) {
      this.products.splice(prodIndex, 1);
      this.productsSubj.next(this.products);
    }
  }

  editProduct(id: string, product: Product) {
    const prodIndex = this.products.findIndex(p => p.Id === id);
    if (prodIndex > -1) {
      this.products[prodIndex] = product;
      this.productsSubj.next(this.products);
    }
  }

}
