import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';

import { DevicesService } from './devices.service';
import { ErrorHandlerService } from '../../../error-handler.service';

@Component
({
	selector: 'devices-cmp',
	templateUrl: 'devices.component.html'
})

export class DevicesComponent
{
	devices: object[]
	message: string
	modalForm: FormGroup
	
	add: string
	update: string
	modalAnimation: string

	class = [["","",""],["","",""]]
	key: string = 'id'
	reverse: boolean = false
	row = 10
	totalUsr: number
	tempID
	filter: string

	constructor( private deviceService: DevicesService, private formBuilder: FormBuilder, 
		         private errorHandlerService: ErrorHandlerService ){ this.createForm() }

	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    			
		})    
	}

	ngOnInit()
	{
		this.deviceService
		.getAll()
		.subscribe(data => 
		{				
			this.devices = data['devices']
			this.totalUsr = this.devices.length
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			});
	}

	getData()
	{
		this.update = ""	    		  		
		this.add = "addDevice"
		this.modalAnimation = "flipInY" 
		this.modalForm = this.formBuilder.group
		({
			name: ['',Validators.required],
			description: ['', Validators.required]
		})    		   	
	}

	addDevice()
	{
		if ( this.modalForm.status == "VALID")
		{								
			this.deviceService.AddDevice(this.modalForm.value,"devices").subscribe( response =>
			{				
				this.message = ""
				this.ngOnInit()			
				if (response['message'] == "already exist")
				{
					this.message = "Device already exist"
				}
			},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})				
		}		
	}

	deleteDevice(id: any)
	{
				
		this.deviceService.deleteDevice(id).subscribe( Device => 
		{						
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	getUpdateData(id: string)
	{
		this.add = ""    
		this.deviceService.routeID = id		
		this.modalAnimation = "fadeInDown"    		
		this.deviceService.GetDevice("device").subscribe( data => 
		{				
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	updateDevice()
	{
		if (this.modalForm.status == "VALID")
		{
			this.deviceService.UpdateDevice(this.modalForm.value,"device")
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

	manageRow(length: number)
	{		
		this.row = length
		if(length == 200)
		{
			this.row = this.totalUsr
		}		
	}
	p: number = 1;


	private mapData(data: object)
	{		
		this.modalForm = this.formBuilder.group
		({
			name: [data["name"],Validators.required],
			description: [data["description"], Validators.required]
		})
		this.update = "updateDevice"	   
	}	
}