'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2023-06-03 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.4',
    roundPoints: 'points.rounds.4',
    predictions: [
        {
            section: 'final',
            confrontations: [
                ['fla', 'vgk']
            ]
        }
    ]
};
