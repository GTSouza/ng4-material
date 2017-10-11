import {Injectable} from '@angular/core';

// if you've gone with the local installation approach, you'd use the following:
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/messaging';

declare var Notification: any;

@Injectable()
export class DataService {
    
    constructor() {}

    init() {
        const firebaseConfig = {
            apiKey: "XXX",
            authDomain: "XXX.firebaseapp.com",
            databaseURL: "https://XXX.firebaseio.com",
            projectId: "XXX",
            storageBucket: "XXX.appspot.com",
            messagingSenderId: "XXX"
        };

        firebase.initializeApp(firebaseConfig);

        // Retrieve Firebase Messaging object.
        const messaging = firebase.messaging();

        messaging.requestPermission()
        .then(function() {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            
            // Get Instance ID token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken()
            .then(function(currentToken) {
                if (currentToken) {
                    //sendTokenToServer(currentToken);
                    //updateUIForPushEnabled(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // Show permission UI.
                    //updateUIForPushPermissionRequired();
                    //setTokenSentToServer(false);
                }
            })
            .catch(function(err) {
                console.log('An error occurred while retrieving token. ', err);
                //showToken('Error retrieving Instance ID token. ', err);
                //setTokenSentToServer(false);
            });
        })
        .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
        });

        // Callback fired if Instance ID token is updated.
        messaging.onTokenRefresh(function() {
            messaging.getToken()
            .then(function(refreshedToken) {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                //setTokenSentToServer(false);
                // Send Instance ID token to app server.
                //sendTokenToServer(refreshedToken);
                // ...
            })
            .catch(function(err) {
                console.log('Unable to retrieve refreshed token ', err);
                //showToken('Unable to retrieve refreshed token ', err);
            });
        });

        messaging.onMessage(function(payload) {
            const notificationTitle = payload['notification'].title;
            const notificationOptions = {
                body: payload['notification'].body,
                icon: payload['notification'].icon,        
            };

            if (!('Notification' in window)) {
                console.log("This browser does not support system notifications");
            }
            // Let's check whether notification permissions have already been granted
            else if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification(notificationTitle, notificationOptions);
                notification.onclick = function(event) {
                    event.preventDefault(); // prevent the browser from focusing the Notification's tab
                    window.open(payload['notification'].click_action , '_blank');
                    notification.close();
                }
            }
        });
    }
}