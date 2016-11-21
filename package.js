Package.describe({
  name: 'wooterz:browser-notifications',
  version: '0.0.1',
  summary: 'Browser Notifications Api with Meteor.',
  git: 'https://github.com/Wooterz/meteor-browser-notifications',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo');
  api.export('BrowserNotifications');
  api.addFiles('browser-notifications.js');
});
