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

	class = [["","","",""],["","","",""]]
	tempID
	key: string = 'id'
	reverse: boolean = false
	totalUsr: number
	filter: string
	row = 9
	p = 1

	constructor( private groupService: GroupService, 
				 private errorHandlerService: ErrorHandlerService, private router: Router ){}
	

	ngOnInit()
	{
		this.groupService.getGroups()
		.subscribe( data => 
		{
			this.groups  = data['groups']
			this.totalUsr = this.groups.length
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	

	showMember(id: string)
	{
		this.router.navigate(['/home/groupMember',id])
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

}
