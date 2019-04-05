import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ContentHeaderService } from './content-header.service';

import { ContentHeaderComponent } from './content-header.component';
import { SessionService } from '../../session.service';

@NgModule
({
    imports: [ RouterModule, CommonModule ],
    declarations: [ ContentHeaderComponent ],
    exports: [ ContentHeaderComponent ],
    providers: [CookieService, ContentHeaderService,SessionService]
})

export class ContentHeaderModule {}
