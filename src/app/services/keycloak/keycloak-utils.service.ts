import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class KeycloakUtilsService {

  constructor(private kcS:KeycloakService) { }

  // Check if user has a specific role
  hasRole(role: string): boolean {
    return this.kcS.getUserRoles().includes(role);
  }

  // Check if user has any of the provided roles
  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  // Get all user roles
  getUserRoles(): string[] {
    return this.kcS.getUserRoles();
  }
}
