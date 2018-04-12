import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { InternalServerErrorModule } from './internalServerError/internal-serverError.module';
import { PageNotFoundModule } from './PageNotFound/page-not-found.module';


@NgModule({
  imports: 
  [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    InternalServerErrorModule,
    RegisterModule,
    PageNotFoundModule,
    AppRoutingModule,

  ],
  declarations: 
  [
    AppComponent,  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
