import { Component, OnInit, DoCheck } from '@angular/core'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminRoomService } from './room.service';
import { ErrorHandlerService } from '../../../error-handler.service';

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

	filter: string
	row = 9
	p = 1

	constructor( private roomService: AdminRoomService,private router: Router, private errorHandlerService: ErrorHandlerService, 
		         private formBuilder: FormBuilder){this.createForm()}


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
			this.rooms  = data['rooms']			
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
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
				this.message = ""
				this.ngOnInit()			
				if (response['message'] == "already exist")
				{
					this.message = "room already exist"
				}
			},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})				
		}	
	}

	deleteRoom(id: string)
	{
		this.roomService.DeleteRoom(id)
		.subscribe( room =>
		{			
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	getUpdateData(id: string)
	{
		this.roomService.roomID = id
		this.add = ""    		
		this.modalAnimation = "fadeInDown"
		this.roomService.GetRoom("room").subscribe( data =>
		{			
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	updateRoom()
	{    		
		if ( this.modalForm.status == "VALID")
		{
			this.roomService.UpdateRoom(this.modalForm.value,"room")
			.subscribe( data => 
			{				
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
				this.errorHandlerService.handleError(error)
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
	
}