import { Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { RoomAccessService } from './room-access.service';
import { ErrorHandlerService } from '../../../error-handler.service';


@Component
({
	selector: 'room-access-cmp',
	templateUrl: 'room-access.component.html'
})

export class RoomAccessComponent implements OnInit
{
	
	groupAccess: object[]
	unregistered_group: object[]
	permissions: object[]
	CB_Status = {}	
	addAccess = [[],[]]

	constructor(private roomAccessService: RoomAccessService, private errorHandlerService: ErrorHandlerService,
		         private route: ActivatedRoute, private router: Router){}

	ngOnInit()
	{
		var id = this.route.snapshot.paramMap.get('id')
		this.roomAccessService.getGroupAccess(id)
		.subscribe( data =>
		{			
			this.groupAccess = data['group']			
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	back()
	{		
		this.router.navigate(['home/rooms'])
	}
}