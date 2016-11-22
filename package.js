Package.describe({
  name: 'wooterz:browsifications',
  version: '0.0.1',
  summary: 'Browser Notifications Api with Meteor.',
  git: 'https://github.com/Wooterz/meteor-browsifications',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo');
  api.export('Browsifications');
  api.addFiles('browsifications.js');
});
