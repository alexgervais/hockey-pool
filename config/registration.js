'use strict';

var moment = require('moment');

module.exports = {
    storageBucket: 'misezsurlaglace-predictions',
    storageFolder: '/2025/1',
    closingOn: moment('2025-04-19 18:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['tor', 'ott'],
                ['tbl', 'fla']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['wsh', 'mtl'],
                ['car', 'njd']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['wgp', 'stl'],
                ['dal', 'col']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'min'],
                ['lak', 'edm']
            ]
        }
    ]
};
