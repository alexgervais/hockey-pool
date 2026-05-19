'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2026/3',
    closingOn: moment('2026-05-20 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.3',
    roundPoints: 'points.rounds.3',
    predictions: [
        {
            section: 'east',
            confrontations: [
                ['car', 'mtl']
            ]
        },
        {
            section: 'west',
            confrontations: [
                ['col', 'vgk']
            ]
        }
    ]
};
