var config = {
    style: 'mapbox://styles/hp-nunes/ckd7tfrbi02q41io621avv8hn/draft',
    accessToken: 'pk.eyJ1IjoiaHAtbnVuZXMiLCJhIjoiY2pqNHAxaHIxMDA3aTNrbW15OGx2NW4ybiJ9.pHzT2FAtpO-Xhnc3PzJsFA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    // title: 'Placeholder',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            title: 'Breathing Between The Lines',
            // subtitle: 'The Legacy of Red-Lining & Air Pollution in Seattle, WA',
            // image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'seattle',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'red-lining-map',
            title: 'Second Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'map',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'red-lining',
            title: 'Second Title',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'red-line',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'red-lining-map-2',
            title: 'Second Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'map',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'asthma',
            title: 'Second Title',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'asthma',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'asthma',
                    opacity: 0
                }
            ]
        },
        {
            id: 'asthma-2',
            title: 'Second Title',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.322905, 47.619226],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'asthma',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        }
    ]
};
