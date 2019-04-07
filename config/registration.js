'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2018-04-10 19:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['tbl', 'cbj'],
                ['bos', 'tor']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['wsh', 'car'],
                ['nyi', 'pit']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['stl', 'dal'],
                ['nsh', 'wpg']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['cgy', 'col'],
                ['sjs', 'vgk']
            ]
        }
    ]
};
