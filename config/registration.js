'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2025/4',
    closingOn: moment('2025-06-04 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.4',
    roundPoints: 'points.rounds.4',
    predictions: [
        {
            section: 'final',
            confrontations: [
                ['fla', 'edm']
            ]
        }
    ]
};
