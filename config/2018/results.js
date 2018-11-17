'use strict';

var roundResults = [];
roundResults[1] = {
    roundPoints: 'points.rounds.1',
    pointScale: 1,
    result: [
        ['tbl', 5],
        ['bos', 7],
        ['wsh', 6],
        ['pit', 6],
        ['nsh', 6],
        ['wpg', 5],
        ['vgk', 4],
        ['sjs', 4]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['tbl', 6],
                ['tor', 7],
                ['wsh', 6],
                ['phi', 7],
                ['nsh', 5],
                ['wpg', 6],
                ['lak', 6],
                ['sjs', 6]
            ] },
        { name: 'André', selections: [
                ['tbl', 5],
                ['tor', 6],
                ['wsh', 7],
                ['pit', 7],
                ['nsh', 5],
                ['wpg', 5],
                ['vgk', 6],
                ['ana', 7]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 5],
                ['bos', 6],
                ['wsh', 6],
                ['pit', 6],
                ['nsh', 5],
                ['wpg', 5],
                ['lak', 7],
                ['sjs', 6]
            ] },
        { name: 'Mom', selections: [
                ['tbl', 4],
                ['tor', 5],
                ['wsh', 7],
                ['pit', 5],
                ['nsh', 5],
                ['wpg', 6],
                ['vgk', 5],
                ['ana', 7]
            ] },
        { name: 'Alex', selections: [
                ['tbl', 4],
                ['bos', 7],
                ['cbj', 6],
                ['phi', 7],
                ['nsh', 4],
                ['min', 5],
                ['vgk', 6],
                ['sjs', 6]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 5],
                ['bos', 6],
                ['cbj', 7],
                ['pit', 7],
                ['nsh', 5],
                ['wpg', 6],
                ['vgk', 6],
                ['ana', 7]
            ] },
        { name: 'Joanie', selections: [
                ['tbl', 5],
                ['bos', 4],
                ['wsh', 6],
                ['pit', 5],
                ['nsh', 4],
                ['min', 7],
                ['lak', 5],
                ['sjs', 6]
            ] },
        { name: 'Eliane', selections: [
                ['tbl', 6],
                ['bos', 4],
                ['wsh', 5],
                ['pit', 6],
                ['nsh', 7],
                ['min', 6],
                ['lak', 5],
                ['ana', 6]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['tbl', 5],
                ['tor', 6],
                ['wsh', 7],
                ['pit', 7],
                ['nsh', 5],
                ['wpg', 5],
                ['vgk', 6],
                ['ana', 7]
            ] },
        { name: 'Martin', selections: [
                ['tbl', 5],
                ['bos', 4],
                ['wsh', 5],
                ['pit', 6],
                ['nsh', 7],
                ['wpg', 6],
                ['vgk', 5],
                ['ana', 6]
            ] }
    ]
};

roundResults[2] = {
    roundPoints: 'points.rounds.2',
    pointScale: 2,
    result: [
        ['tbl', 5],
        ['wsh', 6],
        ['wpg', 7],
        ['vgk', 6]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['tbl', 7],
                ['pit', 6],
                ['wpg', 7],
                ['vgk', 7]
            ] },
        { name: 'André', selections: [
                ['tbl', 5],
                ['pit', 6],
                ['nsh', 7],
                ['vgk', 6]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 7],
                ['pit', 7],
                ['nsh', 7],
                ['sjs', 7]
            ] },
        { name: 'Mom', selections: [
                ['tbl', 5],
                ['pit', 6],
                ['nsh', 6],
                ['vgk', 6]
            ] },
        { name: 'Alex', selections: [
                ['tbl', 6],
                ['pit', 6],
                ['nsh', 4],
                ['vgk', 6]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 5],
                ['pit', 6],
                ['nsh', 6],
                ['vgk', 6]
            ] },
        { name: 'Joanie', selections: [
                ['tbl', 6],
                ['pit', 4],
                ['nsh', 5],
                ['sjs', 7]
            ] },
        { name: 'Eliane', selections: [
                ['bos', 5],
                ['pit', 6],
                ['wpg', 7],
                ['vgk', 6]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['tbl', 6],
                ['wsh', 7],
                ['nsh', 6],
                ['vgk', 6]
            ] },
        { name: 'Martin', selections: [
                ['tbl', 6],
                ['pit', 6],
                ['wpg', 7],
                ['sjs', 5]
            ] }
    ]
};

roundResults[3] = {
    roundPoints: 'points.rounds.3',
    pointScale: 3,
    result: [
        ['wsh', 7],
        ['vgk', 5]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['tbl', 7],
                ['wpg', 6]
            ] },
        { name: 'André', selections: [
                ['tbl', 6],
                ['wpg', 7]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 6],
                ['wpg', 6]
            ] },
        { name: 'Mom', selections: [
                ['tbl', 6],
                ['wpg', 7]
            ] },
        { name: 'Alex', selections: [
                ['tbl', 6],
                ['vgk', 5]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 6],
                ['vgk', 6]
            ] },
        { name: 'Joanie', selections: [
                ['tbl', 5],
                ['wpg', 6]
            ] },
        { name: 'Eliane', selections: [
                ['tbl', 6],
                ['wpg', 5]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['wsh', 7],
                ['vgk', 6]
            ] },
        { name: 'Martin', selections: [
                ['wsh', 6],
                ['wpg', 6]
            ] },
        { name: 'Sandy', selections: [
                ['tbl', 6],
                ['vgk', 5]
            ] }
    ]
};

roundResults[4] = {
    roundPoints: 'points.rounds.4',
    pointScale: 4,
    result: [
        ['wsh', 5]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['vgk', 6]
            ] },
        { name: 'André', selections: [
                ['wsh', 4]
            ] },
        { name: 'Johanne', selections: [
                ['wsh', 6]
            ] },
        { name: 'Mom', selections: [
                ['vgk', 4]
            ] },
        { name: 'Alex', selections: [
                ['vgk', 5]
            ] },
        { name: 'Antoine', selections: [
                ['vgk', 6]
            ] },
        { name: 'Joanie', selections: [
                ['vgk', 5]
            ] },
        { name: 'Eliane', selections: [
                ['wsh', 6]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['vgk', 6]
            ] },
        { name: 'Martin', selections: [
                ['wsh', 7]
            ] },
        { name: 'Sandy', selections: [
                ['vgk', 4]
            ] }
    ]
};

module.exports = roundResults;
