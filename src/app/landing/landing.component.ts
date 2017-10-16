import { Component } from '@angular/core';

import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private fb: FacebookService) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '267045017074473', //
      cookie     : true,
      xfbml      : true,
      version: 'v2.8' // v2.8
    });

  }

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
   login() {
     this.fb.login()
     .then((res: LoginResponse) => {
       console.log('Logged in', res);
     })
     .catch(this.handleError);
   }

  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
   private handleError(error) {
     console.error('Error processing action', error);
   }

 }
