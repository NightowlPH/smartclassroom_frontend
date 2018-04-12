import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InternalServerErrorComponent } from './internal-serverError.component';

@NgModule({
    imports: [ RouterModule.forChild
				([
					{path: 'InternalServerError', component: InternalServerErrorComponent },			
				]),
				CommonModule 
		     ],
    declarations: [ InternalServerErrorComponent ],
    exports: [ InternalServerErrorComponent ]
})

export class InternalServerErrorModule {}
