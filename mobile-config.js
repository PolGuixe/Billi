// This section sets up some basic app metadata,
App.info({
  id: 'com.example.billi',
  name: 'Billi',
  description: 'Billi - Expenses Assistant',
  author: 'Pol Guixe',
  email: 'pol.guixe@gmail.com',
  website: 'http://95.85.47.71'
});

App.accessRule("*");

App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');
