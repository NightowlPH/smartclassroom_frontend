import { Component, OnInit, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsersService} from './users.service';
import { Profile } from './users.metadata';


@Component
({
	selector: 'users-cmp',
	templateUrl: 'users.component.html'
})

export class UsersComponent 
{
	users: object[]	
	class = [["","","","",""],["","","","",""]]
	key: string = 'id'
	reverse: boolean = false
	row = 10
	totalUsr: number
	tempID	

	modalForm: FormGroup
	addDetails: object	
	add: string
	update: string
	modalAnimation: string
	message: string
	filter: string
	counter = false
	coutner2 = false
	
	profile: Profile = {Fname: '', Lname: '', username: '', cardID: ''}
	user_id: string

	constructor(private usersService: UsersService, private formBuilder: FormBuilder, private cookieService: CookieService,
			    private route: Router ){ this.createForm() }


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
		this.usersService.EditProfile()
		.subscribe( data =>
		{		
			this.profile.Fname = data['Fname']
			this.profile.Lname = data['Lname']
			this.profile.username = data['username']
			this.profile.cardID = data['cardID']	
			this.user_id = data['id']					
		})	
		this.usersService
		.getAll()
		.subscribe( data => 
			{				
				this.updateToken(data['token'])				
				this.users = data['users']
				this.totalUsr = this.users.length
			},(error: HttpErrorResponse) =>
			{
				this.handleError(error)
			});				
	}	

	

	editProfile()
	{
		this.usersService.routeID = this.user_id
		console.log(this.profile)
		this.usersService.UpdateUser(this.profile)
		.subscribe( data => 
		{	
			this.updateToken(data['token'])
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
				this.handleError(error)
			})
	}

	changePassword()
	{				
		this.usersService.ChangePassword(this.modalForm.value)
		.subscribe( data =>
		{
			this.updateToken(data['token'])
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

	updateToken(token: string)
	{
		this.cookieService.delete("token")
		this.cookieService.set('token', token)
	}
}