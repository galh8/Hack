// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ReportIncComponent } from './report-inc/report-inc.component';
import { UpdateIncComponent } from './update-inc/update-inc.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    ReportIncComponent,
    UpdateIncComponent
  ]
})
export class ThemeModule { }
