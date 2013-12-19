var container, store;

module('User', {
  setup: function() {
    container = new Ember.Container();
    container.register('store:main', DS.Store);
    container.register('model:user', App.User);

    store = container.lookup('store:main');
  }
});

test('displayName', function() {

  var user;

  Ember.run(function(){
    user = store.createRecord('user', {
      firstName: 'Ryan',
      lastName: 'Yogan'
    });
  });

  equal(user.get('displayName'), 'Ryan Yogan');
});

test('gravatarURL', function() {
  var user;
  
  Ember.run(function() {
    user = store.createRecord('user', {
      email: 'ryayogan@gmail.com'
    });
  });

  equal(user.get('gravatarURL'),
        'http://www.gravatar.com/avatar/96622d49e2c8501571bc1e4bfd412bdc.jpg?s=80');
});

test('gravatarURL with blank email', function() {
  var user;

  Ember.run(function() {
    user = store.createRecord('user', {
      email: ''
    });
  });

  equal(user.get('gravatarURL'),
       'http://www.gravatar.com/avatar/000000000000000000000000.jpg?s=80');
});

test('gravatarURL with undefined email', function() {
  var user;
  
  Ember.run(function() {
    user = store.createRecord('user');
  });

  equal(user.get('gravatarURL'),
       'http://www.gravatar.com/avatar/000000000000000000000000.jpg?s=80');
});
