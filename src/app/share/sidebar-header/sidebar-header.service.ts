import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';



@Injectable()
export class SidebarHeadersService
{
	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri

	get_user_info()
	{
		return this.http.get(`${this.baseUrl}/getUserProfile`,
		{
			headers: this.Headers()
		})
	}

	Get_user_photo(): Observable<Blob> 
	{
		return this.http.put(`${this.baseUrl}/account/photo`,{data:null},
		{
			headers: this.Headers(),
			responseType: 'blob' 
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
