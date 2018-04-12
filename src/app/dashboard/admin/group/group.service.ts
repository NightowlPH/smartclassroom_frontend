import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 

@Injectable()
export class AdminGroupService
{
  	private baseUrl = environment.backend_uri;
	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}

	getGroups()
	{
		return this.http.get(`${this.baseUrl}/groups`, 
		{
			headers: this.Headers()
		})		
	}

	DeleteGroup(id: string)
	{
		return this.http.delete(`${this.baseUrl}/group/${id}`,
		{
			headers: this.Headers()
		})		
	}

	AddGroup(body: Object, extensUrl: string)
	{		
		return this.http.post(`${this.baseUrl}/${extensUrl}`,body,
		{
			headers: this.Headers()
		})     
	}

	GetGroup(extensUrl: string)
	{
		return this.http.get(`${this.baseUrl}/${extensUrl}/${this.routeID}`,
		{
			headers: this.Headers()
		})			
	}

	UpdateGroup(body: Object, extensUrl: string)
	{
		return this.http.put(`${this.baseUrl}/${extensUrl}/${this.routeID}`,body,
		{
			headers: this.Headers()
		})			
	}

	GetPermissions()
	{
		return this.http.get(`${this.baseUrl}/getAllPermission`, 
		{
			headers: this.Headers()
		})		
	}

	private Headers()
	{
		if(this.cookieService.get('token'))
		{
			return new HttpHeaders().set('x-access-token', this.cookieService.get('token'))
		}
		else
		{
			console.log("token is missing")
			this.cookieService.delete("token")
			this.cookieService.delete('username');
			this.cookieService.delete('userType');
			this.router.navigate(['/login']);
		}
	}	

}

