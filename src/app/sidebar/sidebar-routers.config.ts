import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = 
[
	{ path: 'home/users', icon: 'fa fa-user', class: 'nav-label', title: 'Users', status: ''},
	{ path: 'home/permissions', icon: 'fa fa-unlock-alt', class: 'nav-label', title: 'Permissions', status: ''},
	{ path: 'home/groups', icon: 'fa fa-group', class: 'nav-label', title: 'Groups', status: ''},
	{ path: 'home/rooms', icon: 'fa fa-bank', class: 'nav-label', title: 'Rooms', status: ''},
	{ path: 'home/auditTrials', icon: 'fa fa-table', class: 'nav-label', title: 'Audit Trails', status: ''},
	{ path: 'home/roomStatus', icon: 'fa fa-sliders', class: 'nav-label', title: 'Room Status', status: ''},	
]

export const ROUTE: RouteInfo[] = 
[
	{ path: 'home/admin/users', icon: 'fa fa-user', class: 'nav-label', title: 'Users', status: ''},
	{ path: 'home/admin/permissions', icon: 'fa fa-unlock-alt', class: 'nav-label', title: 'Permissions', status: ''},
	{ path: 'home/admin/groups', icon: 'fa fa-group', class: 'nav-label', title: 'Groups', status: ''},
	{ path: 'home/admin/rooms', icon: 'fa fa-bank', class: 'nav-label', title: 'Rooms', status: ''},
	{ path: 'home/admin/devices', icon: 'fa fa-th-list', class: 'nav-label', title: "Devices", status: ''},	
	{ path: 'home/admin/roomStatus', icon: 'fa fa-sliders', class: 'nav-label', title: 'Room Status', status: ''},
	{ path: 'home/admin/auditTrials', icon: 'fa fa-table', class: 'nav-label', title: 'Audit Trails', status: ''},	
	{ path: 'home/admin/appLogs', icon: 'fa fa-tasks', class: 'nav-label', title: 'App Logs', status: ''}
]