import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class SessionService
{
	constructor(private cookieService: CookieService){}

	updateToken(token: string)
	{		
		this.cookieService.deleteAll()
		this.cookieService.delete('token')
		this.cookieService.deleteAll('/')
		this.cookieService.deleteAll('/home')
		this.cookieService.deleteAll('/home/admin')	
		this.cookieService.set('token', token)
	}

	deleteToken()
	{
		this.cookieService.deleteAll()
		this.cookieService.delete('token')
		this.cookieService.deleteAll('/')
		this.cookieService.deleteAll('/home')
		this.cookieService.deleteAll('/home/admin')	
	}
}