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
			this.group_name = data['group_name']
			document.getElementById('user_name')['textContent'] = data['Fname']+" "+data['Lname']			
		})
		this.sidebarHeadersService.Get_user_photo()
		.subscribe( data =>
		{
			if(data['type'] == 'image/jpg')
			{				
				this.createImageFromBlob(data)
			}
			else{
				document.getElementById("user_photo")['src'] = "../assets/img/logo.png"
			}
		})
	}

	selecTag()
	{
		var class_name = document.getElementById("selectList-sd").className
		if(class_name == "dropdown-menu animated fadeInRight m-t-xs")
		{
			document.getElementById("selectList-sd").className += " show"
		}
		if(class_name == "dropdown-menu animated fadeInRight m-t-xs show")
		{
			document.getElementById("selectList-sd").className = "dropdown-menu animated fadeInRight m-t-xs"
		}
	}

	createImageFromBlob(image: Blob) {
	   let reader = new FileReader();
	   reader.addEventListener("load", () => {	   			     
	      document.getElementById("user_photo")['src'] = reader.result;
	   }, false);

	   if (image) {	   		
	      reader.readAsDataURL(image);
	   }
	}
	
}
