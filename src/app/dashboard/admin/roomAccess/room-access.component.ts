import { Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminRoomAccessService } from './room-access.service';


@Component
({
	selector: 'room-access-cmp',
	templateUrl: 'room-access.component.html'
})

export class AdminRoomAccessComponent implements OnInit
{
	
	groupAccess: object[]
	unregistered_group: object[]
	permissions: object[]
	CB_Status = {}	
	addAccess = [[],[]]

	constructor(private roomAccessService: AdminRoomAccessService,
		    private route: ActivatedRoute, private router: Router ){}

	ngOnInit()
	{
		var id = this.route.snapshot.paramMap.get('id')
		this.roomAccessService.getGroupAccess(id)
		.subscribe( data =>
		{
			this.groupAccess = data['group']			
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	getData()
	{		
		this.addAccess = [[],[]]		
		this.roomAccessService.getNtGrpAccess(this.route.snapshot.paramMap.get('id'))
		.subscribe( data =>
		{			
			this.unregistered_group = data['group']				
			this.unregistered_group.forEach( data =>
			{
				var id = 'a'+data['id']
				var obj = {}
				obj[id] = "Permission"
				this.CB_Status = Object.assign(this.CB_Status,obj)					
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})		
		})

		this.roomAccessService.getPermissions()
		.subscribe( data =>
		{			
			this.permissions = data['permissions']		
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	addGrpAccess()
	{
		var all_data = []
		var counter = 0
		this.addAccess[0].forEach( data =>
		{			
			all_data.push(this.addAccess[1][counter])
			counter++			
		})
		this.roomAccessService.AddGroupAccess(this.route.snapshot.paramMap.get('id'),all_data)
		.subscribe( response =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	addPermission(groupID: number, permissionID: number, permissionName: string)
	{		
		this.addAccess[0].push('a'+groupID)
		this.addAccess[1].push({group_id: groupID, permission_id: permissionID})		
		this.CB_Status['a'+groupID] = permissionName		
	}

	unCheck_CB(groupID: number)
	{
		this.CB_Status['a'+groupID] = "Permission"
		this.addAccess[0].splice(this.addAccess[0].indexOf('a'+groupID),1)
		this.addAccess[1].splice(this.addAccess[0].indexOf('a'+groupID),1)		
	}

	delGroupAccess(id: string)
	{
		this.roomAccessService.DeleteGroupAccess(id)
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
		this.router.navigate(['home/admin/rooms'])
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
