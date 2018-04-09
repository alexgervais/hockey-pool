'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2018-04-11 19:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['tbl', 'njd'],
                ['bos', 'tor']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['wsh', 'cbj'],
                ['pit', 'phi']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['nsh', 'col'],
                ['wpg', 'min']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'lak'],
                ['ana', 'sjs']
            ]
        }
    ]
};
