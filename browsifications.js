const Browsifications;

Browsifications = new Mongo.Collection('browsifications');

if (Meteor.isServer) {
  Browsifications.sendNotification = function(opts) {
    var id;
    id = Browsifications.insert({
      userId: opts.userId,
      title: opts.title,
      body: opts.body
    });
    return Meteor.setTimeout(function() {
      return Browsifications.remove(id);
    }, 60000);
  };
  Meteor.publish('notifications', function() {
    return Browsifications.find({
      userId: this.userId
    });
  });
  Browsifications.allow({
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
  Browsifications.find().observe({
    added: function(doc) {
      Notification.requestPermission(function(p) {
        return new Notification(doc.title, {
          body: doc.body
        });
      });
      return Browsifications.remove(doc._id);
    }
  });
}
