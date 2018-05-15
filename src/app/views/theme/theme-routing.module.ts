import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import {ReportIncComponent} from './report-inc/report-inc.component';
import {UpdateIncComponent} from './update-inc/update-inc.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: 'report-incident',
        component: ReportIncComponent,
        data: {
          title: 'Report incident'
        }
      },
      {
        path: 'update-incident',
        component: UpdateIncComponent,
        data: {
          title: 'update incident'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
