import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminUsersComponent } from './admin/users/users.component';
import { AdminPermissionComponent } from './admin/permission/permission.component';
import { AdminGroupComponent } from './admin/group/group.component';
import { AdminMemberComponent } from './admin/member/member.component';
import { AdminRoomComponent } from './admin/room/room.component';
import { AdminRoomAccessComponent } from './admin/roomAccess/room-access.component';
import { AdminAuditTrailComponent } from './admin/auditTrail/audit-trail.component';
import { AdminRoomStatusComponent } from './admin/roomStatus/room-status.component';
import { AdminAppLogsComponent } from './admin/appLogs/app-logs.component';
import { UsersComponent } from './user/users/users.component';
import { PermissionComponent } from './user/permission/permission.component';
import { GroupComponent } from './user/group/group.component';
import { MemberComponent } from './user/member/member.component';
import { RoomComponent } from './user/room/room.component';
import { RoomAccessComponent } from './user/roomAccess/room-access.component';
import { AuditTrailComponent } from './user/auditTrail/audit-trail.component';
import { RoomStatusComponent } from './user/roomStatus/room-status.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DevicesComponent } from './admin/devices/devices.component';

import { AuthGuard } from '../route-guard';

import { AdminUsersService } from './admin/users/users.service';
import { AdminPermissionService } from './admin/permission/permission.service';
import { AdminGroupService } from './admin/group/group.service';
import { AdminMembersService } from './admin/member/member.service';
import { AdminRoomService } from './admin/room/room.service';
import { AdminRoomAccessService } from './admin/roomAccess/room-access.service';
import { DevicesService } from './admin/devices/devices.service';
import { AdminRoomStatusService } from './admin/roomStatus/room-status.service';
import { AdminAuditTrailService } from './admin/auditTrail/audit-trail.service';
import { AdminAppLogsService } from './admin/appLogs/app-logs.service';

import { UsersService } from './user/users/users.service';
import { PermissionService } from './user/permission/permission.service';
import { GroupService } from './user/group/group.service';
import { MembersService } from './user/member/member.service';
import { RoomService } from './user/room/room.service';
import { RoomAccessService } from './user/roomAccess/room-access.service';
import { AuditTrailService } from './user/auditTrail/audit-trail.service';
import { RoomStatusService } from './user/roomStatus/room-status.service';

import { SessionService } from '.././session.service';
import { ErrorHandlerService } from '.././error-handler.service';
import { DashboardService } from './dashboard.service';

import { SidebarHeaderComponent } from '../share/sidebar-header/sidebar-header.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: 
    [
      {
        path: 'admin/users',
        component: AdminUsersComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-user',
          class: 'nav-label',
          title: 'Users',
          status: '',
          accessUrl: '/users'
        }
      },
      {
        path: 'admin/groups',
        component: AdminGroupComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-group',
          class: 'nav-label',
          title: 'Groups',
          status: '',
          accessUrl: '/groups'
        }
      },
      {
        path: 'admin/permissions',
        component: AdminPermissionComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-unlock-alt',
          class: 'nav-label',
          title: 'Permissions',
          status: '',
          accessUrl: '/permissions'
        }
      },
      {
        path: 'admin/rooms',
        component: AdminRoomComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-bank',
          class: 'nav-label',
          title: 'Rooms',
          status: '',
          accessUrl: '/rooms'
        }
      },
      {
        path: 'admin/roomStatus',
        component: AdminRoomStatusComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-sliders',
          class: 'nav-label',
          title: 'Room Control',
          status: '',
          accessUrl: '/RoomStatus'
        }
      },
      {
        path: 'admin/auditTrials',
        component: AdminAuditTrailComponent,
        data: {
          inMenu: true,
          icon: 'fa fa-table',
          class: 'nav-label',
          title: 'Audit Trails',
          status: '/auditTrail'
        }
      },
      { 
        path: 'admin/groupMember/:id',
        component: AdminMemberComponent,
        data:{
          inMenu: false
        }
      },
      { path: 'admin/roomAccess/:id', component: AdminRoomAccessComponent},
      {
        path: 'admin/devices',
        component: DevicesComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-th-list',
          class: 'nav-label',
          title: "Devices",
          status: ''
        }
      },
      {
        path: 'admin/appLogs',
        component: AdminAppLogsComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-tasks',
          class: 'nav-label',
          title: 'App Logs',
          status: ''
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-user',
          class: 'nav-label',
          title: 'Users',
          status: ''
        }
      },
      {
        path: 'groups',
        component: GroupComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-group',
          class: 'nav-label',
          title: 'Groups',
          status: ''
        }
      },
      {
        path: 'permissions',
        component: PermissionComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-unlock-alt',
          class: 'nav-label',
          title: 'Permissions',
          status: ''
        }
      },
      { path: 'groupMember/:id', component: MemberComponent },
      {
        path: 'rooms',
        component: RoomComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-bank',
          class: 'nav-label',
          title: 'Rooms',
          status: ''
        }
      },
      {path: 'roomAccess/:id', component: RoomAccessComponent},
      {
        path: 'roomStatus',
        component: RoomStatusComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-sliders',
          class: 'nav-label',
          title: 'Room Status',
          status: ''
        }
      },
      {
        path: 'auditTrials',
        component: AuditTrailComponent,
        data: {
          inMenu: false,
          icon: 'fa fa-table',
          class: 'nav-label',
          title: 'Audit Trails',
          status: ''
        }
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: 
  [
    RouterModule
  ],
  providers: 
  [
    AuthGuard,
    AdminUsersService,
    AdminPermissionService,
    AdminGroupService,
    AdminMembersService,
    AdminRoomService,
    AdminRoomAccessService,
    DevicesService,
    AdminRoomStatusService,
    AdminAuditTrailService,
    AdminAppLogsService,

    UsersService,
    PermissionService,
    GroupService,
    MembersService,
    RoomService,
    RoomAccessService,
    AuditTrailService,
    RoomStatusService,

    SessionService,
    ErrorHandlerService,     
    DashboardService,

    SidebarHeaderComponent  
  ]
})

export class DashboardRoutingModule { }
