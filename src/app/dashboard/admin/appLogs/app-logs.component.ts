import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';

import { AdminAppLogsService } from './app-logs.service';
import { ErrorHandlerService } from '../../../error-handler.service';

@Component
({
	selector: 'room-status-cmp',
	templateUrl: 'app-logs.component.html'
})

export class AdminAppLogsComponent implements OnInit
{

	activeUsers: object[]
	loginLogs: object[]

	class = [["","","",""],["","","",""]]
	key: string = 'id'
	reverse: boolean = true
	row = 10
	totalUsr: number
	tempID
	p: number = 1
	filter: string
	

	constructor(private appLogsService: AdminAppLogsService, 
				private errorHandlerService: ErrorHandlerService){}

	ngOnInit()
	{
		this.appLogsService.GetActiveUsers()
		.subscribe( data =>
		{						
			this.activeUsers = data['users']
			this.totalUsr = this.activeUsers.length
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})		
	}
	

	delActiveUser(id: Number)
	{
		this.appLogsService.DelActiveUsers(id)
		.subscribe( data =>
		{			
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	refresh()
	{
		this.ngOnInit()
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
	
}