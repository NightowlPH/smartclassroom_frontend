import { Component, OnInit, DoCheck } from '@angular/core'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AdminRoomService } from './room.service';

@Component
({
	selector: 'room-cmp',
	templateUrl: 'room.component.html'
})

export class AdminRoomComponent
{

	rooms: object[]
	message: string

	modalForm: FormGroup	
	add: string
	update: string
	modalAnimation: string

	constructor( private roomService: AdminRoomService,private router: Router, 
		         private cookieService: CookieService, private formBuilder: FormBuilder){this.createForm()}


	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    			
		})    
	}

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

	getData()
	{
		this.update = ""
		this.add = "addRoom"    		
		this.modalAnimation = "fadeInDown"
		this.modalForm = this.formBuilder.group
		({
			name: ['',Validators.required],
			description: ['', Validators.required]
		})    	
	}

	addRoom()
	{
		if ( this.modalForm.status == "VALID")
		{								
			this.roomService.AddRoom(this.modalForm.value,"rooms").subscribe( response =>
			{	
				this.updateToken(response['token'])			
				this.message = ""
				this.ngOnInit()			
				if (response['message'] == "already exist")
				{
					this.message = "room already exist"
				}
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})				
		}	
	}

	deleteRoom(id: string)
	{
		this.roomService.DeleteRoom(id)
		.subscribe( room =>
		{
			this.updateToken(room['token'])
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	getUpdateData(id: string)
	{
		this.roomService.roomID = id
		this.add = ""    		
		this.modalAnimation = "fadeInDown"
		this.roomService.GetRoom("room").subscribe( data =>
		{
			this.updateToken(data['token'])
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	updateRoom()
	{    		
		if ( this.modalForm.status == "VALID")
		{
			this.roomService.UpdateRoom(this.modalForm.value,"room")
			.subscribe( data => 
			{
				this.updateToken(data['token'])
				if(data['message'])
				{
					this.message = data['message']
				}
				else
				{
					this.message = ""
					this.ngOnInit()
				}		
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
		}		
	}

	GroupAccess(id: string)
	{
		this.router.navigate(['/home/admin/roomAccess',id])
	}

	private mapData(data: object)
	{
		console.log("====>",data)
		this.modalForm = this.formBuilder.group
		({
			name: [data["name"],Validators.required],
			description: [data["description"], Validators.required]
		})
		this.update = "updateRoom"
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