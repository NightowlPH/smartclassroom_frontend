import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component'

const appRoutes: Routes = 
[
	{
		path: 'home',
		loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
		data: { preload: true }
	},
  {
    path: '**',
    component: PageNotFoundComponent
  }  
];

@NgModule
({
  imports: 
  [
    RouterModule.forRoot(appRoutes)
  ],
  exports: 
  [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }