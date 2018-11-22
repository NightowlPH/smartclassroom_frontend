import { Component, OnInit, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsersService} from './users.service';
import { ErrorHandlerService } from '../../../error-handler.service';
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
			    private errorHandlerService: ErrorHandlerService, private route: Router){ this.createForm() }


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
				this.users = data['users']
				this.totalUsr = this.users.length
			},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			});				
	}	

	

	editProfile()
	{
		this.usersService.routeID = this.user_id
		console.log(this.profile)
		this.usersService.UpdateUser(this.profile)
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
		this.usersService.ChangePassword(this.modalForm.value)
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