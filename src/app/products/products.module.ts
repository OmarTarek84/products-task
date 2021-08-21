import { RouterModule } from '@angular/router';
import { productRoutes } from './products.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PrimeNGModule } from '../primeNG.module';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
