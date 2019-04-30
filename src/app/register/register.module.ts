import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

@NgModule({
    imports: [ RouterModule.forChild
				([
					{path: 'register', component: RegisterComponent },			
				]),
			   CommonModule,
			   HttpClientModule,
			   FormsModule,
			   ReactiveFormsModule
			 ],
    declarations: [ RegisterComponent ],
    exports: [ RegisterComponent ],
    providers: [ RegisterService, CookieService ]
})

export class RegisterModule {}
