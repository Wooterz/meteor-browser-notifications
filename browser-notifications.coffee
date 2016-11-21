const BrowserNotifications;

BrowserNotifications = new Mongo.Collection('browserNotifications');

if (Meteor.isServer) {
  BrowserNotifications.sendNotification = function(opts) {
    var id;
    id = BrowserNotifications.insert({
      userId: opts.userId,
      title: opts.title,
      body: opts.body
    });
    return Meteor.setTimeout(function() {
      return BrowserNotifications.remove(id);
    }, 60000);
  };
  Meteor.publish('notifications', function() {
    return BrowserNotifications.find({
      userId: this.userId
    });
  });
  BrowserNotifications.allow({
    insert: function() {
      return false;
    },
    update: function() {
      return false;
    },
    remove: function(userId, doc) {
      return userId === doc.userId;
    }
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('notifications');
  BrowserNotifications.find().observe({
    added: function(doc) {
      Notification.requestPermission(function(p) {
        return new Notification(doc.title, {
          body: doc.body
        });
      });
      return BrowserNotifications.remove(doc._id);
    }
  });
}
