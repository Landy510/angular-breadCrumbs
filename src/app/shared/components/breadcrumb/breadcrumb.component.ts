import { BreadcrumbService } from '@core/services/components/breadcrumb.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <p>This is a BreadCrumb compo</p>
    <ng-container *ngIf="items.length !== 0">
      <a
        *ngFor="let item of items; let i=index"
        [routerLink]="item.url"
      >
        {{ item.label }}
        <ng-container *ngIf="i !== items.length - 1">></ng-container>
      </a>
    </ng-container>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items: any[] = [];

  constructor(private _breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this._breadcrumbService.breadCrumbs$.subscribe(res => {
      this.items = res;
    })
  }
}

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadCrumbModule {}
