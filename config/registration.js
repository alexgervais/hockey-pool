'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2022-05-02 19:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'metropolitan',
            confrontations: [
                ['car', 'bos'],
                ['nyr', 'pit']
            ]
        },
        {
            section: 'atlantic',
            confrontations: [
                ['fla', 'wsh'],
                ['tor', 'tbl']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['col', 'nsh'],
                ['min', 'stl']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['cal', 'dal'],
                ['edm', 'lak']
            ]
        }
    ]
};
