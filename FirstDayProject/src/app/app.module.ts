import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './shared/userdata.service';
import { DepartmentService } from './shared/departmentdata.service';
import { FormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component'

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeaderComponent,
    FooterComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
