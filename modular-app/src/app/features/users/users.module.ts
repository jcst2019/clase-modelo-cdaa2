import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: UserListComponent }];

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    //UsersRoutingModule,
    RouterModule.forChild(routes), SharedModule
  ]
})
export class UsersModule { }
