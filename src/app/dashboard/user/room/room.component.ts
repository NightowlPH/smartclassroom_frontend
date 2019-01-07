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

	class = [["","","",""],["","","",""]]
	key: string = 'id'
	reverse: boolean = false
	totalUsr: number
	filter: string
	row = 9
	p = 1
	tempID

	constructor( private roomService: RoomService,private router: Router, 
		         private errorHandlerService: ErrorHandlerService){}


	ngOnInit()
	{
		this.roomService.getRooms()
		.subscribe( data =>
		{			
			this.rooms  = data['rooms']	
			this.totalUsr = this.rooms.length		
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	

	GroupAccess(id: string)
	{
		this.router.navigate(['/home/roomAccess',id])
	}

	manageRow(length: number)
	{		
		this.row = length
		if(length == 200)
		{
			this.row = this.totalUsr
		}		
		this.selecTag()
	}

	sort(key, id: number)
	{				
		this.key = key;
		this.reverse = !this.reverse;
		if(this.class[0][id] == "" || this.class[0][id] == "-asc")
		{
			this.class[0][id] = "-desc"
		}
		else if(this.class[0][id] == "-desc")
		{
			this.class[0][id] = "-asc"
		}		
		this.class[1][this.tempID] = ""
		this.class[1][id] = "active"
		this.tempID = id		
	}

	selecTag()
	{
		var class_name = document.getElementById("selectList").className
		if(class_name == "dropdown-menu")
		{
			document.getElementById("selectList").className += " show"
		}
		if(class_name == "dropdown-menu show")
		{
			document.getElementById("selectList").className = "dropdown-menu"
		}
	}

}