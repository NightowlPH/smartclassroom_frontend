import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

import { RouteInfo } from './sidebar.metadata';
import { ROUTES, ROUTE } from './sidebar-routers.config';
import { SidebarService } from './sidebar.service';

@Component
({
	selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit
{
	status = "active"
	menuItems: RouteInfo[];	

	constructor( private location: Location, private router: Router, private sidebarService: SidebarService, private cookieService: CookieService) {}

	ngOnInit()
	{
		this.sidebarService.GetAccess()
		.subscribe( response =>
		{
			if(response['access'] == "Admin")
			{
				this.menuItems = ROUTE.filter(menuItems => menuItems)
			}
			else if(response['access'] == "User")
			{
				this.menuItems = ROUTES.filter(menuItems => menuItems);
			}
			else
			{
				this.cookieService.delete("token")
				this.cookieService.delete('username');
				this.cookieService.delete('userType');
				this.router.navigate(['/login'])
			}
			this.menuItems.forEach( sidebar =>
			{				
				if ("#/"+sidebar.path == location.hash )
				{
					sidebar.status = "active"
				}
				else
				{
					sidebar.status = ""
				}
			})
		},(error: HttpErrorResponse) =>
			{
				if(error['error'].message == "your token has been expired" && error['status'] == 500 || error['status'] == 401)
				{
					this.cookieService.deleteAll()
					this.router.navigate(['/login']);
				}				
			}		)			
	}
	navigateTo(path: string)
	{
		this.router.navigate([path])
		this.menuItems.forEach( sidebar =>
		{
			if (sidebar.path == path )
			{
				sidebar.status = "active"
			}
			else
			{
				sidebar.status = ""
			}
		})
	}
}
