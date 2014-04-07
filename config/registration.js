var moment = require('moment');

module.exports = {
    closingOn: moment("2013-04-30 20:00 -0400", "YYYY-MM-DD HH:mm ZZ"),
    round: "nav.rounds.1",
    roundPoints: "points.rounds.1",
    predictions: [
        {
            section: "atlantic",
            confrontations: [
                ["cbj", "bos"],
                ["tbl", "mtl"]
            ]
        },
        {
            section: "metropolitan",
            confrontations: [
                ["det", "pit"],
                ["phi", "nyr"]
            ]
        },
        {
            section: "central",
            confrontations: [
                ["dal", "stl"],
                ["chi", "col"]
            ]
        },
        {
            section: "pacific",
            confrontations: [
                ["min", "ana"],
                ["lak", "sjs"]
            ]
        }
    ]
};