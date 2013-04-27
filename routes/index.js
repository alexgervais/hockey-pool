var navbar = [
    {key: "nav.predictions", location: "/predictions"},
    {key: "nav.results",
        sub: [
            {key: "nav.rounds.1", location: "/results?round=1"},
            {key: "nav.rounds.2", location: "/results?round=2"},
            {key: "nav.rounds.3", location: "/results?round=3"},
            {key: "nav.rounds.4", location: "/results?round=4"},
        ]},
    {key: "nav.standings", location: "/standings"},
];

exports.index = function (req, res) {
    res.render('index', { title: 'Hockey Pool', navbar: navbar, route: req.route.path });
};

exports.predictions = function (req, res) {
    res.render('predictions', { navbar: navbar, route: req.route.path });
};

exports.results = function (req, res) {
    res.render('results', { navbar: navbar, route: req.route.path });
};

exports.standings = function (req, res) {
    res.render('standings', { navbar: navbar, route: req.route.path });
};