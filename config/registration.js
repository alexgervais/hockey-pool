'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2023-05-02 19:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.2',
    roundPoints: 'points.rounds.2',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['fla', 'tor']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['car', 'njd']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['sea', 'dal']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['vgk', 'edm']
            ]
        }
    ]
};
