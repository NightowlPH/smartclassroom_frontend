import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [ RouterModule.forChild
				([
					{path: 'PageNotFound', component: PageNotFoundComponent },			
				]),
				CommonModule 
		     ],
    declarations: [ PageNotFoundComponent ],
    exports: [ PageNotFoundComponent ]
})

export class PageNotFoundModule {}
