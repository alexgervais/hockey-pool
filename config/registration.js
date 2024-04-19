'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2024-04-20 17:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['fla', 'tbl'],
                ['bos', 'tor']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['nyr', 'wsh'],
                ['car', 'nyi']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['dal', 'vgk'],
                ['wpg', 'col']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['van', 'nsh'],
                ['edm', 'lak']
            ]
        }
    ]
};
