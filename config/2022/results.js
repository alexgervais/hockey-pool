'use strict';

var roundResults = [];
roundResults[1] = {
    roundPoints: 'points.rounds.1',
    pointScale: 1,
    result: [
        ['car', 7],
        ['nyr', 7],
        ['fla', 6],
        ['tbl', 7],
        ['col', 4],
        ['stl', 6],
        ['cgy', 7],
        ['edm', 7]
    ],
    participants: [
        { name: 'Alex', selections: [
                ['bos', 7],
                ['nyr', 4],
                ['wsh', 6],
                ['tbl', 7],
                ['col', 4],
                ['min', 5],
                ['dal', 7],
                ['edm', 6]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['bos', 6],
                ['pit', 5],
                ['wsh', 5],
                ['tbl', 4],
                ['col', 6],
                ['min', 7],
                ['dal', 6],
                ['edm', 6]
            ] },
        { name: 'André', selections: [
                ['car', 6],
                ['pit', 6],
                ['fla', 7],
                ['tbl', 6],
                ['col', 4],
                ['stl', 6],
                ['cgy', 7],
                ['edm', 7]
            ] },
        { name: 'Antoine', selections: [
                ['car', 6],
                ['pit', 6],
                ['fla', 5],
                ['tbl', 7],
                ['col', 5],
                ['min', 6],
                ['cgy', 5],
                ['edm', 7]
            ] },
        { name: 'Arthur', selections: [
                ['bos', 7],
                ['pit', 4],
                ['wsh', 7],
                ['tbl', 4],
                ['nsh', 7],
                ['stl', 4],
                ['dal', 7],
                ['lak', 4]
            ] },
        { name: 'Eliane', selections: [
                ['bos', 5],
                ['pit', 6],
                ['wsh', 6],
                ['tor', 7],
                ['col', 7],
                ['stl', 6],
                ['cgy', 6],
                ['lak', 6]
            ] },
        { name: 'Johanne', selections: [
                ['car', 6],
                ['nyr', 6],
                ['fla', 5],
                ['tbl', 7],
                ['col', 5],
                ['min', 6],
                ['cgy', 5],
                ['edm', 5]
            ] },
        { name: 'Marie-Christine', selections: [
                ['car', 4],
                ['nyr', 7],
                ['fla', 4],
                ['tor', 7],
                ['col', 4],
                ['min', 7],
                ['cgy', 4],
                ['edm', 7]
            ] },
        { name: 'Martin', selections: [
                ['bos', 6],
                ['pit', 6],
                ['wsh', 5],
                ['tbl', 5],
                ['col', 4],
                ['stl', 6],
                ['cgy', 7],
                ['edm', 6]
            ] },
        { name: 'Mom', selections: [
                ['car', 6],
                ['nyr', 7],
                ['fla', 4],
                ['tor', 5],
                ['col', 7],
                ['stl', 7],
                ['cgy', 5],
                ['lak', 6]
            ] },
        { name: 'Ophélia', selections: [
                ['bos', 4],
                ['pit', 5],
                ['wsh', 7],
                ['tbl', 6],
                ['col', 6],
                ['min', 7],
                ['dal', 5],
                ['lak', 5]
            ] },
        { name: 'Richard', selections: [
                ['car', 6],
                ['nyr', 7],
                ['fla', 6],
                ['tor', 7],
                ['col', 5],
                ['stl', 7],
                ['cgy', 5],
                ['edm', 6]
            ] }
    ]
};

roundResults[2] = {
    roundPoints: 'points.rounds.2',
    pointScale: 2,
    result: [
        ['nyr', 7],
        ['tbl', 4],
        ['col', 6],
        ['edm', 5]
    ],
    participants: [
        { name: 'Alex', selections: [
                ['nyr', 7],
                ['fla', 7],
                ['col', 5],
                ['edm', 6]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['nyr', 6],
                ['tbl', 5],
                ['col', 7],
                ['edm', 6]
            ] },
        { name: 'André', selections: [
                ['nyr', 7],
                ['tbl', 6],
                ['stl', 6],
                ['cgy', 7]
            ] },
        { name: 'Antoine', selections: [
                ['car', 6],
                ['fla', 6],
                ['col', 5],
                ['cgy', 6]
            ] },
        { name: 'Arthur', selections: [
                ['nyr', 7],
                ['fla', 4],
                ['stl', 7],
                ['cgy', 4]
            ] },
        { name: 'Eliane', selections: [
                ['nyr', 6],
                ['tbl', 6],
                ['col', 6],
                ['edm', 6]
            ] },
        { name: 'Johanne', selections: [
                ['car', 6],
                ['tbl', 6],
                ['col', 6],
                ['cgy', 6]
            ] },
        { name: 'Marie-Christine', selections: [
                ['car', 4],
                ['tbl', 7],
                ['col', 4],
                ['edm', 7]
            ] },
        { name: 'Martin', selections: [
                ['car', 6],
                ['fla', 7],
                ['col', 5],
                ['edm', 7]
            ] },
        { name: 'Mom', selections: [
                ['car', 6],
                ['fla', 7],
                ['col', 5],
                ['edm', 7]
            ] },
        { name: 'Ophélia', selections: [
                ['car', 4],
                ['fla', 5],
                ['col', 4],
                ['cgy', 5]
            ] },
        { name: 'Richard', selections: [
                ['car', 7],
                ['fla', 6],
                ['col', 6],
                ['cgy', 7]
            ] }
    ]
};

roundResults[3] = {
    roundPoints: 'points.rounds.3',
    pointScale: 3,
    result: [
        ['tbl', 6],
        ['col', 4]
    ],
    participants: [
        { name: 'Alex', selections: [
                ['tbl', 7],
                ['col', 5]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['tbl', 6],
                ['col', 7]
            ] },
        { name: 'André', selections: [
                ['tbl', 6],
                ['col', 7]
            ] },
        { name: 'Antoine', selections: [
                ['tbl', 6],
                ['col', 5]
            ] },
        { name: 'Arthur', selections: [
                ['tbl', 7],
                ['edm', 4]
            ] },
        { name: 'Eliane', selections: [
                ['tbl', 6],
                ['col', 6]
            ] },
        { name: 'Johanne', selections: [
                ['tbl', 5],
                ['edm', 7]
            ] },
        { name: 'Marie-Christine', selections: [
                ['nyr', 4],
                ['col', 7]
            ] },
        { name: 'Martin', selections: [
                ['tbl', 5],
                ['col', 6]
            ] },
        { name: 'Mom', selections: [
                ['tbl', 5],
                ['edm', 6]
            ] },
        { name: 'Ophélia', selections: [
                ['nyr', 7],
                ['col', 7]
            ] },
        { name: 'Richard', selections: [
                ['tbl', 6],
                ['col', 6]
            ] }
    ]
};

roundResults[4] = {
    roundPoints: 'points.rounds.4',
    pointScale: 4,
    result: [
        ['col', 6]
    ],
    participants: [
        { name: 'Alex', selections: [
                ['col', 5]
            ] },
        { name: 'Alexandre G-P', selections: [
                ['col', 7]
            ] },
        { name: 'André', selections: [
                ['col', 7]
            ] },
        { name: 'Antoine', selections: [
                ['col', 6]
            ] },
        { name: 'Arthur', selections: [
                ['tbl', 7]
            ] },
        { name: 'Eliane', selections: [
                ['tbl', 6]
            ] },
        { name: 'Johanne', selections: [
                ['col', 6]
            ] },
        { name: 'Marie-Christine', selections: [
                ['col', 4]
            ] },
        { name: 'Martin', selections: [
                ['col', 6]
            ] },
        { name: 'Mom', selections: [
                ['tbl', 7]
            ] },
        { name: 'Ophélia', selections: [
                ['tbl', 5]
            ] },
        { name: 'Richard', selections: [
                ['tbl', 5]
            ] }
    ]
};

module.exports = roundResults;
