import { Component, OnInit} from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminGroupService } from './group.service';

@Component
({
	selector: 'group-cmp',
	templateUrl: 'group.component.html'
})

export class AdminGroupComponent
{
	groups: object[]
	permissions: object[]
	message: string
	choosenPermission: object
	permission: string	

	modalForm: FormGroup	
	add: string
	update: string
	modalAnimation:string

	constructor( private groupService: AdminGroupService, private router: Router, 
		     private formBuilder: FormBuilder){ this.createForm()}

	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    			
		})    
	}

	ngOnInit()
	{			
		this.groupService.getGroups()
		.subscribe( data => 
		{
			this.groups  = data['groups']
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	getUpdateData(id: string)
	{
		this.add = ""    
		this.groupService.routeID = id		
		this.modalAnimation = "fadeInDown"

		this.groupService.GetPermissions()
		.subscribe( data =>
		{			
			this.permissions = data['permissions']
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			}) 
		this.groupService.GetGroup("group").subscribe( data =>
		{
			this.permission = data['data'].permission_name
			this.choosenPermission = {permission_id: data['data'].permission_id}
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})		
	}

	updateGroup()
	{    		
		if ( this.modalForm.status == "VALID")
		{
			var data: object
			data = Object.assign(this.modalForm.value,this.choosenPermission)
			this.groupService.UpdateGroup(data,"group")
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
				this.handleError(error)
			})
		}		
	}

	deleteGroup(id: string)
	{
		this.groupService.DeleteGroup(id)
		.subscribe( group =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	getData()
	{
		this.permission = "Permission"
		this.update = ""
		this.add = "addGroup"    		
		this.modalAnimation = "fadeInDown"
		this.modalForm = this.formBuilder.group
		({
			name: ['',Validators.required],
			description: ['', Validators.required]
		}) 
		this.groupService.GetPermissions()
		.subscribe( data =>
		{			
			this.permissions = data['permissions']
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})   		   	
	}

	addGroup()
	{
		if ( this.modalForm.status == "VALID" && this.permission != "Permission")
		{						
			var data: object
			data = Object.assign(this.modalForm.value,this.choosenPermission)
			this.groupService.AddGroup(data,"groups").subscribe( response =>
			{
				this.message = ""
				this.ngOnInit()			
				if (response['message'] == "already exist")
				{
					this.message = "group already exist"
				}
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})			
		}
		else if(this.permission == "Permission")
		{
			this.message = "Error Permission is missing! Please choose permission type when adding group"
		}		
	}

	choosePermission(permission_id: string, permission_name: string)
	{				
		this.choosenPermission = {permission_id: permission_id}
		this.permission = permission_name		
	}

	showMember(id: string)
	{
		this.router.navigate(['/home/admin/groupMember',id])
	}

	private mapData(data: object)
	{
		this.modalForm = this.formBuilder.group
		({
			name: [data["name"],Validators.required],
			description: [data["description"], Validators.required]
		})
		this.update = "updateGroup"
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

}
