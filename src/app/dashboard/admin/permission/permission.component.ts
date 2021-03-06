import { Component, OnInit, DoCheck} from '@angular/core'
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }    from '@angular/router';

import { AdminPermissionService } from './permission.service';
import { ErrorHandlerService } from '../../../error-handler.service';
declare var $: any;

@Component
({
	selector: 'permission-cmp',
	templateUrl: 'permission.component.html'
})

export class AdminPermissionComponent
{
	permissions: object[]
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

	constructor( private permissionService: AdminPermissionService, private formBuilder: FormBuilder, 
		           private route: Router,  private errorHandlerService: ErrorHandlerService ){ this.createForm() }

	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    			
		})    
	}

	ngOnInit()
	{
		this.permissionService
		.getAll()
		.subscribe(data => 
		{
			this.permissions = data['permissions']
			this.totalUsr = this.permissions.length
		},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
			});
	}

	getData()
	{
		this.update = ""	    		  		
		this.add = "addPermission"
		this.modalAnimation = "flipInY" 
		this.modalForm = this.formBuilder.group
		({
			name: ['',Validators.required],
			description: ['', Validators.required]
		})    		   	
	}

	addPermission()
	{
		if ( this.modalForm.status == "VALID")
		{								
			this.permissionService.AddPermission(this.modalForm.value,"permissions").subscribe( response =>
			{
				this.message = ""
        $("#modal-permissions").modal('hide');
				this.ngOnInit()			
			},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
			})				
		}		
	}

	deletePermission(id: any)
	{
				
		this.permissionService.deletePermission(id).subscribe( permission => 
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
			})
	}

	getUpdateData(id: string)
	{
		this.add = ""    
		this.permissionService.routeID = id		
		this.modalAnimation = "fadeInDown"    		
		this.permissionService.GetPermission("permission").subscribe( data => 
		{
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
			})
	}

	updatePermission()
	{
		if (this.modalForm.status == "VALID")
		{
			this.permissionService.UpdatePermission(this.modalForm.value,"permission")
			.subscribe( data => 
    		{
          $("#modal-permissions").modal('hide');
					this.message = ""
					this.ngOnInit()
    		},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
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
		this.modalForm = this.formBuilder.group
		({
			name: [data["name"],Validators.required],
			description: [data["description"], Validators.required]
		})
		this.update = "updatePermission"	   
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
