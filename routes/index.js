var i18n = require("i18next"),
    moment = require('moment'),
    fs = require('fs');

var navbar = [
    {key: "nav.predictions", location: "/predictions"},
    {key: "nav.results",
        sub: [
            {key: "nav.rounds.1", location: "/results/1"},
            {key: "nav.rounds.2", location: "/results/2"},
            {key: "nav.rounds.3", location: "/results/3"},
            {key: "nav.rounds.4", location: "/results/4"},
        ]},
    {key: "nav.standings", location: "/standings"},
];

var rounds = [1, 2, 3, 4];
var roundResults = [];
roundResults[0] = {
    roundPoints: "points.rounds.1",
    pointScale: 1,
    result: [
        ["mtl", 4],
       // [],
       // ["tor", 5]
    ],
    participants: [
        { name: "alex", selections: [
            ["mtl", 4],
            ["nyr", 4],
            ["bos", 7]
        ] },
        { name: "julie", selections: [
            ["mtl", 7],
            ["nyr", 6],
            ["tor", 5]
        ] }
    ]};

var roundRegistration = {
    closingOn: moment("2013-04-30 20:00 -0400", "YYYY-MM-DD HH:mm ZZ"),
    round: "nav.rounds.1",
    roundPoints: "points.rounds.1",
    predictions: [
        {
            section: "east",
            confrontations: [
                ["nyi", "pit"],
                ["ott", "mtl"],
                ["nyr", "wsh"],
                ["tor", "bos"]
            ]
        },
        {
            section: "west",
            confrontations: [
                ["min", "chi"],
                ["det", "ana"],
                ["sjs", "van"],
                ["lak", "stl"]
            ]
        }
    ]
};

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
    res.render('standings', renderOptions(i18n.t("nav.standings"), req));
};

exports.notFound = function (req, res) {
    res.render('404', renderOptions("404", req));
};