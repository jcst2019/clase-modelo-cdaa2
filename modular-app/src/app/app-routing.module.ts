import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) }, 
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
