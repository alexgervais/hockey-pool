var moment = require('moment');

module.exports = {
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