import { Component, DoCheck} from '@angular/core'
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { DashboardService } from './dashboard.service';
import { ErrorHandlerService } from './../error-handler.service';
import { SidebarHeaderComponent } from '../share/sidebar-header/sidebar-header.component';
import { Profile } from './dashboard.metadata';
declare var $: any;

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


	image_path = "../assets/img/logo.png"
	imageToUpload: File = null;

	doCheck:boolean = true
	url: string

	constructor( private dashboardService: DashboardService, private formBuilder: FormBuilder, private errorHandlerService: ErrorHandlerService, private sidebarHeaderComponent:SidebarHeaderComponent){ this.createForm()}

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

		this.dashboardService.Get_user_photo()
		.subscribe( data =>
		{
			if(data['type'] == 'image/jpg')
			{				
				this.createImageFromBlob(data)
			}
			else{
				document.getElementById("user_photo_modal")['src'] = "../assets/img/logo.png"
			}
		})

		if(location.hash.slice(1,location.hash.length) == "/home/roomStatus" || location.hash.slice(1,location.hash.length) == "/home/admin/roomStatus")
		{
			console.log("MINI")
			var body_class_name = document.getElementById("index-body").className  		
	  		if(body_class_name.indexOf("mini-navbar") == -1)
	  		{
	  			document.getElementById("index-body").className = "mini-navbar body-small"
	  		} 
		}		
	}

	ngDoCheck()
	{		
		if(this.doCheck)
		{
			if (location.hash.slice(1,location.hash.length) == "/home/roomStatus" || location.hash.slice(1,location.hash.length) == "/home/appLogs" || location.hash.slice(1,location.hash.length) == "/home/admin/roomStatus")
			{
				this.class = ""		
				this.class3 = ""
				console.log("PASS")
			}
			else 
			{			
				this.class = "wrapper wrapper-content animated fadeInRight"			
				this.class3 = "ibox-content"
			}			
			this.doCheck = false
			this.url = location.hash.slice(1,location.hash.length)
		}
		else if(this.url != location.hash.slice(1,location.hash.length))
		{
			this.doCheck = true
			if(location.hash.slice(1,location.hash.length) == "/home/roomStatus" || location.hash.slice(1,location.hash.length) == "/home/admin/roomStatus")
			{
				console.log("MINI")
				var body_class_name = document.getElementById("index-body").className  		
		  		if(body_class_name.indexOf("mini-navbar") == -1)
		  		{
		  			document.getElementById("index-body").className = "mini-navbar body-small"
		  		} 
			}
			else if(location.hash.slice(1,location.hash.length) != "/home/roomStatus" || location.hash.slice(1,location.hash.length) != "/home/admin/roomStatus")
			{
				var body_class_name = document.getElementById("index-body").className
				if(body_class_name.indexOf("mini-navbar") == 0)
		  		{
		  			console.log("YES")
		  			document.getElementById("index-body").className = "body-small"
		  		}
		  	}			
		}			
	}

	updateUser()
	{		
		var usrFrmData = this.modalForm.value
		this.dashboardService.UpdateUser(usrFrmData)
		.subscribe( data => 
		{				
			if(data!=null && data['message'])
			{
				this.message = data['message']
			}
			else
			{
        this.message = ""
        $("#modal-users").modal("hide");
				this.ngOnInit()
			}						
		},(error: HttpErrorResponse) =>
      {
        this.message = error.error['message'];
				this.errorHandlerService.handleError(error)
			})		
	}
	

	editProfile()
	{
		const formData: FormData = new FormData();		
		formData.append('Fname', this.profile['Fname']);		
		formData.append('Lname', this.profile['Lname']);
		formData.append('username', this.profile['username']);
		formData.append('cardID', this.profile['cardID']);

		if(this.imageToUpload != null)
		{			
			formData.append('Image', this.imageToUpload);
		}		

		this.dashboardService.routeID = this.user_id
		this.dashboardService.UpdateUser(formData)
		.subscribe( data => 
		{						
			if(data == null)
			{				
				this.message = ""
				this.ngOnInit()
        $("#modal-users").modal("hide");
				this.sidebarHeaderComponent.ngOnInit()
			}	
			else if(data['message'])
			{
				this.message = data['message']
			}								
		},(error: HttpErrorResponse) =>
			{
        this.message = error.error['message'];
				this.errorHandlerService.handleError(error)
			})
	}

	handleFileInput(file: FileList)
	{		
		this.imageToUpload = file.item(0);		

	    //Show image preview
	    var reader = new FileReader();
	    reader.onload = (event:any) => {
	      this.image_path = event.target.result;	      
	    }	    
	    reader.readAsDataURL(this.imageToUpload);
	}

	createImageFromBlob(image: Blob) {
	   let reader = new FileReader();
	   reader.addEventListener("load", () => {	   			     
	      document.getElementById("user_photo_modal")['src'] = reader.result;
	   }, false);

	   if (image) {	   		
	      reader.readAsDataURL(image);
	   }
	}

	changePassword()
	{				
		this.dashboardService.ChangePassword(this.modalForm.value)
		.subscribe( data =>
		{			
			if(data['message'] != 'your password is successfully changed')
			{
				this.message = data['message']
			}
			else
			{
				this.message = ""
        $("#modal-users2").modal("hide");
			}
		},(error: HttpErrorResponse) =>
      {
        this.message = error.error['message'];
				this.errorHandlerService.handleError(error);
      }
    )
	}
}
