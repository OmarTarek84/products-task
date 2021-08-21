import { ProductsService } from './../../shared/services/products.service';
import { Product } from './../../shared/interfaces/product.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSub = this.productsService
      .getProductsObs()
      .subscribe((prods: Product[]) => {
        this.products = prods;
        console.log(this.products);

      });
  }

  goToNewProduct() {
    this.router.navigate(['/products/new'], {
      relativeTo: this.route,
      queryParams: {
        mode: 'create',
      },
      queryParamsHandling: 'merge',
    });
  }

  editProduct(id: string) {
    this.router.navigate(['/products/new'], {
      relativeTo: this.route,
      queryParams: {
        mode: 'edit',
        id: id
      },
      queryParamsHandling: 'merge',
    });
  }

  deleteProduct(id: string) {
    this.productsService.removeProduct(id);
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
