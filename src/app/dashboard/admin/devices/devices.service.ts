import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment';


@Injectable()
export class DevicesService
{
	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	getAll()
	{
		return this.http.get(`${this.baseUrl}/devices`,
		{
			headers: this.Headers()
		})
	}

	deleteDevice(id:number)
	{		
		return this.http.delete(`${this.baseUrl}/device/${id}`,
		{
			headers: this.Headers()
		})			
	}

	AddDevice(body: Object, extensUrl: string)
	{		
		return this.http.post(`${this.baseUrl}/${extensUrl}`,body,
		{
			headers: this.Headers()
		})        
	}

	GetDevice(extensUrl: string)
	{
		return this.http.get(`${this.baseUrl}/${extensUrl}/${this.routeID}`,
		{
			headers: this.Headers()
		})			
	}

	UpdateDevice(body: Object, extensUrl: string)
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
			this.router.navigate(['/login']);
		}
	}	
}