import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'

@Injectable()
export class AdminRoomStatusService
{
	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri	

	room_id: string

	GetRoomStatus()
	{
		return this.http.get(`${this.baseUrl}/RoomStatus`,
		{
			headers: this.Headers()
		})					
	}

	GetAllDevice()
	{
		return this.http.get(`${this.baseUrl}/getDeviceToAdd/${this.room_id}`,
		{
			headers: this.Headers()
		})
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////
	AddRoomDevice(data: number[])
	{
		return this.http.post(`${this.baseUrl}/addRoomDevice/${this.room_id}`,data,
		{
			headers: this.Headers()
		})
	}

	ControlDevice(data: object, room_status_id: string)
	{
		return this.http.put(`${this.baseUrl}/roomStatusByID/${room_status_id}`,data,
		{
			headers: this.Headers()
		})
	}

	deleteRoomDevice(id: string)
	{
		return this.http.delete(`${this.baseUrl}/roomStatusByID/${id}`,
		{
			headers: this.Headers()
		})
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
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