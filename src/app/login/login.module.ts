import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';


@NgModule
({
	imports: 
	[
		FormsModule,
		HttpClientModule,
		RouterModule.forChild
		([
			{path: 'login', component: LoginComponent },
			{ path: '', redirectTo: 'login', pathMatch: 'full'}
		])
	],
	declarations: [LoginComponent],
	exports: [LoginComponent],
	providers: [LoginService, CookieService]
})

export class LoginModule{}
