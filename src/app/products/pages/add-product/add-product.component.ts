import { Product } from './../../shared/interfaces/product.interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  mode: string = 'create';
  product: Product;

  uniqueNameErr = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.mode = paramMap.get('mode');
      const prodId = paramMap.get('id');
      this.product = this.productService.getProduct(prodId);
      if (!this.product) {
        this.mode = 'create';
      }
      this.initForm();
    })
  }

  initForm() {

    let prodName = this.mode === 'edit' ? this.product.Name: '';
    let amount = this.mode === 'edit' ? this.product.Amount: '';
    let desc = this.mode === 'edit' ? this.product.Description: '';
    let prodType = this.mode === 'edit' ? this.product.ProductType: 'Basic';

    this.addProductForm = this.fb.group({
      Name: [prodName, [Validators.required]],
      Amount: [amount, [Validators.required]],
      Description: [desc, [Validators.required, Validators.minLength(10)]],
      ProductType: [prodType, [Validators.required]],
    });
  }

  addProduct() {
    this.uniqueNameErr = false;
    if (this.productService.foundProductName(this.addProductForm.value.Name, this.mode === 'create' ? '': this.product.Id)) {
      this.uniqueNameErr = true;
      return;
    }
    if (this.mode === 'create') {
      this.productService.addProduct({
        ...this.addProductForm.value,
        Id: new Date().toISOString(),
      });
    } else {
      this.productService.editProduct(this.product.Id, {
        ...this.addProductForm.value,
        Id: this.product.Id,
      });
    }
    this.router.navigate(['/products']);
  }
}
