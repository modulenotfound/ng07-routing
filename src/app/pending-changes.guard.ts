import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FirstComponent} from './first/first.component';

@Injectable()
export class PendingChangesGuard implements CanDeactivate<FirstComponent> {
  canDeactivate(component: FirstComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you really want to switch?');
  }
}
