import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarHeaderComponent } from './sidebar-header.component';
import { SidebarHeadersService } from './sidebar-header.service';

@NgModule({
    imports: [ RouterModule, CommonModule, ReactiveFormsModule ],
    declarations: [ SidebarHeaderComponent ],
    exports: [ SidebarHeaderComponent ],
    providers: [SidebarHeadersService ]
})

export class SidebarHeaderModule {}
