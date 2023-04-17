'use strict';

var i18n = require('i18next');
var moment = require('moment');
var navbar = require('./navbar');
var roundRegistration = require('../config/registration');
const {Storage} = require('@google-cloud/storage');
const stream = require('stream');

var rounds = [1, 2, 3, 4];

var renderOptions = function (title, req) {

    return {title: title, navbar: navbar, route: (req.route ? req.route.path : '')};
};

exports.index = function (req, res) {

    res.render('index', renderOptions(i18n.t('app.name'), req));
};

exports.predictions = function (req, res) {

    if (!roundRegistration) {
        res.render('comingsoon', renderOptions(i18n.t('nav.predictions'), req));
    } else if (moment().isAfter(roundRegistration.closingOn)) {
        res.render('closed', renderOptions(i18n.t('nav.predictions'), req));
    } else {
        var options = renderOptions(i18n.t('nav.predictions') + ' - ' + i18n.t(roundRegistration.round), req);
        options.closingIn = function () {
            return roundRegistration.closingOn.fromNow();
        };
        options.predictions = roundRegistration.predictions;
        options.points = roundRegistration.roundPoints;
        res.render('predictions', options);
    }
};

exports.predictionsSubmit = function (req, res) {

    const storage = new Storage();
    const bucket = storage.bucket('misezsurlaglace-predictions');
    const file = bucket.file(`prediction-${moment().format()}.json`);

    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(JSON.stringify(req.body));
    passthroughStream.end();

    async function streamFileUpload() {
        passthroughStream.pipe(file.createWriteStream()).on('finish', () => {
            // The file upload is complete
        });
    }

    streamFileUpload().catch(console.error);

    var options = renderOptions(i18n.t('nav.predictions') + ' - ' + i18n.t(roundRegistration.round), req);
    res.render('thankyou', options);
};

exports.results = function (req, res) {

    var roundNo = parseInt(req.params.round);
    var year = parseInt(req.params.year) || '';

    var roundResults;
    try {
        roundResults = require('../config/' + year + '/results');
    } catch (ignored) {
    }

    if (rounds.indexOf(roundNo) > -1) {
        var title = i18n.t('nav.results') + ' - ' + i18n.t('nav.rounds.' + roundNo) + ' ' + year;

        var options = renderOptions(title, req);
        if (roundResults && roundResults[roundNo]) {
            options.roundResults = roundResults[roundNo];
            options.roundResults.participants.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                return nameA.localeCompare(nameB);
            });
            res.render('results', options);
        } else {
            res.render('comingsoon', options);
        }
    } else {
        res.render('404', renderOptions(i18n.t('nav.results'), req));
    }
};

exports.standings = function (req, res) {

    var year = parseInt(req.params.year) || '';

    var standings;
    try {
        standings = require('../config/' + year + '/standings');
    } catch (ignored) {

    }

    var options = renderOptions(i18n.t('nav.standings') + ' ' + year, req);
    if (standings && standings.participants) {
        options.standings = standings;
        options.standings.participants.sort((a, b) => {
            const pointsA = a.points.reduce((a, b) => a + b, 0);
            const pointsB = b.points.reduce((a, b) => a + b, 0);
            return pointsB - pointsA;
        });
        res.render('standings', options);
    } else {
        res.render('comingsoon', options);
    }
};

exports.notFound = function (req, res) {

    res.render('404', renderOptions('404', req));
};
