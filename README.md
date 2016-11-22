# Browser Notifications

Wooterz application prototype of a Browser Notification API package.
(massive fork of mpaddock:meteor-browser-notifications)

## Installation

``` sh
$ meteor add wooterz:browsifications
```

## API

On the server, Browsifications.sendNotification takes an object of options:
```
Browsifications.sendNotification({
  userId: a12345678,
  title: "Notification title",
  body: "Notification body"
});
```

- Notifications are sent to the client upon publication. 
- After 60 seconds, they are removed from the database.


### @TODO  :
- add onclick event
- add sound parameters to constructor
...
