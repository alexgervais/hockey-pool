'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2023-04-17 19:01 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['bos', 'fla'],
                ['tor', 'tbl']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['car', 'nyi'],
                ['njd', 'nyr']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['col', 'sea'],
                ['dal', 'min']
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
