import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProductListComponent }];

@NgModule({
  declarations: [
    // ProductsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    // ProductsRoutingModule
    RouterModule.forChild(routes), SharedModule
  ]
})
export class ProductsModule { }
