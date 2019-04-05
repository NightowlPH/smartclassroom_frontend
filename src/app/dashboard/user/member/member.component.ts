import { Component, OnInit, DoCheck } from '@angular/core'
import { Location } from '@angular/common';
import { Route } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MembersService } from './member.service'


@Component
({
	selector: 'member-cmp',
	templateUrl: 'member.component.html'
})

export class MemberComponent 
{
	groupMember: object[]

	class = [["","","","",""],["","","","",""]]
	key: string = 'id'
	reverse: boolean = false
	row = 10
	totalUsr: number
	tempID
	p: number = 1
	filter: string

	

	constructor( private route: ActivatedRoute, private membersService: MembersService,
		     private router: Router ){}

	ngOnInit()
	{		
		var id = this.route.snapshot.paramMap.get('id')		
		console.log("member",this.route)
		this.membersService.getAllMem(id)
		.subscribe( data =>
		{
			this.groupMember = data['members']
			this.totalUsr = this.groupMember.length
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	back()
	{		
		this.router.navigate(['home/groups'])
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
