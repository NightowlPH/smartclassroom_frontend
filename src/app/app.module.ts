import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { InternalServerErrorModule } from './internalServerError/internal-serverError.module';
import { PageNotFoundModule } from './PageNotFound/page-not-found.module';


import { TokenRegistrationService } from './tokenRegistration.service';

@NgModule({
  imports: 
  [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    InternalServerErrorModule,
    RegisterModule,
    PageNotFoundModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenRegistrationService, multi: true}
  ],
  declarations: 
  [
    AppComponent,  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
