import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 


@Injectable()
export class AdminMembersService
{

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	getAllMem(id: string)
	{
		return this.http.get(`${this.baseUrl}/groupMember/${id}`,
		{
			headers: this.Headers()
		})			
	}

	DeleteMember(group_id: string, user_id: string)
	{				
		return this.http.delete(`${this.baseUrl}/deleteMember/${group_id}/${user_id}`,
		{
			headers: this.Headers()
		})			
	}

	getAllNotMem(id: string)
	{
		return this.http.get(`${this.baseUrl}/shwNotMem/${id}`,
		{
			headers: this.Headers()
		})			  
	}

	AddMember(body: object, extensUrl: string, id: string)
	{		
        return this.http.post(`${this.baseUrl}/${extensUrl}/${id}`,body, 
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
