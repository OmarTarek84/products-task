import { Product } from './../../shared/interfaces/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() editProductOutput = new EventEmitter<any>();
  @Output() deleteProductOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  editProduct() {
    this.editProductOutput.emit();
  }

  deleteProduct() {
    this.deleteProductOutput.emit();
  }

}
