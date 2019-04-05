import { Component, OnInit} from '@angular/core'
import { Router }    from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminAuditTrailService } from './audit-trail.service';

@Component
({
	selector: 'audit-trail-cmp',
	templateUrl: 'audit-trail.component.html'
})

export class AdminAuditTrailComponent implements OnInit
{

	auditTrail: object[]

	class = [["","","","","","","",""],["","","","","","","",""]]
	key: string = 'id'
	reverse: boolean = true
	row = 10
	totalUsr: number
	tempID	
	filter: string

	constructor(private auditTrailService: AdminAuditTrailService, private route: Router){}

	ngOnInit()
	{
		this.auditTrailService.GetAuditTrails()
		.subscribe( data =>
		{
			this.auditTrail = data['auditTrail']
			this.totalUsr = this.auditTrail.length
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	deleteUser(id: string)
	{
		this.auditTrailService.DeleteAuditTrail(id)
		.subscribe( data =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	delete_all()
	{
		this.auditTrailService.DelAllAuditTrail()
		.subscribe( data => 
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			})
	}

	refresh()
	{
		this.ngOnInit()
	}

	sort(key, id: number)
	{		
		console.log(key,id)	
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
		console.log(this.class)	
	}

	manageRow(length: number)
	{		
		this.row = length
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

}
