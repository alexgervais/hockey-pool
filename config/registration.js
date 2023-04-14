'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2023-04-17 19:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'metropolitan',
            confrontations: [
                ['car', 'nyi'],
                ['njd', 'nyr']
            ]
        },
        {
            section: 'atlantic',
            confrontations: [
                ['bos', 'fla'],
                ['tor', 'tbl']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['dal', 'sea'],
                ['col', 'min']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'wpg'],
                ['edm', 'lak']
            ]
        }
    ]
};
