import { Component, OnInit} from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { GroupService } from './group.service';
import { ErrorHandlerService } from '../../../error-handler.service';

@Component
({
	selector: 'group-cmp',
	templateUrl: 'group.component.html'
})

export class GroupComponent
{
	groups: object[]
	message: string
		
	modalAnimation: string

	constructor( private groupService: GroupService, 
				 private errorHandlerService: ErrorHandlerService, private router: Router ){}
	

	ngOnInit()
	{
		this.groupService.getGroups()
		.subscribe( data => 
		{		
			this.groups  = data['groups']
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	

	showMember(id: string)
	{
		this.router.navigate(['/home/groupMember',id])
	}
		

}