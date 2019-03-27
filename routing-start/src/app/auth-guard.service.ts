import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated()
        .then(
            (authentication: boolean) => {
                if (authentication) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
    }

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return this.authService.isAuthenticated()
        .then(
            (authentication: boolean) => {
                if (authentication) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
    }

}
