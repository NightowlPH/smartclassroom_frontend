import { Component, OnInit} from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { GroupService } from './group.service';

@Component
({
	selector: 'group-cmp',
	templateUrl: 'group.component.html'
})

export class GroupComponent
{
	groups: object[]
	message: string
		
	modalAnimation: string

	constructor( private groupService: GroupService, private router: Router, 
				 private cookieService: CookieService){}
	

	ngOnInit()
	{
		this.groupService.getGroups()
		.subscribe( data => 
		{
			this.updateToken(data['token'])
			this.groups  = data['groups']
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	

	showMember(id: string)
	{
		this.router.navigate(['/home/groupMember',id])
	}
	
	handleError(error: object)
	{				
		if(error['error'].message == "your token has been expired" && error['status'] == 500)
		{			
			this.router.navigate(['/login'])		
		}
		else if(error['status'] == 500 && error['error'].message == "Internal Server Error")
		{
			this.router.navigate(['/InternalServerError'])
		}
		else if(error['status'] == 404)
		{
			this.router.navigate(['/PageNotFound'])
		}
	}

	updateToken(token: string)
	{
		this.cookieService.delete("token")
		this.cookieService.set('token', token)
	}

}