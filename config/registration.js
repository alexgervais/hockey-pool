'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2024/3',
    closingOn: moment('2024-05-22 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.3',
    roundPoints: 'points.rounds.3',
    predictions: [
        {
            section: 'east',
            confrontations: [
                ['fla', 'nyr']
            ]
        },
        {
            section: 'west',
            confrontations: [
                ['dal', 'edm']
            ]
        }
    ]
};
