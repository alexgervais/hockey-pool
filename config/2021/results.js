'use strict';

var roundResults = [];
roundResults[1] = {
    roundPoints: 'points.rounds.1',
    pointScale: 1,
    result: [
        ['col', 4],
        ['vgk', 7],
        ['car', 6],
        ['tbl', 6],
        ['mtl', 7],
        ['wpg', 4],
        ['nyi', 6],
        ['bos', 5]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['col', 4],
                ['vgk', 5],
                ['car', 5],
                ['fla', 7],
                ['tor', 6],
                ['edm', 6],
                ['nyi', 6],
                ['bos', 6]
            ] },
        { name: 'André', selections: [
                ['col', 5],
                ['min', 6],
                ['car', 5],
                ['fla', 7],
                ['tor', 5],
                ['edm', 5],
                ['pit', 6],
                ['bos', 7]
            ] },
        { name: 'Johanne', selections: [
                ['col', 5],
                ['vgk', 6],
                ['car', 5],
                ['tbl', 7],
                ['tor', 6],
                ['edm', 6],
                ['pit', 6],
                ['bos', 6]
            ] },
        { name: 'Mom', selections: [
                ['col', 4],
                ['vgk', 5],
                ['car', 6],
                ['tbl', 7],
                ['tor', 4],
                ['edm', 6],
                ['pit', 5],
                ['wsh', 7]
            ] },
        { name: 'Alex', selections: [
                ['col', 5],
                ['vgk', 5],
                ['car', 6],
                ['tbl', 4],
                ['mtl', 6],
                ['edm', 4],
                ['pit', 7],
                ['bos', 7]
            ] },
        { name: 'Antoine', selections: [
                ['col', 5],
                ['vgk', 4],
                ['car', 6],
                ['tbl', 5],
                ['tor', 6],
                ['edm', 7],
                ['pit', 5],
                ['wsh', 6]
            ] },
        { name: 'Marie-Christine', selections: [
                ['col', 5],
                ['vgk', 6],
                ['car', 5],
                ['tbl', 6],
                ['tor', 5],
                ['edm', 6],
                ['pit', 5],
                ['wsh', 6]
            ] },
        { name: 'Eliane', selections: [
                ['stl', 6],
                ['vgk', 5],
                ['nsh', 4],
                ['tbl', 6],
                ['mtl', 7],
                ['wpg', 6],
                ['pit', 4],
                ['bos', 5]
            ] },
        { name: 'Ophélia', selections: [
                ['col', 4],
                ['vgk', 4],
                ['car', 4],
                ['fla', 4],
                ['tor', 4],
                ['edm', 4],
                ['pit', 4],
                ['wsh', 4]
            ] },
        { name: 'Martin', selections: [
                ['stl', 5],
                ['vgk', 6],
                ['nsh', 5],
                ['tbl', 4],
                ['tor', 5],
                ['edm', 6],
                ['pit', 6],
                ['wsh', 6]
            ] }
    ]
};

roundResults[2] = {
    roundPoints: 'points.rounds.2',
    pointScale: 2,
    result: [
        ['vgk', 6],
        ['tbl', 5],
        ['mtl', 4],
        ['nyi', 6]
    ],
    participants: [
        { name: 'Richard', selections: [
                ['col', 7],
                ['tbl', 6],
                ['mtl', 6],
                ['bos', 6]
            ] },
        { name: 'André', selections: [
                ['col', 7],
                ['car', 7],
                ['mtl', 7],
                ['bos', 6]
            ] },
        { name: 'Johanne', selections: [
                ['col', 6],
                ['tbl', 6],
                ['wpg', 7],
                ['bos', 6]
            ] },
        { name: 'Mom', selections: [
                ['vgk', 7],
                ['car', 6],
                ['wpg', 6],
                ['bos', 5]
            ] },
        { name: 'Alex', selections: [
                ['col', 6],
                ['tbl', 6],
                ['mtl', 7],
                ['nyi', 7]
            ] },
        { name: 'Antoine', selections: [
                ['col', 6],
                ['tbl', 6],
                ['wpg', 6],
                ['nyi', 6]
            ] },
        { name: 'Marie-Christine', selections: [
                ['vgk', 6],
                ['tbl', 5],
                ['mtl', 6],
                ['nyi', 6]
            ] },
        { name: 'Eliane', selections: [
                ['vgk', 6],
                ['tbl', 6],
                ['mtl', 6],
                ['bos', 5]
            ] },
        { name: 'Ophélia', selections: [
                ['col', 4],
                ['car', 4],
                ['wpg', 5],
                ['nyi', 4]
            ] },
        { name: 'Martin', selections: [
                ['vgk', 6],
                ['tbl', 6],
                ['mtl', 7],
                ['nyi', 7]
            ] }
    ]
};

roundResults[3] = {
    roundPoints: 'points.rounds.3',
    pointScale: 3,
    result: [
        ['tbl', 7],
        ['mtl', 6]
    ],
    participants: [
        { name: 'Marie-Christine', selections: [
                ['nyi', 5],
                ['mtl', 6]
            ] },
        { name: 'Eliane', selections: [
                ['tbl', 6],
                ['mtl', 6]
            ] },
        { name: 'Alex', selections: [
                ['nyi', 6],
                ['mtl', 6]
            ] },
        { name: 'Martin', selections: [
                ['tbl', 5],
                ['mtl', 6]
            ] },
        { name: 'Richard', selections: [
                ['tbl', 6],
                ['mtl', 7]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 6],
                ['vgk', 6]
            ] },
        { name: 'Mom', selections: [
                ['nyi', 7],
                ['vgk', 6]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 6],
                ['vgk', 7]
            ] },
        { name: 'Ophélia', selections: [
                ['nyi', 4],
                ['vgk', 4]
            ] },
        { name: 'André', selections: [
                ['tbl', 5],
                ['mtl', 6]
            ] }
    ]
};

roundResults[4] = {
    roundPoints: 'points.rounds.4',
    pointScale: 4,
    result: [
        ['tbl', 5]
    ],
    participants: [
        { name: 'Marie-Christine', selections: [
                ['tbl', 6]
            ] },
        { name: 'Eliane', selections: [
                ['mtl', 6]
            ] },
        { name: 'Martin', selections: [
                ['mtl', 5]
            ] },
        { name: 'Alex', selections: [
                ['tbl', 5]
            ] },
        { name: 'Richard', selections: [
                ['mtl', 6]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 5]
            ] },
        { name: 'André', selections: [
                ['mtl', 6]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 6]
            ] },
        { name: 'Mom', selections: [
                ['mtl', 7]
            ] },
        { name: 'Ophélia', selections: [
                ['tbl', 4]
            ] }
    ]
};

module.exports = roundResults;
