import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PortableComponent } from './portable/portable.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {TokenInterceptor} from "./token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PortableComponent,
    HeaderComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule

    ],
  providers: [TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
