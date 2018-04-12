import { Component, OnInit} from '@angular/core'
import { Router }    from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AdminAppLogsService } from './app-logs.service';

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
	

	constructor(private appLogsService: AdminAppLogsService, private route: Router, private cookieService: CookieService){}

	ngOnInit()
	{
		this.appLogsService.GetActiveUsers()
		.subscribe( data =>
		{			
			this.updateToken(data['token'])	
			this.activeUsers = data['users']
			this.totalUsr = this.activeUsers.length
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})		
	}
	

	delActiveUser(id: Number)
	{
		this.appLogsService.DelActiveUsers(id)
		.subscribe( data =>
		{
			console.log(data['token'])
			this.updateToken(data['token'])
			this.ngOnInit()
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