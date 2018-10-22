import { Component, OnInit, DoCheck } from '@angular/core'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { RoomService } from './room.service';
import { ErrorHandlerService } from '../../../error-handler.service';

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
		         private errorHandlerService: ErrorHandlerService){}


	ngOnInit()
	{
		this.roomService.getRooms()
		.subscribe( data =>
		{			
			this.rooms  = data['rooms']			
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	

	GroupAccess(id: string)
	{
		this.router.navigate(['/home/roomAccess',id])
	}

}