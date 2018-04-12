import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ContentHeaderService } from './content-header.service';

@Component
({
	selector: 'content-header-cmp',
	templateUrl: './content-header.component.html'
})

export class ContentHeaderComponent 
{
	constructor(private router: Router, private contentHeaderService: ContentHeaderService, private cookieService: CookieService) { }

	Logout() 
	{
		var data: object
		this.contentHeaderService.logout(data)
		.subscribe( () =>
		{
			this.cookieService.deleteAll()
			this.cookieService.delete('token')
			this.cookieService.deleteAll('/')
			this.cookieService.deleteAll('/home/')
			this.cookieService.deleteAll('/home/admin')			
			this.router.navigate(['/login']);
		})
  	}
}
