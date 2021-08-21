import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button'
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';

const primeNGModules = [
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  RadioButtonModule,
  CardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...primeNGModules]
  ],
  exports: [...primeNGModules]
})
export class PrimeNGModule { }
