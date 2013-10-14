var express = require('express');
var app = express();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var users = require('./users.js');

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use(express.session({ secret: 'SECRET' }));
// app.use(passport.initialize());
// app.use(passport.session());



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
     done(err, user);
   });
  //done(null, {id:1, username:'admin', password:'password'});
});

passport.use(new LocalStrategy(
  function(username, password, done) {
      console.log('trying to find login for username:'+username+' password:'+password);
    users.findByUsername({ username: username }, function (err, user) {
       if (err) { console.log('some kind of error.'); return done(err); }
       if (username !== user.username || password !== user.password) {
         console.log('invalid user or pass.');
         return done(null, false, { message: 'Incorrect username or password.' });
       }
       console.log('login successful');
       return done(null, user);
    });
//    if (username == 'admin' && password == 'admin') {
//      var user = {id: 1, username: 'admin', password: 'admin'};
//      return done(null, user);
//    }
//    else return done(null, false, { message: 'Incorrect username or password.' });
  }
));

app.get('/hello.txt', function(req, res){
  req.session.lastPage = '/awesome';
  res.send('Hello World.');
});
app.get('/private.txt', function(req, res){
  res.send('This page requires a login.');
});
app.get('/users', users.findAll);
app.get('/users/:id', users.findById);

app.post('/login', passport.authenticate('local',
        function (err, user) {
            console.log('next two logs are from callback passed to authenticate function.');
            console.log(err);
            console.log(user);
        }

    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
      //console.log('req:'+req);
      //console.log(res);

  )
    //res.redirect('/private.txt')

);


app.listen(3000);
console.log('Listening on port 3000.');