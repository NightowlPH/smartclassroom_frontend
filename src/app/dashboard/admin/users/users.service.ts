import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 




@Injectable()
export class AdminUsersService
{
	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;
	user_id: string;

	getAll()
	{		
		return this.http.get(`${this.baseUrl}/users`, 
		{
			headers: this.Headers()
		})			
	}

	AddUser(body: Object, extensUrl: string)
	{				      
        return this.http.post(`${this.baseUrl}/${extensUrl}`,body, 
        {
        	headers: this.Headers()
        })        
	}

	deleteUser(id:number)
	{
		return this.http.delete(`${this.baseUrl}/user/${id}`,
		{
			headers: this.Headers()
		})			
	}	

	GetUser()
	{
		return this.http.get(`${this.baseUrl}/user/${this.routeID}`,
		{
			headers: this.Headers()
		})			
	}

	UpdateUser(body: FormData)
	{				
        
		return this.http.put(`${this.baseUrl}/user/${this.routeID}`,body,
		{
			headers: this.Headers()
		})			
	}

	EditProfile()
	{
		return this.http.get(`${this.baseUrl}/editProfile`,
		{
			headers: this.Headers()
		})
	}

	ChangePassword(body: object)
	{
		return this.http.post(`${this.baseUrl}/changeUserPassword`,body,
		{
			headers: this.Headers()
		})
	}

	AdminChangeUserPassword(new_password: object)
	{
		return this.http.put(`${this.baseUrl}/user/change-password/${this.user_id}`,new_password,
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
			this.cookieService.deleteAll()
			this.router.navigate(['/login']);
		}
	}	
	
	
}
