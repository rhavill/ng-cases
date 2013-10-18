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

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    users.findById(id, function (err, user) {
        done(err, user);
    });
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
       console.log(user);
       return done(null, user);
    });
  }
));

app.get('/hello.txt', function(req, res){
  req.session.lastPage = '/awesome';
  res.send('Hello World.');
});
app.get('/private.txt', function(req, res){
  res.send('This page requires a login.');
});

//app.post('/login', passport.authenticate('local',
//         { failureRedirect: '/hello.txt' }
//  ), function(req, res) {
//        res.redirect('/private.txt');
//        console.log('sweet');
//    }
//)
app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            console.log('notify failed login.');
            return res.redirect('/hello.txt')
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log('notify successful login.')
            return res.redirect('/private.txt');
        });
    })(req, res, next);
});
;

app.listen(3000);
console.log('Listening on port 3000.');