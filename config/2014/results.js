'use strict';

var roundResults = [];
roundResults[1] = {
    roundPoints: 'points.rounds.1',
    pointScale: 1,
    result: [
        ['bos', 5],
        ['mtl', 4],
        ['pit', 6],
        ['nyr', 7],
        ['min', 7],
        ['chi', 6],
        ['ana', 6],
        ['lak', 7]
    ],
    participants: [
        { name: 'Richard', selections: [
            ['bos', 6],
            ['mtl', 6],
            ['cbj', 6],
            ['nyr', 6],
            ['min', 7],
            ['stl', 6],
            ['ana', 5],
            ['sjs', 6]
        ] },
        { name: 'André', selections: [
            ['bos', 5],
            ['mtl', 6],
            ['pit', 5],
            ['nyr', 7],
            ['col', 6],
            ['chi', 7],
            ['ana', 4],
            ['sjs', 5]
        ] },
        { name: 'Johanne', selections: [
            ['bos', 5],
            ['mtl', 7],
            ['pit', 6],
            ['nyr', 6],
            ['col', 6],
            ['chi', 6],
            ['ana', 5],
            ['lak', 7]
        ] },
        { name: 'Mom', selections: [
            ['bos', 4],
            ['mtl', 6],
            ['pit', 5],
            ['phi', 7],
            ['col', 5],
            ['stl', 7],
            ['ana', 6],
            ['sjs', 6]
        ] },
        { name: 'Alex', selections: [
            ['bos', 4],
            ['mtl', 5],
            ['pit', 6],
            ['nyr', 6],
            ['col', 5],
            ['chi', 7],
            ['ana', 4],
            ['sjs', 6]
        ] },
        { name: 'Julie', selections: [
            ['bos', 7],
            ['mtl', 6],
            ['pit', 6],
            ['nyr', 7],
            ['col', 6],
            ['chi', 7],
            ['ana', 6],
            ['sjs', 7]
        ] },
        { name: 'Antoine', selections: [
            ['bos', 5],
            ['mtl', 6],
            ['pit', 5],
            ['phi', 7],
            ['col', 6],
            ['stl', 7],
            ['ana', 5],
            ['sjs', 6]
        ] },
        { name: 'E1000', selections: [
            ['bos', 5],
            ['tbl', 5],
            ['pit', 5],
            ['phi', 6],
            ['col', 6],
            ['stl', 6],
            ['ana', 5],
            ['lak', 6]
        ] },
        { name: 'Catherine', selections: [
            ['det', 7],
            ['mtl', 7],
            ['pit', 5],
            ['nyr', 7],
            ['min', 7],
            ['chi', 7],
            ['ana', 5],
            ['sjs', 5]
        ] },
        { name: 'Éliane', selections: [
            ['det', 6],
            ['mtl', 6],
            ['pit', 5],
            ['nyr', 7],
            ['col', 6],
            ['chi', 6],
            ['ana', 7],
            ['lak', 7]
        ] },
        { name: 'Martin', selections: [
            ['bos', 5],
            ['mtl', 6],
            ['pit', 6],
            ['phi', 7],
            ['col', 6],
            ['chi', 7],
            ['ana', 4],
            ['sjs', 6]
        ] }
    ]
};

roundResults[2] = {
    roundPoints: 'points.rounds.2',
    pointScale: 2,
    result: [
        ['mtl', 7],
        ['nyr', 7],
        ['chi', 6],
        ['lak', 7]
    ],
    participants: [
        { name: 'Richard', selections: [
            ['mtl', 6],
            ['nyr', 6],
            ['chi', 5],
            ['lak', 7]
        ] },
        { name: 'André', selections: [
            ['mtl', 7],
            ['nyr', 6],
            ['chi', 6],
            ['ana', 7]
        ] },
        { name: 'Johanne', selections: [
            ['bos', 7],
            ['nyr', 6],
            ['chi', 6],
            ['lak', 6]
        ] },
        { name: 'Mom', selections: [
            ['mtl', 6],
            ['nyr', 6],
            ['min', 6],
            ['lak', 5]
        ] },
        { name: 'Alex', selections: [
            ['mtl', 6],
            ['nyr', 7],
            ['chi', 6],
            ['lak', 7]
        ] },
        { name: 'Julie', selections: [
            ['mtl', 7],
            ['nyr', 6],
            ['chi', 7],
            ['ana', 7]
        ] },
        { name: 'Antoine', selections: [
            ['mtl', 6],
            ['pit', 5],
            ['chi', 5],
            ['ana', 6]
        ] },
        { name: 'E1000', selections: [
            ['bos', 5],
            ['nyr', 7],
            ['chi', 6],
            ['ana', 6]
        ] },
        { name: 'Catherine', selections: [
            ['mtl', 5],
            ['pit', 6],
            ['chi', 7],
            ['ana', 7]
        ] },
        { name: 'Éliane', selections: [
            ['mtl', 5],
            ['nyr', 6],
            ['chi', 5],
            ['lak', 7]
        ] },
        { name: 'Martin', selections: [
            ['bos', 6],
            ['pit', 7],
            ['chi', 6],
            ['ana', 6]
        ] }
    ]
};

roundResults[3] = {
    roundPoints: 'points.rounds.3',
    pointScale: 3,
    result: [
        ['nyr', 6],
        ['lak', 7]
    ],
    participants: [
        { name: 'Richard', selections: [
            ['mtl', 7],
            ['chi', 7]
        ] },
        { name: 'André', selections: [
            ['mtl', 6],
            ['lak', 7]
        ] },
        { name: 'Johanne', selections: [
            ['mtl', 6],
            ['chi', 6]
        ] },
        { name: 'Mom', selections: [
            ['mtl', 7],
            ['chi', 7]
        ] },
        { name: 'Alex', selections: [
            ['mtl', 5],
            ['lak', 7]
        ] },
        { name: 'Julie', selections: [
            ['mtl', 6],
            ['chi', 6]
        ] },
        { name: 'Antoine', selections: [
            ['mtl', 6],
            ['chi', 6]
        ] },
        { name: 'E1000', selections: [
            ['mtl', 6],
            ['lak', 6]
        ] },
        { name: 'Catherine', selections: [
            ['mtl', 6],
            ['chi', 6]
        ] },
        { name: 'Éliane', selections: [
            ['mtl', 6],
            ['lak', 5]
        ] },
        { name: 'Martin', selections: [
            ['mtl', 5],
            ['chi', 6]
        ] }
    ]
};

roundResults[4] = {
    roundPoints: 'points.rounds.4',
    pointScale: 4,
    result: [
        ['lak', 5]
    ],
    participants: [
        { name: 'Richard', selections: [
            ['nyr', 7]
        ] },
        { name: 'André', selections: [
            ['lak', 7]
        ] },
        { name: 'Johanne', selections: [
            ['nyr', 7]
        ] },
        { name: 'Mom', selections: [
            ['lak', 5]
        ] },
        { name: 'Alex', selections: [
            ['lak', 5]
        ] },
        { name: 'Julie', selections: [
            ['lak', 4]
        ] },
        { name: 'Antoine', selections: [
            ['lak', 5]
        ] },
        { name: 'E1000', selections: [
            ['lak', 4]
        ] },
        { name: 'Catherine', selections: [
            ['lak', 6]
        ] },
        { name: 'Éliane', selections: [
            ['lak', 6]
        ] },
        { name: 'Martin', selections: [
            ['lak', 5]
        ] }
    ]
};

module.exports = roundResults;
