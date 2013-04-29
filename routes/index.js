var i18n = require("i18next"),
    moment = require('moment'),
    fs = require('fs'),
    navbar = require('./navbar'),
    roundResults = require('../config/results'),
    roundRegistration = require('../config/registration'),
    standings = require('../config/standings');

var rounds = [1, 2, 3, 4];

var renderOptions = function (title, req) {
    return { title: title, navbar: navbar, route: (req.route ? req.route.path : '') }
};

exports.index = function (req, res) {
    res.render('index', renderOptions(i18n.t("app.name"), req));
};

exports.predictions = function (req, res) {
    if (typeof roundRegistration == 'undefined') {
        res.render('comingsoon', renderOptions(i18n.t("nav.predictions"), req));
    } else if (moment().isAfter(roundRegistration.closingOn)) {
        res.render('closed', renderOptions(i18n.t("nav.predictions"), req));
    } else {
        var options = renderOptions(i18n.t("nav.predictions") + ' - ' + i18n.t(roundRegistration.round), req);
        options.closingIn = function () {
            return roundRegistration.closingOn.fromNow();
        };
        options.predictions = roundRegistration.predictions;
        options.points = roundRegistration.roundPoints;
        res.render('predictions', options);
    }
};

exports.predictionsSubmit = function (req, res) {
    console.log(req.body);

    var stream = fs.createWriteStream("predictions.txt", {'flags': 'a'});
    stream.once('open', function (fd) {
        stream.write(moment().format());
        stream.write('\n');
        stream.write(JSON.stringify(req.body));
        stream.write('\n');
        stream.end();
    });

    var options = renderOptions(i18n.t("nav.predictions") + ' - ' + i18n.t(roundRegistration.round), req);
    res.render('thankyou', options);
};

exports.results = function (req, res) {
    var roundNo = parseInt(req.params.round);

    if (rounds.indexOf(roundNo) > -1) {
        var title = i18n.t("nav.results") + ' - ' + i18n.t("nav.rounds." + roundNo);

        var options = renderOptions(title, req);
        if (typeof roundResults[roundNo] != 'undefined') {
            options.roundResults = roundResults[roundNo];
            res.render('results', options);
        } else {
            res.render('comingsoon', options);
        }
    } else {
        res.render('404', renderOptions(i18n.t("nav.results"), req));
    }
};

exports.standings = function (req, res) {

    var options = renderOptions(i18n.t("nav.standings"), req);
    if (typeof standings != 'undefined' && standings.participants) {
        options.standings = standings;
        res.render('standings', options);
    } else {
        res.render('comingsoon', options);
    }
};

exports.notFound = function (req, res) {
    res.render('404', renderOptions("404", req));
};