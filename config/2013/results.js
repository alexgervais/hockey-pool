'use strict';

var roundResults = [];

roundResults[4] = {
    roundPoints: 'points.rounds.4',
    pointScale: 4,
    result: [['chi',6]],
    participants: [
        { name: 'Richard', selections: [
            ['bos',6]
        ] },
        { name: 'André', selections: [
            ['bos',6]
        ] },
        { name: 'Johanne', selections: [
            ['chi',7]
        ] },
        { name: 'Mom', selections: [
            ['bos',6]
        ] },
        { name: 'Alex', selections: [
            ['bos',5]
        ] },
        { name: 'Julie', selections: [
            ['chi',7]
        ] },
        { name: 'Antoine', selections: [
            ['chi',5]
        ] },
        { name: 'E1000', selections: [
            ['bos',5]
        ] },
        { name: 'Éliane', selections: [
            ['bos',5]
        ] },
        { name: 'Martin', selections: [
            ['bos',5]
        ] }
    ]
}

roundResults[3] = {
    roundPoints: 'points.rounds.3',
    pointScale: 3,
    result: [['bos',4],['chi',5]],
    participants: [
        { name: 'Richard', selections: [
            ['pit', 7],
            ['chi', 7]
        ] },
        { name: 'André', selections: [
            ['pit', 7],
            ['lak', 6]
        ] },
        { name: 'Johanne', selections: [
            ['pit', 7],
            ['chi', 6]
        ] },
        { name: 'Mom', selections: [
            ['pit', 6],
            ['lak', 5]
        ] },
        { name: 'Alex', selections: [
            ['pit', 6],
            ['chi', 6]
        ] },
        { name: 'Julie', selections: [
            ['pit', 6],
            ['chi', 7]
        ] },
        { name: 'Antoine', selections: [
            ['pit', 6],
            ['chi', 6]
        ] },
        { name: 'E1000', selections: [
            ['bos', 6],
            ['lak', 6]
        ] },
        { name: 'Éliane', selections: [
            ['pit', 7],
            ['lak', 6]
        ] },
        { name: 'Martin', selections: [
            ['pit', 6],
            ['chi', 5]
        ] }
    ]
}

roundResults[2] = {
    roundPoints: 'points.rounds.2',
    pointScale: 2,
    result: [['pit',5],['bos',5],['chi',7],['lak',7]],
    participants: [
        { name: 'Richard', selections: [
            ['pit', 6],
            ['nyr', 7],
            ['chi', 6],
            ['lak', 6]
        ] },
        { name: 'André', selections: [
            ['ott', 6],
            ['bos', 5],
            ['chi', 6],
            ['lak', 6]
        ] },
        { name: 'Johanne', selections: [
            ['pit', 6],
            ['nyr', 6],
            ['chi', 6],
            ['sjs', 6]
        ] },
        { name: 'Mom', selections: [
            ['pit', 7],
            ['bos', 6],
            ['chi', 5],
            ['lak', 7]
        ] },
        { name: 'Alex', selections: [
            ['ott', 6],
            ['nyr', 6],
            ['chi', 6],
            ['sjs', 7]
        ] },
        { name: 'Julie', selections: [
            ['pit', 6],
            ['bos', 7],
            ['chi', 7],
            ['lak', 7]
        ] },
        { name: 'Antoine', selections: [
            ['pit', 6],
            ['bos', 6],
            ['chi', 5],
            ['sjs', 6]
        ] },
        { name: 'E1000', selections: [
            ['ott', 6],
            ['bos', 5],
            ['chi', 6],
            ['lak', 7]
        ] },
        { name: 'Éliane', selections: [
            ['pit', 5],
            ['bos', 6],
            ['det', 5],
            ['lak', 6]
        ] },
        { name: 'Martin', selections: [
            ['pit', 6],
            ['nyr', 6],
            ['chi', 6],
            ['sjs', 6]
        ] }
    ]
}

roundResults[1] = {
    roundPoints: 'points.rounds.1',
    pointScale: 1,
    result: [
        ['pit', 6],
        ['ott', 5],
        ['nyr', 7],
        ['bos', 7],
        ['chi', 5],
        ['det', 7],
        ['sjs', 4],
        ['lak', 6]
    ],
    participants: [
        { name: 'Richard', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['nyr', 7],
            ['tor', 7],
            ['chi', 4],
            ['det', 7],
            ['sjs', 6],
            ['lak', 6]
        ] },
        { name: 'André', selections: [
            ['pit', 4],
            ['mtl', 6],
            ['wsh', 5],
            ['bos', 7],
            ['chi', 4],
            ['ana', 5],
            ['sjs', 6],
            ['lak', 6]
        ] },
        { name: 'Johanne', selections: [
            ['pit', 6],
            ['ott', 6],
            ['wsh', 7],
            ['tor', 6],
            ['chi', 5],
            ['det', 6],
            ['van', 6],
            ['stl', 6]
        ] },
        { name: 'Mom', selections: [
            ['pit', 4],
            ['mtl', 5],
            ['wsh', 5],
            ['bos', 6],
            ['chi', 4],
            ['ana', 5],
            ['van', 5],
            ['lak', 6]
        ] },
        { name: 'Alex', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['nyr', 7],
            ['bos', 6],
            ['chi', 4],
            ['det', 7],
            ['sjs', 6],
            ['stl', 5]
        ] },
        { name: 'Julie', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['nyr', 6],
            ['bos', 7],
            ['chi', 5],
            ['ana', 6],
            ['van', 6],
            ['lak', 7]
        ] },
        { name: 'Antoine', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['nyr', 7],
            ['bos', 6],
            ['chi', 4],
            ['ana', 6],
            ['van', 6],
            ['lak', 7]
        ] },
        { name: 'E1000', selections: [
            ['pit', 4],
            ['mtl', 6],
            ['wsh', 5],
            ['bos', 5],
            ['chi', 4],
            ['ana', 6],
            ['sjs', 5],
            ['lak', 5]
        ] },
        { name: 'Amélie', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['nyr', 6],
            ['bos', 6],
            ['chi', 5],
            ['ana', 5],
            ['van', 6],
            ['lak', 7]
        ] },
        { name: 'Éliane', selections: [
            ['pit', 5],
            ['mtl', 7],
            ['nyr', 6],
            ['bos', 4],
            ['chi', 5],
            ['det', 5],
            ['van', 6],
            ['lak', 6]
        ] },
        { name: 'Martin', selections: [
            ['pit', 5],
            ['mtl', 6],
            ['wsh', 7],
            ['bos', 4],
            ['chi', 6],
            ['ana', 4],
            ['van', 6],
            ['lak', 5]
        ] }
    ]};

module.exports = roundResults;
