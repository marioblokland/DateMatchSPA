import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router, private notify: NotificationService) {
  }

  /**
   * Resolver, which returns a specific user.
   * @param route Activated route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id).pipe(
      catchError(() => {
        this.notify.error('Oops, somehow we could not retrieve your information');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
