import { Component, OnInit, DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }    from '@angular/router';

import { AdminUsersService} from './users.service';
import { ErrorHandlerService } from '../../../error-handler.service';
declare var $: any;

@Component
({
	selector: 'users-cmp',
	templateUrl: 'users.component.html'
})

export class AdminUsersComponent implements OnInit
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
	

	constructor(private usersService: AdminUsersService, private formBuilder: FormBuilder, private errorHandlerService: ErrorHandlerService,
				private route: Router){ this.createForm() }


	createForm()
	{					
		this.modalForm = this.formBuilder.group
		({

		})    
	}

	ngOnInit()
	{		
		this.message = ""	
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
	
	deleteUser(input: NgForm ,id: any)
	{
		// console.log(input.value,this.users)	
		if (id == "none")
		{
			this.users.forEach( user =>
			{				
				//console.log("-------------------",user.username)					
				if(input.value["a"+user['id']] == true)
				{					
					this.usersService.deleteUser(user["id"])
						.subscribe( data =>
						{
							this.ngOnInit()
							if(data['message'])
							{
								this.message = data['message']
							}
						},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})									
				}			
			})			
		}
		else
		{			
			this.usersService.deleteUser(id).subscribe( data => 
			{
				this.ngOnInit()				
				if(data!=null && data['message'])
				{
					this.message = data['message']
				}
			},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
		}		
	}

	add_user()
	{
		this.modalForm = this.formBuilder.group
		({
			Lname: ['',Validators.required],
			Fname: ['', Validators.required],
			username: ['', Validators.required],
			userpassword: ['', Validators.required],
			cardID: ''
		})
		this.update = ""    		
		this.add = "addUser"    		
		this.modalAnimation = "flipInY"
	}

	addUser()
	{		
		if( this.modalForm.status == "VALID")
		{
			this.message = ""						
			this.addDetails = this.modalForm.value			
			this.usersService.AddUser(this.addDetails,"users").subscribe( response => 
        {
          console.log("Reponse", response)
					if ( response['message'] == "success")
          {	
            console.log("Added user successfully")
						if( this.counter == false)// SHOW THE LATEST ADDED USER
						{
							this.sort('id',0) 									
							this.counter = true
            }
            console.log("Hiding user modal");
            $("#modal-userss").modal('hide');
						this.ngOnInit()
					}
					else
					{
						this.message = response['message']
					}
				},(error: HttpErrorResponse) =>
        {
          this.message = error.error["message"];
				  this.errorHandlerService.handleError(error)
			  })
		}	
	}

	update_user(id: string)
	{
		this.add = ""
		this.modalAnimation = "fadeInDown"  
		this.usersService.routeID = id 		    		 	    		  		    	    	
		this.usersService.GetUser().subscribe( data => 
		{				
			this.mapData(data['data'])					
		},(error: HttpErrorResponse) =>
			{
        console.error("Error occured", error);
				this.errorHandlerService.handleError(error)
			})
	}

	updateUser()

	{				

		const formData: FormData = new FormData();		
		formData.append('Fname', this.modalForm.value['Fname']);		
		formData.append('Lname', this.modalForm.value['Lname']);
		formData.append('username', this.modalForm.value['username']);
		formData.append('cardID', this.modalForm.value['cardID']);

		this.usersService.UpdateUser(formData)
		.subscribe( data => 
		{	
			if(data!=null && data['message'])
			{
				this.message = data['message']
			}
			else
			{
        $("#modal-userss").modal('hide');
				this.message = ""
				this.ngOnInit()
			}						
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})		
	}

	private mapData(data: object)
	{		
    this.modalForm = this.formBuilder.group
		({
			Lname: [data['Lname'],Validators.required],
			Fname: [data['Fname'], Validators.required],
			username: [data['username'], Validators.required],
			cardID: data['cardID']
		})
		this.update = "updateUser"	
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
		console.log(class_name)
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
