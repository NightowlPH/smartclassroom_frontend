import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
	selector: 'internal-server-error',
	templateUrl: 'internal-serverError.component.html'
})

export class InternalServerErrorComponent
{
	constructor(private router: Router){}

	login()
	{
		this.router.navigate(['/login'])
	}
}