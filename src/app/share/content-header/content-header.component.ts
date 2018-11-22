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

  	manage_sidebar()
  	{
  		var body_class_name = document.getElementById("index-body").className
  		console.log("<<",body_class_name,">>")
  		if(body_class_name.indexOf("mini-navbar") == -1)
  		{
  			document.getElementById("index-body").className = "mini-navbar body-small"
  		}  		
  		if(body_class_name.indexOf("mini-navbar") == 0)
  		{
  			console.log("YES")
  			document.getElementById("index-body").className = "body-small"
  		}
  	}
}
