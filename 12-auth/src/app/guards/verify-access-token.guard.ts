import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyAccessTokenGuard implements CanMatch {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.renewAccessToken().pipe(
      tap((renewed) => {
        if (!renewed) this.router.navigate(['/auth/login']);
      })
    );
  }
}
