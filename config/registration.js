'use strict';

var moment = require('moment');

module.exports = {
    closingOn: moment('2013-04-30 20:00 -0400', 'YYYY-MM-DD HH:mm ZZ'),
    round: 'nav.rounds.1',
    roundPoints: 'points.rounds.1',
    predictions: [
        {
            section: 'atlantic',
            confrontations: [
                ['nyr', 'mtl'],
                ['bos', 'ott']
            ]
        },
        {
            section: 'metropolitan',
            confrontations: [
                ['tor', 'wsh'],
                ['cbj', 'pit']
            ]
        },
        {
            section: 'central',
            confrontations: [
                ['nsh', 'chi'],
                ['stl', 'min']
            ]
        },
        {
            section: 'pacific',
            confrontations: [
                ['cgy', 'ana'],
                ['sjs', 'edm']
            ]
        }
    ]
};
