import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentheaderComponent } from './contentheader/contentheader.component';

// Modules
import { MatirialModule } from '../matirial/matirial.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentheaderComponent
  ],
  imports: [
    CommonModule,
    MatirialModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentheaderComponent
  ]
})

export class LayoutModule { }
