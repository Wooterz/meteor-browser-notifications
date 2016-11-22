# Browser Notifications

Wooterz application prototype of a Browser Notification API package.
(fork form mpaddock:meteor-browser-notifications)

## Installation

``` sh
$ meteor add wooterz:browser-notifications
```

## API

On the server, BrowserNotifications.sendNotification takes an object of options:
```
BrowserNotifications.sendNotification({
  userId: a12345678,
  title: "Notification title",
  body: "Notification body"
});
```

- Notifications are sent to the client upon publication. 
- After 60 seconds, they are removed from the database so users aren't flooded with notifications upon return to the page.


### @TODO  :
- add onclick event
- add sound parameters to constructor
...
