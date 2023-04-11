import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father.component';

const routes: Routes = [
  {
    path: '',
    component: FatherComponent,
    data: {
      breadcrumb: 'father'
    },
    children: [
      {
        path: 'child-parent',
        data: {
          breadcrumb: 'child-parent',
        },
        loadChildren: () => import('./pages/child-parent/child-parent.module').then(m => m.ChildParentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatherRoutingModule { }
