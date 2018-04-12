import { Component, OnInit, DoCheck} from '@angular/core'
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { PermissionService } from './permission.service';

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
		         private cookieService: CookieService, private route: Router ){}
	

	ngOnInit()
	{
		this.permissionService
		.getAll()
		.subscribe(data => 
		{
			this.updateToken(data['token'])
			this.permissions = data['permissions']
			this.totalUsr = this.permissions.length
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
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

	

	handleError(error: object)
	{				
		if(error['error'].message == "your token has been expired" && error['status'] == 500)
		{			
			this.route.navigate(['/login'])		
		}
		else if(error['status'] == 500 && error['error'].message == "Internal Server Error")
		{
			this.route.navigate(['/InternalServerError'])
		}
		else if(error['status'] == 404)
		{
			this.route.navigate(['/PageNotFound'])
		}
	}

	updateToken(token: string)
	{
		this.cookieService.delete("token")
		this.cookieService.set('token', token)
	}
	
}