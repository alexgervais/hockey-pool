'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2023-05-18 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.3',
    roundPoints: 'points.rounds.3',
    predictions: [
        {
            section: 'east',
            confrontations: [
                ['fla', 'car']
            ]
        },
        {
            section: 'west',
            confrontations: [
                ['dal', 'vgk']
            ]
        }
    ]
};
