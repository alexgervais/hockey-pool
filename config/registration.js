'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2024/2',
    closingOn: moment('2024-05-05 18:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.2',
    roundPoints: 'points.rounds.2',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['fla', 'bos']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['nyr', 'car']
            ]
        },
        // {
        //     section: 'central',
        //     confrontations: [
        //         ['X', 'col']
        //     ]
        // },
        {
            section: 'pacific',
            confrontations: [
                ['van', 'edm']
            ]
        }
    ]
};
