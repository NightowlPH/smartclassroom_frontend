import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 


@Injectable()
export class AdminPermissionService
{

	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	getAll()
	{
		return this.http.get(`${this.baseUrl}/permissions`,
		{
			headers: this.Headers()
		})
	}

	deletePermission(id:number)
	{		
		return this.http.delete(`${this.baseUrl}/permission/${id}`,
		{
			headers: this.Headers()
		})			
	}

	AddPermission(body: Object, extensUrl: string)
	{		
		return this.http.post(`${this.baseUrl}/${extensUrl}`,body,
		{
			headers: this.Headers()
		})        
	}

	GetPermission(extensUrl: string)
	{
		return this.http.get(`${this.baseUrl}/${extensUrl}/${this.routeID}`,
		{
			headers: this.Headers()
		})			
	}

	UpdatePermission(body: Object, extensUrl: string)
	{
		return this.http.put(`${this.baseUrl}/${extensUrl}/${this.routeID}`,body,
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


