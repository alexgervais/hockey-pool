var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , i18n = require("i18next")
    , moment = require("moment");

i18n.init({ lng: 'fr', fallbackLng: 'fr' });
moment.lang('fr');

var app = express();

// all environments
app.set('port', 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('i18n', i18n);
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
app.get('/predictions', routes.predictions);
app.post('/predictions', routes.predictionsSubmit);
app.get('/results/:round', routes.results);
app.get('/standings', routes.standings);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.use(routes.notFound);