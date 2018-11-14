import { Component, DoCheck} from '@angular/core'
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { DashboardService } from './dashboard.service';
import { ErrorHandlerService } from './../error-handler.service';
import { Profile } from './dashboard.metadata';

@Component
({
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements DoCheck
{

	message: string;
	class: string;
	class2: string;
	class3: string; 

	modalForm: FormGroup

	profile: Profile = {Fname: '', Lname: '', username: '', cardID: ''}
	user_id: string
	modalAnimation = "fadeInLeftBig"

	constructor( private dashboardService: DashboardService, private formBuilder: FormBuilder, private errorHandlerService: ErrorHandlerService){ this.createForm()}

	createForm()
	{					
		this.modalForm = this.formBuilder.group
		({
			current_password: ['',Validators.required],
			new_password: ['', Validators.required],
		})    
	}

	ngOnInit()
	{		
		this.message = ""	
		this.dashboardService.EditProfile()
		.subscribe( data =>
		{		
			this.profile.Fname = data['Fname']
			this.profile.Lname = data['Lname']
			this.profile.username = data['username']
			this.profile.cardID = data['cardID']	
			this.user_id = data['id']					
		})				
	}

	ngDoCheck()
	{
		if (location.hash.slice(1,location.hash.length) == "/home/groups" || location.hash.slice(1,location.hash.length) == "/home/rooms" || location.hash.slice(1,location.hash.length) == "/home/admin/groups" || location.hash.slice(1,location.hash.length) == "/home/admin/rooms" || location.hash.slice(1,location.hash.length) == "/home/appLogs" || location.hash.slice(1,location.hash.length) == "/home/admin/roomStatus")
		{
			this.class = ""		
			this.class3 = ""
		}
		else 
		{			
			this.class = "wrapper wrapper-content animated fadeInRight"			
			this.class3 = "ibox-content"
		}		
	}

	updateUser()
	{		
		var usrFrmData = this.modalForm.value
		this.dashboardService.UpdateUser(usrFrmData)
		.subscribe( data => 
		{				
			if(data['message'])
			{
				this.message = data['message']
			}
			else
			{
				this.message = ""
				this.ngOnInit()
			}						
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})		
	}

	editProfile()
	{
		this.dashboardService.routeID = this.user_id
		this.dashboardService.UpdateUser(this.profile)
		.subscribe( data => 
		{				
			if(data['message'])
			{
				this.message = data['message']
			}
			else
			{
				this.message = ""
				this.ngOnInit()
			}						
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	changePassword()
	{				
		this.dashboardService.ChangePassword(this.modalForm.value)
		.subscribe( data =>
		{			
			if(data['message'] != 'your password is successfully change')
			{
				this.message = data['message']
			}
			else
			{
				this.message = ""
			}
		})
	}
}