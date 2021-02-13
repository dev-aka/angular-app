import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Compoenets
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomePostComponent } from './home-post/home-post.component';

// Modules
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../../UI/layout/layout.module';
import { MatirialModule } from '../matirial/matirial.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    HomePostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatirialModule
  ]
})

export class HomeModule { }
