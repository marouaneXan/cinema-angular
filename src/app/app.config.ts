import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import { initializeKeycloak } from './keycloak-init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { apiProtectInterceptor } from './services/api-protect/api-protect.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(KeycloakAngularModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    provideHttpClient(withInterceptors([apiProtectInterceptor]))
  ],
};
