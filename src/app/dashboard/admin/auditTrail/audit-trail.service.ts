import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 


@Injectable()
export class AdminAuditTrailService
{
	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	GetAuditTrails()
	{
		return this.http.get(`${this.baseUrl}/auditTrail`,
		{
			headers: this.Headers()
		})
	}

	DeleteAuditTrail(id: string)
	{
		return this.http.delete(`${this.baseUrl}/auditTrail/${id}`,
		{
			headers: this.Headers()
		})
	}

	DelAllAuditTrail()
	{
		return this.http.delete(`${this.baseUrl}/auditTrail/all`,
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