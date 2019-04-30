import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'


@Injectable()
export class AdminRoomAccessService
{

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri

	getGroupAccess(id: string)
	{
		return this.http.get(`${this.baseUrl}/groupAccess/${id}`,
		{
			headers: this.Headers()
		})					
	}

	AddGroupAccess(id: string, body: object[])
	{
		return this.http.post(`${this.baseUrl}/groupAccess/${id}`, body,
		{
			headers: this.Headers()
		})
	}

	DeleteGroupAccess(id: string)
	{				
		return this.http.delete(`${this.baseUrl}/deleteGrpAccess/${id}`,
		{
			headers: this.Headers()
		})			
	}

	getNtGrpAccess(routeID: string)
	{
		return this.http.get(`${this.baseUrl}/shwNotGrpAccess/${routeID}`,
		{
			headers: this.Headers()
		})		      		   
	}

	getPermissions()
	{
		return this.http.get(`${this.baseUrl}/permissions`,
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

