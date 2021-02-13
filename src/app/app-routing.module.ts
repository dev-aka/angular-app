import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./UI/home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./UI/users/users.module').then(u => u.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
