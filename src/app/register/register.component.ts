import { Component, OnInit} from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';

@Component
({
	selector: 'register-cmp',
	templateUrl: 'register.component.html'
})

export class RegisterComponent
{
	modalForm: FormGroup
	message: string

	constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router){ this.createForm()}
	

	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    Lname: ['', Validators.required],
		    Fname: ['', Validators.required],
		    cardID: '',
		    username: ['', Validators.required],
		    userpassword: ['', Validators.required]
		})    
	}


	register()
	{
		if(this.modalForm.status == "VALID")
		{
			if(this.modalForm.value['userpassword'].length > 6)
			{
				this.message = ""
				this.modalForm.value['Lname'] = this.modalForm.value['Lname'][0].toUpperCase() + this.modalForm.value['Lname'].slice(1, this.modalForm.value['Lname'].length)
				this.modalForm.value['Fname'] = this.modalForm.value['Fname'][0].toUpperCase() + this.modalForm.value['Fname'].slice(1, this.modalForm.value['Fname'].length)		
				this.registerService.register_user(this.modalForm.value)
				.subscribe( () =>
				{
					this.router.navigate(['/login']);
				})
			}
			else
			{
				this.message = "password must be more than 6 characters"
			}
		}
		else
		{
			this.message = "Please fill up all required details"
		}		
	}

	login()
	{
		this.router.navigate(['/login']);
	}

}
