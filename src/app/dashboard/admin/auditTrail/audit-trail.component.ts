import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';

import { AdminAuditTrailService } from './audit-trail.service';
import { ErrorHandlerService } from '../../../error-handler.service';

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

	constructor(private auditTrailService: AdminAuditTrailService,  		        
				private errorHandlerService: ErrorHandlerService ){}

	ngOnInit()
	{
		this.auditTrailService.GetAuditTrails()
		.subscribe( data =>
		{
			this.auditTrail = data['auditTrail']
			this.totalUsr = this.auditTrail.length
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
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
				this.errorHandlerService.handleError(error)
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
				this.errorHandlerService.handleError(error)
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
		this.selecTag()
	}
	p: number = 1;

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
