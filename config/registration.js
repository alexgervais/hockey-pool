'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2018-08-11 15:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'east',
            confrontations: [
                ['phi', 'mtl'],
                ['tbl', 'col'],
                ['wsh', 'nyi'],
                ['bos', 'car']
            ]
        },
        {
            section: 'west',
            confrontations: [
                ['vgk', 'chi'],
                ['col', 'ari'],
                ['dal', 'cgy'],
                ['stl', 'van']
            ]
        }
    ]
};
