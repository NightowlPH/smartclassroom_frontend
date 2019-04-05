import { Component, OnInit, DoCheck } from '@angular/core'
import { Location } from '@angular/common';
import { Route } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminMembersService } from './member.service'


@Component
({
	selector: 'member-cmp',
	templateUrl: 'member.component.html'
})

export class AdminMemberComponent 
{
	groupMember: object[]
	notMember: object[]

	class = [["","","","",""],["","","","",""]]
	key: string = 'id'
	reverse: boolean = false
	row = 10
	totalUsr: number
	tempID
	p: number = 1
	filter: string

	class2 = [["","","","",""],["","","","",""]]
	key2: string = 'id'
	reverse2: boolean = false
	row2 = 8
	totalUsr2: number
	tempID2
	p2: number = 1
	filter2: string

	constructor( private route: ActivatedRoute, private membersService: AdminMembersService,
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

	getData()
	{			
		this.membersService.getAllNotMem(this.route.snapshot.paramMap.get('id')	)
			.subscribe( data =>
			{	
				this.notMember = data['members']
				this.totalUsr2 = this.notMember.length				
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})	
	}

	deleteMember(id: string)
	{			
		var group_id = this.route.snapshot.paramMap.get('id')
		this.membersService.DeleteMember(group_id, id).subscribe( data => 
		{
			this.ngOnInit()	
			
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
				
	}

	addMember(input: NgForm)
	{		
		var body = []
		this.notMember.forEach( user =>
			{
				if(input.value["a"+user['id']] == true)
				{										
					// body.id.unshift(user['id'].toString())
					body.push(user['id'])
				}			
			})
		console.log(body)
		this.membersService.AddMember(body,"groupMember",this.route.snapshot.paramMap.get('id'))
		.subscribe( response =>
		{
			this.ngOnInit()		
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	back()
	{		
		this.router.navigate(['home/admin/groups'])
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

	sort2(key, id: number)
	{				
		this.key2 = key;
		this.reverse2 = !this.reverse2;
		if(this.class2[0][id] == "" || this.class2[0][id] == "-asc")
		{
			this.class2[0][id] = "-desc"
		}
		else if(this.class2[0][id] == "-desc")
		{
			this.class2[0][id] = "-asc"
		}		
		this.class2[1][this.tempID] = ""
		this.class2[1][id] = "active"
		this.tempID2 = id		
	}	


	manageRow(length: number)
	{		
		this.row = length
		if(length == 200)
		{
			this.row = this.totalUsr
		}		
	}

	manageRow2(length: number)
	{		
		this.row2 = length
		if(length == 200)
		{
			this.row2 = this.totalUsr2
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
