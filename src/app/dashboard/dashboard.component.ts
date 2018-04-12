import { Component, DoCheck} from '@angular/core'


@Component
({
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements DoCheck
{

	message: string;
	class: string;
	class2: string;
	class3: string; 

	constructor(){}



	ngDoCheck()
	{
		if (location.pathname == "/home/groups" || location.pathname == "/home/rooms" || location.pathname == "/home/admin/groups" || location.pathname == "/home/admin/rooms" || location.pathname == "/home/appLogs")
		{
			this.class = ""		
			this.class3 = ""
		}
		else 
		{			
			this.class = "wrapper wrapper-content animated fadeInRight"			
			this.class3 = "ibox-content"
		}		
	}
}