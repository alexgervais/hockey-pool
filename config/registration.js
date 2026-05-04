'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2026/2',
    closingOn: moment('2026-05-04 21:30 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.2',
    roundPoints: 'points.rounds.2',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['buf', 'mtl']
            ]
        },
        // {
        //     section: 'metropolitan',
        //     confrontations: [
        //         ['car', 'phi']
        //     ]
        // },
        // {
        //     section: 'central',
        //     confrontations: [
        //         ['col', 'min']
        //     ]
        // },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'ana']
            ]
        }
    ]
};
