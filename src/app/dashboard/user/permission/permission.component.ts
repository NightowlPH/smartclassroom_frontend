import { Component, OnInit, DoCheck} from '@angular/core'
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { PermissionService } from './permission.service';
import { ErrorHandlerService } from '../../../error-handler.service';

@Component
({
	selector: 'permission-cmp',
	templateUrl: 'permission.component.html'
})

export class PermissionComponent
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

	constructor( private permissionService: PermissionService, 
		         private errorHandlerService: ErrorHandlerService){}
	

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
				this.errorHandlerService.handleError(error)
			});
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
}