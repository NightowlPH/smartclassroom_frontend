import { Component, OnInit} from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdminGroupService } from './group.service';
import { ErrorHandlerService } from '../../../error-handler.service';
declare var $: any;

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

	class = [["","","",""],["","","",""]]
	tempID
	key: string = 'id'
	reverse: boolean = false
	totalUsr: number
	filter: string
	row = 10
	p = 1

	constructor( private groupService: AdminGroupService, private errorHandlerService: ErrorHandlerService,
				 private formBuilder: FormBuilder, private router: Router ){ this.createForm()}

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
			this.totalUsr = this.groups.length
		},(error: HttpErrorResponse) =>
      {
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
			}) 
		this.groupService.GetGroup("group").subscribe( data =>
		{
			this.permission = data['data'].permission_name
			this.choosenPermission = {permission_id: data['data'].permission_id}
			this.mapData(data['data'])
		},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
			  this.message = ""
        $("#modal-groups").modal('hide');
				this.ngOnInit()
			},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
        $("#modal-groups").modal('hide');
				this.ngOnInit()			
			},(error: HttpErrorResponse) =>
			{
        this.message = error.error.message;
				this.errorHandlerService.handleError(error)
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
		this.selecTag2()		
	}

	showMember(id: string)
	{
		this.router.navigate(['/home/admin/groupMember',id])
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

	selecTag2()
	{		
		var class_name = document.getElementById("selectList2").className
		if(class_name == "dropdown-menu")
		{
			document.getElementById("selectList2").className += " show"
		}
		if(class_name == "dropdown-menu show")
		{
			document.getElementById("selectList2").className = "dropdown-menu"
		}
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
}
