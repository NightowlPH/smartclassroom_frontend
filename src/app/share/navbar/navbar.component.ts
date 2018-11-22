import { Component, DoCheck } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';


import { NavBarService } from './navbar.service';

@Component
({
	selector: 'navbar-cmp',
	templateUrl: './navbar.component.html'
})

export class NavbarComponent implements DoCheck
{
	constructor( private route: ActivatedRoute, private cookieService: CookieService, private router: Router, private navbarService: NavBarService) {}
	breadcrumb = []
	path = ''
	title: string

	ngDoCheck()
	{					
		if(this.path == '')
		{						
			var url = location.hash	
			if(url.indexOf('home/admin') != -1)
			{				
				this.breadcrumb = [{'name': 'Home', path: 'admin/users'}]				
			}						
			else
			{				
				this.breadcrumb = [{'name': 'Home', path: 'users'}]	
			}					
			if(url.indexOf('groupMember') != -1)
			{												

				if(url.indexOf('home/admin') != -1)
				{					
					this.navbarService.GetGroupDetail(url.slice(25,url.length))
					.subscribe( data =>
					{					
						console.log(data)								
						this.breadcrumb.push({'name': 'Groups', 'path': 'admin/groups'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name											
					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
				else
				{
					this.navbarService.GetGroupDetail(url.slice(18,url.length))
					.subscribe( data =>
					{																	
						this.breadcrumb.push({'name': 'Groups', 'path': 'groups'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						
					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
			}
			else if(url.indexOf('roomAccess') != -1)
			{
				if(url.indexOf('home/admin') != -1)
				{
					this.navbarService.GetRoomDetail(url.slice(23,url.length))
					.subscribe( data =>
					{									
						this.breadcrumb.push({'name': 'Rooms', 'path': 'admin/rooms'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						

					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
				else
				{

					this.navbarService.GetRoomDetail(url.slice(23,url.length))
					.subscribe( data =>
					{													
						this.breadcrumb.push({'name': 'Rooms', 'path': 'rooms'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						

					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}				
			}
			else
			{				
				if(url.indexOf('home/admin') != -1)
				{					
					this.breadcrumb.push({'name': url.slice(13,url.length)[0].toUpperCase() + url.slice(14,url.length), 'path': url.slice(7, url.length)})
					this.title = url.slice(13,url.length)[0].toUpperCase() + url.slice(14,url.length)					
				}
				else
				{								
					this.breadcrumb.push({'name': url.slice(7,url.length)[0].toUpperCase() + url.slice(8,url.length), 'path': url.slice(7, url.length)})
					this.title = url.slice(7,url.length)[0].toUpperCase() + url.slice(8,url.length)					
				}				
			}
			this.path = location.hash
		}		
		else if(this.path != location.hash)
		{
			var url = location.hash	
			if(url.indexOf('home/admin') != -1)
			{
				this.breadcrumb = [{'name': 'Home', path: 'admin/users'}]	
			}						
			else
			{
				this.breadcrumb = [{'name': 'Home', path: 'users'}]	
			}		
			var id = this.route.snapshot.paramMap.get('id')			
			if(url.indexOf('groupMember') != -1)
			{
				if(url.indexOf('home/admin') != -1)
				{
					this.navbarService.GetGroupDetail(url.slice(24,url.length))
					.subscribe( data =>
					{													
						this.breadcrumb.push({'name': 'Groups', 'path': 'admin/groups'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name											
					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
				else
				{
					this.navbarService.GetGroupDetail(url.slice(18,url.length))
					.subscribe( data =>
					{																	
						this.breadcrumb.push({'name': 'Groups', 'path': 'groups'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						
					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
			}
			else if(url.indexOf('roomAccess') != -1)
			{
				if(url.indexOf('home/admin') != -1)
				{
					this.navbarService.GetRoomDetail(url.slice(23,url.length))
					.subscribe( data =>
					{									
						this.breadcrumb.push({'name': 'Rooms', 'path': 'admin/rooms'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						

					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
				else
				{					
					this.navbarService.GetRoomDetail(url.slice(17,url.length))
					.subscribe( data =>
					{													
						this.breadcrumb.push({'name': 'Rooms', 'path': 'rooms'}, {'name': data['data'].name, 'path': ''})
						this.title = data['data'].name						

					},(error: HttpErrorResponse) =>
					{
						this.handleError(error)
					})
				}
			}
			else
			{
				if(url.indexOf('home/admin') != -1)
				{					
					this.breadcrumb.push({'name': url.slice(13,url.length)[0].toUpperCase() + url.slice(14,url.length), 'path': url.slice(7, url.length)})
					this.title = url.slice(13,url.length)[0].toUpperCase() + url.slice(14,url.length)					
				}
				else
				{					
					this.breadcrumb.push({'name': url.slice(7,url.length)[0].toUpperCase() + url.slice(8,url.length), 'path': url.slice(7, url.length)})
					this.title = url.slice(7,url.length)[0].toUpperCase() + url.slice(8,url.length)
				}
			}
			this.path = location.hash
		}
	}

	navigate(path: string)
	{
		if(path != '' || path != null)
		{
			this.router.navigate(['home/'+path])
		}
	}

	handleError(error: object)
	{				
		if(error['error'].message == "your token has been expired" && error['status'] == 500)
		{			
			this.router.navigate(['/login'])		
		}
		else if(error['status'] == 500 && error['error'].message == "Internal Server Error")
		{
			this.router.navigate(['/InternalServerError'])
		}
		else if(error['status'] == 404)
		{
			this.router.navigate(['/PageNotFound'])
		}
	}	
}
