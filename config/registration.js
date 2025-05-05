'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2025/2',
    closingOn: moment('2025-05-05 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.2',
    roundPoints: 'points.rounds.2',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['tor', 'fla']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['wsh', 'car']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['wpg', 'dal']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'edm']
            ]
        }
    ]
};
