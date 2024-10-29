import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return (): Promise<boolean> =>
      keycloak.init({
        config: {
          url: 'http://localhost:9090',
          realm: 'cinema-realm',
          clientId: 'cinema-client-id'
        },
        initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: true,
            pkceMethod: 'S256',
            redirectUri: "http://localhost:4200"
        },
      });
  }
  
