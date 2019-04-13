import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenRegistrationService implements HttpInterceptor {
  constructor(private cookieService: CookieService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        tap((ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            console.log('processing response headers', ev.headers.keys());
            let token = ev.headers.get('x-access-token')
            console.log('token', ev.headers.get('x-access-token'));
            if(token != undefined){
              this.cookieService.deleteAll()
              this.cookieService.set('token', token, undefined, '/')
            }
          }
        })
      )
  }
}
