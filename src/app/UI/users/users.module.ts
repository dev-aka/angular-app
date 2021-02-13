import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Compoenets
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTableComponent } from './user-table/user-table.component';


// Modules
import { LayoutModule } from '../../UI/layout/layout.module';
import { UserRoutingModule } from './users-routing.module';
import { MatirialModule } from '../matirial/matirial.module';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    MatirialModule,
    DataTablesModule
  ]
})
export class UsersModule { }
