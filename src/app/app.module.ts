import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Compoenets
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './UI/layout/layout.module';
import { MatirialModule } from './UI/matirial/matirial.module';

// Services
import { IHome } from './services/home/home.IService';
import { HomeService } from './services/home/home.service';
import { ICommon } from './services/common/common.IService';
import { CommonService } from './services/common/common.Service';
import { IUser } from './services/user/user.IService';
import { UserService } from './services/user/user.Service';

// Directive
import { MenuSelectedDirective } from './directives/menu-selected.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuSelectedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatirialModule
  ],
  providers: [{
    provide: IHome,
    useClass: HomeService
  },
  {
    provide: IUser,
    useClass: UserService
  },
  {
    provide: ICommon,
    useClass: CommonService
  }],
  exports: [MatirialModule, MenuSelectedDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
