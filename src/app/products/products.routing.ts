import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'new', component: AddProductComponent}
]
