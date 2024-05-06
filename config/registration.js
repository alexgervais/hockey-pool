'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2024/2',
    closingOn: moment('2024-05-07 21:30 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.2',
    roundPoints: 'points.rounds.2',
    predictions: [
        // {
        //     section: 'east',
        //     confrontations: [
        //         ['', '']
        //     ]
        // },
        // {
        //     section: 'west',
        //     confrontations: [
        //         ['', '']
        //     ]
        // },
        {
            section: 'central',
            confrontations: [
                ['dal', 'col']
            ]
        }
    ]
};
