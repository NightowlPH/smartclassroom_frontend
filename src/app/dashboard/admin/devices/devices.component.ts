import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import * as $ from 'jquery'

declare var $: any;

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
	remote_design: object[]
	message: string
	modalForm: FormGroup
	
	add: string
	update: string
	modalAnimation: string

	class = [["","","",""],["","","",""]]
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
			name: ['',Validators.required],
			description: ['', Validators.required]		
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
			$(document).ready(function(){
				$('.chosen-select-ws').chosen({width: "80%"})		
			})
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			});

		this.deviceService.getRemoteDesign()
		.subscribe( data =>
		{
			this.remote_design = data['remote_design']
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
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
		this.initializeSelect('destroy')
		this.initializeSelect({width: '80%'})  		   	
	}

	addDevice()
	{
		if ( this.modalForm.status == "VALID")
		{			
			var data = this.modalForm.value
			data['remote_design_id'] = document.getElementById('remote_design')['value']					
			this.deviceService.AddDevice(data,"devices").subscribe( response =>
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
			console.log(document.getElementById('remote_design'))
			var data = this.modalForm.value
			data['remote_design_id'] = document.getElementById('remote_design')['value']
			console.log(data)
			this.deviceService.UpdateDevice(data,"device")
			.subscribe( data => 
    		{    			    			
    			if(data == null)
    			{    				
					this.message = ""
					this.ngOnInit()
    			}
    			if(data['message'])
				{
					console.log("yes")
					this.message = data['message']
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
		this.selecTag()
	}
	p: number = 1;


	private mapData(data: object)
	{				
		this.set_select(data['remote_design_id'],data['remote_design'])
		this.modalForm = this.formBuilder.group
		({
			name: [data["name"],Validators.required],
			description: [data["description"], Validators.required]
		})
		this.update = "updateDevice"	   
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

	initializeSelect(parameter: any)
	{    
		$(document).ready(function(){
			$('.chosen-select-ws').chosen(parameter);
		});  
	}

	set_select(id:string, name: string)
	{			
		document.getElementById("remote_design")['value'] = id		
		document.getElementsByName("chosen")[0]['textContent'] = name
	}
}