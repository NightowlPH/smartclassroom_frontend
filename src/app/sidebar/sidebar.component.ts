import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RouteInfo } from './sidebar.metadata';
import { LoginService } from '../login/login.service';

@Component
({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit
{
  status = "active"
  menuItems: RouteInfo[];  
  navEnd: Observable<NavigationEnd>;

  constructor(
    private loginService: LoginService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.navEnd = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }
  private addMenuItem(item, access){
    if(access){
      this.menuItems[item.order] = item;
    }
    else{
      console.warn("Access denied for", item);
    }
  }

  ngOnInit()
  {
    this.menuItems = [];
    let i: number = 0;
    this.activeRoute.snapshot.routeConfig.children.forEach(route => {
      if('data' in route && route.data.inMenu){
        console.log("Checking access for", route);
        let access_check: Observable<boolean>;
        let item = {
          path: route.path,
          order: i,
          icon: route.data.icon,
          title: route.data.title,
          class: route.data.class,
          status: '/home/'+route.path == this.location.path()?"active":"",
        };
        if('accessUrl' in route.data){
          this.loginService.hasUrlAccess(route.data.accessUrl).subscribe(this.addMenuItem.bind(this, item));
        }
        else{
          this.addMenuItem(item, true);
        }
        i+=1;
      }
    });
    this.navEnd.subscribe(evt => {
      this.menuItems.forEach(item => {
        item.status = '/home/'+item.path == this.location.path()?"active":""
      });
    });
  }
    
}
