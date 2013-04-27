var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path')
    , i18n = require("i18next");

i18n.init({ lng: 'fr' });

var app = express();

// all environments
app.set('port', 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(i18n.handle);
app.use(express.methodOverride());
app.use(express.cookieParser('a not-so-secret secret key'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

i18n.registerAppHelper(app);

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
