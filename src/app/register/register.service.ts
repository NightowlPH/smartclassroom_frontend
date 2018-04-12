import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable()
export class RegisterService
{
	redirectUrl: string	

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri

	register_user(data: object)
	{
		return this.http.post(`${this.baseUrl}/register`, data)
	}
}
