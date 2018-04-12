import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';


import { SidebarHeadersService } from './sidebar-header.service';

@Component
({
	selector: 'sidebar-header-cmp',
	templateUrl: './sidebar-header.component.html'
})

export class SidebarHeaderComponent 
{

	Fname: string
	Lname: string
	group_name: string

	modalForm: FormGroup

	constructor(private sidebarHeadersService: SidebarHeadersService, private formBuilder: FormBuilder ){ this.createForm()}

	createForm()
	{
		this.modalForm = this.formBuilder.group
		({
		    			
		})    
	}

	ngOnInit()
	{
		this.sidebarHeadersService.get_user_info()
		.subscribe( data =>
		{
			this.Fname = data['Fname']
			this.Lname = data['Lname']	
			this.group_name = data['group_name']	
		})
	}	
}
