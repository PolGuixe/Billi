Router.configure({   
layoutTemplate:'layout',
loadingTemplate: 'loading',
  //waitOn:'' if we need to wait on something e.g. subscribing to a collection.
})

Router.route('/',{name:'signInUp'})
