import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

export const apiProtectInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const keycloakService = inject(KeycloakService);

  return new Observable(observer => {
    keycloakService.getToken().then(token => {
      const authReq = token ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      }) : req;

      // Pass the request to the next handler
      next(authReq).subscribe({
        next: event => observer.next(event),       // Emit the HttpEvent
        error: err => observer.error(err),         // Emit errors if any
        complete: () => observer.complete()        // Complete the observer
      });
    }).catch(() => {
      // If token retrieval fails, pass the request as is
      next(req).subscribe({
        next: event => observer.next(event),
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
    });
  });
};
