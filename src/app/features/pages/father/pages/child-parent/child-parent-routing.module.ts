import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoIdComponent } from './pages/demo-id/demo-id.component';
import { BreadcrumbResolver } from '@core/resolvers/breadcrumb.resolver';
const routes: Routes = [
  {
    path: 'child/:id',
    resolve: {
      breadcrumb: BreadcrumbResolver
    },
    component: DemoIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildParentRoutingModule { }
