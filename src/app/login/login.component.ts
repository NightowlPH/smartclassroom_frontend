import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { LoginService } from "./login.service";
import { SessionService } from '../session.service';

@Component
({
	selector: 'login-cmp',
	templateUrl: './login.component.html'
})

export class LoginComponent
{	
	userAccount: object;	
	message: string;	

 	constructor
 	 	(
 	 		private location:Location,
 	 		private router: Router,
 	 		private loginService:LoginService,
 	 		private cookieService:CookieService,
 	 		private sessionService: SessionService
 	 	) {} 	


 	 ngOnInit()
 	 {
 	 	console.log("PASS",this.cookieService.get('token'),"fsadf")
 	 	if(this.cookieService.get('token'))
 	 	{
 	 		console.log("THERE IS TOKEN")
 	 		var data: object
 	 		this.loginService.login_with_token(data)
 	 		.subscribe( data =>
 	 		{ 	 			
 	 			if(data['token'] && data['userType'])
				{										
					if(data['userType'] == "Admin")
					{
						let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home/admin/users';						
						this.sessionService.updateToken(data['token'])			
						this.router.navigate([redirect]);
					}
					else if(data['userType'] == "User")
					{
						let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home/users';
						this.sessionService.updateToken(data['token'])					
						this.router.navigate([redirect]);
					}														
				}
				else
				{					
					this.cookieService.deleteAll()
				}

 	 		})
 	 	} 
 	 }


	submitAccount(input: NgForm)
	{
		if(input.value.username == '' && input.value.password == '')
		{
			this.message = "Please fill up all the required details"
		}
		else
		{
			this.userAccount = { username: input.value.username, password: input.value.password };
			this.loginService.login(this.userAccount)
			.subscribe(data => 
			{						
				if(data['token'] && data['userType'])
				{
					if(data['userType'] == "Admin")
					{
						let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home/admin/users';
						this.sessionService.updateToken(data['token'])				
						this.router.navigate([redirect]);
					}
					else if(data['userType'] == "User")
					{
						let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home/users';
						this.sessionService.updateToken(data['token'])					
						this.router.navigate([redirect]);
					}					
				}			
				else
				{					
					this.message = "Invalid username or password"
				}
			},
			(error: HttpErrorResponse) =>
			{
				if(error.error && error.status == 401)
				{
					this.message = "Invalid username or password"
				}
				else if( error.status == 500)
				{
					console.log("Internal server error")
				}
			})
		}
	}

	register()
	{
		this.router.navigate(['/register'])
	}
}
