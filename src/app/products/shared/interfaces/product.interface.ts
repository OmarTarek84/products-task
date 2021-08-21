import { ProductType } from "../enums/product-type.enum";

export interface Product {
  Id: string;
  Name: string;
  Description: string;
  Amount: string;
  ProductType: ProductType;
}
