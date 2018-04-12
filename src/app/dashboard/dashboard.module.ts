import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { HttpClientModule } from '@angular/common/http';

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
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard.routes';
import { SidebarHeaderModule } from '../share/sidebar-header/sidebar-header.module';
import { ContentHeaderModule } from '../share/content-header/content-header.module';
import { NavbarModule } from '../share/navbar/navbar.module';
import { TableHeaderModule } from '../share/table-header/table-header.module';
import { FooterModule } from '../share/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
    imports: 
    [      
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        SidebarHeaderModule,
		ContentHeaderModule,
		NavbarModule,
		TableHeaderModule,
		FooterModule,   
		SidebarModule,
        Ng2SearchPipeModule, //including into imports
        Ng2OrderModule, // importing the sorting package here
        NgxPaginationModule,
        HttpClientModule
    ],
    declarations: 
    [ 
    	AdminUsersComponent,
    	AdminPermissionComponent,
    	AdminGroupComponent,
    	AdminMemberComponent,
    	AdminRoomComponent,
    	AdminRoomAccessComponent,
    	AdminAuditTrailComponent,
    	AdminRoomStatusComponent,
        AdminAppLogsComponent,
        UsersComponent,
        PermissionComponent,
        GroupComponent,
        MemberComponent,
        RoomComponent,
        RoomAccessComponent,
        AuditTrailComponent,
        RoomStatusComponent,
    	DashboardComponent
    ]
})

export class DashboardModule{}
