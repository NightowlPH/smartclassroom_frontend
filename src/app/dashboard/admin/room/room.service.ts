import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 



@Injectable()
export class AdminRoomService
{
  	private baseUrl = environment.backend_uri;
	roomID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}

	getRooms()
	{
		return this.http.get(`${this.baseUrl}/rooms`,
		{
			headers: this.Headers()
		})
	}

	DeleteRoom(id: string)
	{
		return this.http.delete(`${this.baseUrl}/room/${id}`,
		{
			headers: this.Headers()
		})
	}

	AddRoom(body: Object, extensUrl: string)
	{				
        return this.http.post(`${this.baseUrl}/${extensUrl}`,body,
        {
        	headers: this.Headers()
        })

	}

	GetRoom(extensUrl: string)
	{
		return this.http.get(`${this.baseUrl}/${extensUrl}/${this.roomID}`,
		{
			headers: this.Headers()
		})		
	}

	UpdateRoom(body: Object, extensUrl: string)
	{	       
		console.log("====>",this.roomID)
		return this.http.put(`${this.baseUrl}/${extensUrl}/${this.roomID}`,body,
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

