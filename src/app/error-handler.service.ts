import { Injectable } from '@angular/core';
import { Router }    from '@angular/router';

@Injectable()
export class ErrorHandlerService
{	

	constructor(private route: Router){}

	handleError(error: object)
  {				
    console.error(error);
		if(error['error'].message == "your token has been expired" && error['status'] == 500)
		{			
			this.route.navigate(['/login'])		
		}
		else if(error['status'] == 500 && error['error'].message == "Internal Server Error")
		{
			this.route.navigate(['/InternalServerError'])
		}
		else if(error['status'] == 404)
		{
			this.route.navigate(['/PageNotFound'])
		}
	}
}
