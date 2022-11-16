import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { FavorisComponent } from './favoris/favoris.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    OrderHistoryComponent,
    OrderInfoComponent,
    FavorisComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDashboardModule { }
