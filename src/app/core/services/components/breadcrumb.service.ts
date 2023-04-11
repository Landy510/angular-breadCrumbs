import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { uniqBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private _breadCrumbs$ = new BehaviorSubject<any[]>([]);
  breadCrumbs$ = this._breadCrumbs$.asObservable();

  constructor(private _router: Router) {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => {
      const root = this._router.routerState.snapshot.root;
      const breadCrumbs: any[] = [];

      this._addBreadCrumb(root, [], breadCrumbs);

      const uniqBreadCrumbs = uniqBy(breadCrumbs, (item) => {
        return item.url
      })
      this._breadCrumbs$.next(uniqBreadCrumbs);
    })
  }

  _addBreadCrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadCrumbs: any[]
  ): void {
    if(route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));
      if(route.data['breadcrumb']) {
        const item = {
          label: route.data['breadcrumb'],
          url: '/' + routeUrl.join('/'),
          disabled: route.data['disabledBreadCrumb']
        }
        breadCrumbs.push(item);
      }
      this._addBreadCrumb(route.firstChild as ActivatedRouteSnapshot, routeUrl, breadCrumbs);
    }
  }
}

