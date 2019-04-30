import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';

const routes: Routes = 
[
	{
		path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
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
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
