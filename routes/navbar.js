module.exports = [
    {direction: "pull-left", navitems: [
        {key: "nav.predictions", location: "/predictions"},
        {key: "nav.results", sub: [
            {key: "nav.rounds.1", location: "/results/1"},
            {key: "nav.rounds.2", location: "/results/2"},
            {key: "nav.rounds.3", location: "/results/3"},
            {key: "nav.rounds.4", location: "/results/4"}
        ]},
        {key: "nav.standings", location: "/standings"}
    ]},
    {direction: "pull-right", navitems: [
        {key: "2013", class: "navbar-right", sub: [
            {key: "nav.rounds.1", location: "/2013/results/1"},
            {key: "nav.rounds.2", location: "/2013/results/2"},
            {key: "nav.rounds.3", location: "/2013/results/3"},
            {key: "nav.rounds.4", location: "/2013/results/4"},
            {key: "nav.standings", location: "/2013/standings"}
        ]}
    ]},
    {direction: "pull-right", navitems: [
        {key: "2014", class: "navbar-right", sub: [
            {key: "nav.rounds.1", location: "/2014/results/1"},
            {key: "nav.rounds.2", location: "/2014/results/2"},
            {key: "nav.rounds.3", location: "/2014/results/3"},
            {key: "nav.rounds.4", location: "/2014/results/4"},
            {key: "nav.standings", location: "/2014/standings"}
        ]}
    ]}
];
