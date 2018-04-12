import { Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { RoomAccessService } from './room-access.service';


@Component
({
	selector: 'room-access-cmp',
	templateUrl: 'room-access.component.html'
})

export class RoomAccessComponent implements OnInit
{
	
	groupAccess: object[]
	unregistered_group: object[]
	permissions: object[]
	CB_Status = {}	
	addAccess = [[],[]]

	constructor(private roomAccessService: RoomAccessService,
		        private cookieService: CookieService, private route: ActivatedRoute, private router: Router ){}

	ngOnInit()
	{
		var id = this.route.snapshot.paramMap.get('id')
		this.roomAccessService.getGroupAccess(id)
		.subscribe( data =>
		{
			this.updateToken(data['token'])
			this.groupAccess = data['group']			
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	back()
	{		
		this.router.navigate(['home/rooms'])
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