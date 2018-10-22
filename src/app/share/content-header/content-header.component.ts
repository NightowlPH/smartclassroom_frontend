import { Component } from '@angular/core'
import { Router } from '@angular/router';

import { ContentHeaderService } from './content-header.service';
import { SessionService } from '../../session.service';

@Component
({
	selector: 'content-header-cmp',
	templateUrl: './content-header.component.html'
})

export class ContentHeaderComponent 
{
	constructor(private router: Router, private contentHeaderService: ContentHeaderService, private sessionService: SessionService) { }

	Logout() 
	{
		var data: object
		this.contentHeaderService.logout(data)
		.subscribe( () =>
		{
			this.sessionService.deleteToken()		
			this.router.navigate(['/login']);
		})
  	}
}
