'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2021-05-15 19:15 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'west',
            confrontations: [
                ['col', 'stl'],
                ['vgk', 'min']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['car', 'nsh'],
                ['fla', 'tbl']
            ]
        },
        {
            section: 'north',
            confrontations: [
                ['tor', 'mtl'],
                ['edm', 'wpg']
            ]
        },
        {
            section: 'east',
            confrontations: [
                ['pit', 'nyi'],
                ['wsh', 'bos']
            ]
        }
    ]
};
