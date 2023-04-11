import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbResolver implements Resolve<string | null> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string | null> {
    const id = route.params['id']
    return of(id);
  }
}
