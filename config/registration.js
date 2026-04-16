'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2026/1',
    closingOn: moment('2025-06-04 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['buf', 'bos'],
                ['tbl', 'mtl']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['car', 'ott'],
                ['pit', 'phi']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['col', 'lak'],
                ['dal', 'min']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'uta'],
                ['edm', 'ana']
            ]
        }
    ]
};
