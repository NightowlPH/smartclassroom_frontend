import { Component, OnInit, DoCheck } from '@angular/core'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { RoomService } from './room.service';

@Component
({
	selector: 'room-cmp',
	templateUrl: 'room.component.html'
})

export class RoomComponent
{

	rooms: object[]
	message: string

	modalAnimation: string

	constructor( private roomService: RoomService,private router: Router, 
		         private cookieService: CookieService){}


	ngOnInit()
	{
		this.roomService.getRooms()
		.subscribe( data =>
		{
			this.updateToken(data['token'])
			this.rooms  = data['rooms']
			console.log(this.rooms)
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	

	GroupAccess(id: string)
	{
		this.router.navigate(['/home/roomAccess',id])
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