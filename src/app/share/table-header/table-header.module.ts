import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableHeaderComponent } from './table-header.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ TableHeaderComponent ],
    exports: [ TableHeaderComponent ]
})

export class TableHeaderModule {}
