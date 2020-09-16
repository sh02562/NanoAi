import { Injectable } from '@angular/core';
import * as Auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0;
  constructor() {
    this.auth0 = new Auth0.WebAuth({
      clientID: 'QDUtJlf8VcOiKEtLvrS2EyRvCROeGkD7',
      domain: 'dev-ybc5p0id.auth0.com',
      responseType: 'token id_token',
      redirectUri: `${location.protocol}//${location.host}/login-callback`,
      scope: 'openid profile',
    });
  }
  /** defining signup functionality for user signup */
  signUp() {    
    return this.auth0;
  }
  /** defining signin functionality for user signIn */
  signIn(email, password) {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      email: email.value,
      password: password.value,
      scope: 'openid'
    });
  }
  /** defining function for google logged in */
  oAuthGoogleLogin() {
    // Trigger login with google
    this.auth0.authorize({
      connection: 'google-oauth2'
    });
  }
  /** defining function for twitter login */
  oAuthTwitterLogin() {
    // Trigger login popup with twitter
    this.auth0.popup.authorize({
      connection: 'twitter'
    });
  }
}
