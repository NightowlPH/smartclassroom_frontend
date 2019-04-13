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

	class = [["","","",""],["","","",""]]
	key: string = 'id'
	reverse: boolean = false
	totalUsr: number
	filter: string
	row = 10
	p = 1
	tempID

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
			this.totalUsr = this.rooms.length		
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

	change_view(view: string)
	{				
		if(view == 'room_list')
		{
			console.log(document.getElementById("room_list").style)
			document.getElementById("room_list").className = 'tab-panel active'
			document.getElementById("room_card").className = 'tab-panel'
			document.getElementById("room_list").style.display = 'block'
			document.getElementById("room_card").style.display = 'none'
			document.getElementById("room_list_tab").className = 'active'
			document.getElementById("room_card_tab").className = ''
		}
		if(view == 'room_card')
		{

			document.getElementById("room_list").className = 'tab-panel'
			document.getElementById("room_card").className = 'tab-panel active'
			document.getElementById("room_list").style.display = 'none'
			document.getElementById("room_card").style.display = 'block'
			document.getElementById("room_list_tab").className = ''
			document.getElementById("room_card_tab").className = 'active'
		}
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
