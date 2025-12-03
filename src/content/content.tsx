import React from "react";
import type { ReactNode } from "react";

/*
{
    text: `I'm a passionate storyteller who believes in the power of narrative to connect,
                inspire, and transform.With over a decade of experience in television, film,
                and digital media, I've dedicated my career to crafting stories that resonate
                with audiences and leave lasting impressions.`},
{
    text: `My journey began in journalism, where I learned the art of compelling storytelling
        and the importance of authentic character development.This foundation led me to
        television writing, where I discovered my true passion for creating complex,
        multi - dimensional characters and intricate plotlines that keep viewers engaged.`
},
{
    text: `What drives me is the opportunity to explore the human condition through different
        lenses—whether it's a gritty crime drama, a thought-provoking sci-fi series, or an  
        an investigative piece that exposes truth.I believe every story has the potential
        to change perspectives and create meaningful conversations.`},
{
    text: `When I'm not writing, you'll find me analyzing the latest shows, reading industry
        publications, or mentoring emerging writers.I'm always excited to collaborate
        with fellow creatives who share my commitment to excellence and innovation in
        storytelling.`}];
        */

export const selectedCredits = [
    "The Last Stand (HBO Max) - Staff Writer",
    "Digital Dreams (Netflix) - Script Doctor",
    "City Lights Investigation - Freelance Journalist",
    "Breaking Point (AMC) - Season Arc Consultant",
    "The Future of Streaming - Interview Series",
    "Indie Film Script - Sundance Premiere"
];

export const clients = [
    "HBO Max",
    "Netflix",
    "AMC",
    "The Hollywood Reporter",
    "Variety",
    "Deadline",
    "The A.V. Club"
];

export interface IProject {
    id: number;
    title: string;
    focusTitle?: string;
    primaryCategory: 'TV & Streaming' | 'Video Games' | 'Journalism'
    category: string;
    role: string;
    date: string;
    description: string | ReactNode;
    externalLink?: string;
    image: string;
    focusImage?: string;
    externalLinks: { url: string; label: string }[];
    internalLinks?: { url: string; label: string }[];
}

export const primaryCategories = [
    {
        name: 'TV & Streaming',
        description: `I've worked in and around the TV and streaming industry for almost 20 years as a journalist, broadcasting copy writer/editor, and have written my own TV comedy drama scripts. I have exhaustive knowledge of how the UK broadcasting industry works, and of TV programming both domestic and global.`
    },
    {
        name: 'Video Games',
        description: `I’ve been playing games since I was six, and writing about and developing them since I was 16. As a former European Sega Champion, games have always been in my blood and I’ve had every console between the Atari 2600 and PlayStation 5.`
    },
    {
        name: 'Journalism',
        description: `I started in journalism at 15 writing for Sega Power, and over the years branched out from gaming into TV, Film, Lifestyle, Food and Science and Tech. I’m a very versatile writer and can easily change between casual first-person conversational writing, to fit into a more conserved and corporate tone.`
    }
];

const loadedgalleryImages = [
    {

        src: '/AlligatorWrestling.jpg',
        alt: 'Alligator Wrestling in Florida',
        title: 'Alligator Wrestling',
        description: 'During my time as a freelance features writer for Loaded, I spent time wrestling alligators in Florida as part of an investigative piece.'
    },
    {
        src: '/Cresta Run.jpg',
        alt: 'Cresta Run in Switzerland',
        title: 'Cresta Run',
        description: 'I experienced the famous Cresta Run in Switzerland, documenting the thrill and danger of this historic toboggan run.'
    },
    {
        src: '/iraq.jpg',
        alt: 'Military embed in Iraq',
        title: 'Iraq Military Embed',
        description: 'I spent two weeks embedded with the military in Iraq, providing firsthand coverage of military operations and life on the front lines.'
    }
];

const loadedGalleryImage1 = [
    {
        src: '/AlligatorWrestling.jpg',
        alt: 'Alligator Wrestling in Florida',
        title: 'Alligator Wrestling',
        description: 'During my time as a freelance features writer for Loaded, I spent time wrestling alligators in Florida as part of an investigative piece.'
    },
];
const loadedGalleryImage2 = [
    {
        src: '/Cresta Run.jpg',
        alt: 'Cresta Run in Switzerland',
        title: 'Cresta Run',
        description: 'I experienced the famous Cresta Run in Switzerland, documenting the thrill and danger of this historic toboggan run.'
    },
];
const loadedGalleryImage3 = [
    {
        src: '/iraq.jpg',
        alt: 'Military embed in Iraq',
        title: 'Iraq Military Embed',
        description: 'I spent two weeks embedded with the military in Iraq, providing firsthand coverage of military operations and life on the front lines.'
    },
];

const springwiseLandmineClearingImage = [
    {
        src: '/Springwise%20Landmine%20Clearing.png',
        alt: 'Springwise landmine clearing',
        title: 'Springwise landmine clearing',
        description: 'I wrote for Springwise, a global B2B science site, covering everything from consumer tech to governmental research and development innovations.'
    },
];
const springwiseMinimalistMobileImage = [
    {
        src: '/Springwise%20Minimalist%20Mobile.png',
        alt: 'Springwise minimalist mobile',
        title: 'Springwise minimalist mobile',
        description: 'I wrote for Springwise, a global B2B science site, covering everything from consumer tech to governmental research and development innovations. '
    },
];
const springwiseSolarPoweredMP3Image = [
    {
        src: '/Springwise%20Solar%20Powered%20MP3.png',
        alt: 'Springwise solar powered MP3',
        title: 'Springwise solar powered MP3',
        description: 'I wrote for Springwise, a global B2B science site, covering everything from consumer tech to governmental research and development innovations.'
    },
];

const ThreeSixtygalleryImage1 = [
    {
        src: '/Flashback 1-2.jpg',
        alt: 'Flashback 1-2',
        title: 'Flashback pages 1-2',
        description: ''
    },
];
const ThreeSixtygalleryImage2 = [
    {
        src: '/Flashback 3-4.jpg',
        alt: 'Flashback 3-4',
        title: 'Flashback pages 2-3',
        description: ''
    },
];
const ThreeSixtygalleryImage3 = [
    {
        src: '/Mean Machine 1-2.jpg',
        alt: 'Mean Machine 1-2',
        title: 'Mean Machine pages 1-2',
        description: ''
    },
];
const ThreeSixtygalleryImage4 = [
    {
        src: '/Mean Machine 3-4.jpg',
        alt: 'Mean Machine 3-4',
        title: 'Mean Machine pages 3-4',
        description: ''
    },
];
const ThreeSixtygalleryImage5 = [
    {
        src: '/Mean Machine 5-6.jpg',
        alt: 'Mean Machine 5-6',
        title: 'Mean Machine pages 5-6',
        description: ''
    },
];


export const galleries = [
    {
        name: 'Loaded Magazine Features',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Loaded magazine (2002-2005)',
        images: loadedgalleryImages
    },
    {
        name: 'Springwise',
        subheading: 'A collection of news stories from my time as a freelance writer for Springwise (2016-2017)',
        images: [
            {
                src: '/Springwise%20Landmine%20Clearing.png',
                alt: 'Springwise landmine clearing',
                title: 'Springwise landmine clearing',
                description: ''
            },
            {
                src: '/Springwise%20Minimalist%20Mobile.png',
                alt: 'Springwise minimalist mobile',
                title: 'Springwise minimalist mobile',
                description: ''
            },
            {
                src: '/Springwise%20Solar%20Powered%20MP3.png',
                alt: 'Springwise solar powered MP3',
                title: 'Springwise solar powered MP3',
                description: ''
            },
            {
                src: '/Robot%20teaching%20coding.png',
                alt: 'Robot teaching coding',
                title: 'Robot teaching coding',
                description: ''
            },
            {
                src: '/Pong%20Coffee%20Table.png',
                alt: 'Pong coffee table',
                title: 'Pong coffee table',
                description: ''
            },
            {
                src: '/Tiny%20Sat.png',
                alt: 'Tiny sat',
                title: 'Tiny sat',
                description: ''
            },
            {
                src: '/Respiratory%20monitor%20shirt.png',
                alt: 'Respiratory monitor shirt',
                title: 'Respiratory monitor shirt',
                description: ''
            },
            {
                src: '/Drunkpay%20App.png',
                alt: 'Drunkpay app',
                title: 'Drunkpay app',
                description: ''
            },
            {
                src: '/Ultrasound%20whispering.png',
                alt: 'Ultrasound whispering',
                title: 'Ultrasound whispering',
                description: ''
            },
            {
                src: '/Robot%20Fish.png',
                alt: 'Robot fish',
                title: 'Robot fish',
                description: ''
            },
            {
                src: '/Visual%20Elevator.png',
                alt: 'Visual elevator',
                title: 'Visual elevator',
                description: ''
            },
        ]
    },

    {
        name: 'SpringwiseMinimalistMobile',
        subheading: 'A collection of news stories from my time as a freelance writer for Springwise (2016-2017)',
        images: springwiseMinimalistMobileImage
    },
    {
        name: 'SpringwiseSolarPoweredMP3',
        subheading: 'A collection of news stories from my time as a freelance writer for Springwise (2016-2017)',
        images: springwiseSolarPoweredMP3Image
    },
    {
        name: 'SpringwiseLandmineClearing',
        subheading: 'A collection of news stories from my time as a freelance writer for Springwise (2016-2017)',
        images: springwiseLandmineClearingImage
    },
    {
        name: 'Loaded1',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Loaded magazine (2002-2005)',
        images: loadedGalleryImage1
    },
    {
        name: 'Loaded2',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Loaded magazine (2002-2005)',
        images: loadedGalleryImage2
    },
    {
        name: 'Loaded3',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Loaded magazine (2002-2005)',
        images: loadedGalleryImage3
    },
    {
        name: '3601',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for 360 magazine (2005-2006)',
        images: ThreeSixtygalleryImage1
    },
    {
        name: '3602',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for 360 magazine (2005-2006)',
        images: ThreeSixtygalleryImage2
    },
    {
        name: '3603',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for 360 magazine (2005-2006)',
        images: ThreeSixtygalleryImage3
    },
    {
        name: '3604',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for 360 magazine (2005-2006)',
        images: ThreeSixtygalleryImage4
    },
    {
        name: '3605',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for 360 magazine (2005-2006)',
        images: ThreeSixtygalleryImage5
    },
    {
        name: 'SegaJapan',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Sega Japan (2002-2005)',
        images: [
            {
                src: '/SegaJapan.jpg',
                alt: 'Sega Japan',
                title: 'Sega Japan',
                description: 'I visited Sega Japan to interview the President of Sega and was able to reveal many new developments Sega were working on.'
            },
        ]
    },
    {
        name: 'Firebugs',
        subheading: 'Firebugs design feature',
        images: [{
            src: '/Firebugs1.jpg',
            alt: 'Firebugs feature pages 1-2',
            title: 'Firebugs feature pages 1-2',
            description: ''
        },
        {
            src: '/Firebugs2.jpg',
            alt: 'Firebugs feature pages 3-4',
            title: 'Firebugs feature pages 3-4',
            description: ''
        },
        {
            src: '/Firebugs3.jpg',
            alt: 'Firebugs feature pages 5-6',
            title: 'Firebugs feature pages 5-6',
            description: ''
        },
        {
            src: '/Firebugs4.jpg',
            alt: 'Firebugs feature page 7',
            title: 'Firebugs feature page 7',
            description: ''
        },
        ]
    },
    {
        name: 'TheHarderTheyCome',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for The harder they come (2006-2011)',
        images: [
            {
                src: '/TheHarderTheyCome.jpg',
                alt: 'The harder they come',
                title: 'The harder they come',
                description: ''
            }
        ]
    },
    {
        name: 'BB1',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/BigBro%20Bea.jpg',
                alt: 'Big brother Bea',
                title: 'Big brother Bea',
                description: ''
            },
        ]
    },
    {
        name: 'BB2',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/BigBro%20Evict%20Predict.jpg',
                alt: 'Big brother eviction prediction',
                title: 'Big brother eviction prediction',
                description: ''
            },
        ]
    },
    {
        name: 'BB3',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/CBigBro%20TinaM.jpg',
                alt: 'Big brother Tina M.',
                title: 'Big brother Tina M.',
                description: ''
            },
        ]
    },
    {
        name: 'Travel1',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/Travel%20-%20Don\'t%20Be%20a%20Dick.jpg',
                alt: 'Travel don\'t be a dick',
                title: 'Travel don\'t be a dick',
                description: ''
            }
        ]
    },
    {
        name: 'Travel2',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/Travel%20-%20Languages.jpg',
                alt: 'Travel languages',
                title: 'Travel languages',
                description: ''
            },
        ]
    }
    , {
        name: 'Travel3',
        subheading: 'A collection of investigative features and adventures from my time as a freelance writer for Big Brother (2006-2011)',
        images: [
            {
                src: '/Travel%20-%20Sunburn.jpg',
                alt: 'Travel sunburn',
                title: 'Travel sunburn',
                description: ''
            },
        ]
    }
]


export const projects: IProject[] = [
    {
        id: 1,
        title: "Channel 4",
        primaryCategory: "TV & Streaming",
        category: "Television",
        role: "Programme Information Editor",
        date: "2014-2025",
        description: "I spent over a decade at Channel 4 writing and editing synopsis for hundreds of shows and thousands of episodes as a Programme Information Editor. Each show needed several editorial components - one for the show, each series and each individual episode. All started as press billings then needed to be edited for proprietary platforms like c4.com and the EPG (Electronic Programming Guide) to be sent to Sky and Freeview. I built and updated boxsets, often refreshing older shows for outdated and insensitive terminology, often working with legal and compliance. All content came under the Channel 4 house style guide which I helped shape, working within a small team.",
        externalLinks: [{ url: "https://www.channel4.com/programmes/married-at-first-sight-australia", label: "Married at First Sight Australia" },
        { url: "https://www.channel4.com/programmes/the-simpsons", label: "The Simpsons" },
        { url: "https://www.channel4.com/programmes/homeland", label: "Homeland" }],
        image: "/Channel_4_Logo_2023.svg"
    },
    {
        id: 2,
        title: "Orange",
        primaryCategory: "TV & Streaming",
        category: "Journalism",
        role: "TV Writer and Editor",
        date: "2006-11",
        description: "For five years I worked at www.orange.co.uk as a TV editor and journalist, working across all genres from reality to drama to documentaries. I wrote half a dozen news stories each morning, and spent the afternoons working on reviews, features and microsites for reality shows like Big Brother and I’m a Celebrity. I also wrote live blogs for evictions on these reality shows - often late on Friday nights.",
        internalLinks: [{ url: "/BB2", label: "Big brother eviction predictions" },
        { url: "/BB1", label: "Big brother Bea" },
        { url: "/BB3", label: "Big brother Tina M." }],
        externalLinks: [],
        image: "/Orange-Logo.png"
    },
    /* {
         id: 3,
         title: "Scriptwriting and Acting",
         primaryCategory: "Television",
         category: "Scriptwriting and Acting",
         role: "Freelance Journalist",
         date: "2022",
         description: "I’ve always been interested in TV screenwriting and acting, although more as a hobby than professionally. I completed three script writing courses at City Lit in London… TV and Film Writing - Beginner TV and Film Writing - Advanced TV Comedy Writing",
         externalLinks: [{ url: "https://example.com", label: "Example" }],
         image: "/api/placeholder/600/400"
     }, */
    {
        id: 4,
        title: "Skanked Pilot",
        primaryCategory: "TV & Streaming",
        category: "Television",
        role: "Writer, Producer & Actor",
        date: "2012",
        description: "In 2012 I wrote, produced and appeared in a sitcom pilot I self funded. It’s not broadcast spec - the project was an exercise in TV production (casting, location scouting, managing a filming schedule). I wrote an entire six episode series but only produced the pilot.",
        externalLinks: [{ url: "https://vimeo.com/65003138", label: "Skanked Pilot" }],
        image: "/Skanked.png"
    },
    {
        id: 5,
        title: "'Angin’",
        primaryCategory: "TV & Streaming",
        category: "Television",
        role: "Writer, Producer & Actor",
        date: "2016",
        description: "I wrote a script for an hour-long TV pilot called ‘Angin’, set in the ‘50s following a group of hangmen during the decline of capital punishment in Britain. I made a very short taster with the late Ewen Mackintosh (Big Keith from The Office) who was also working with me on the script.",
        externalLinks: [{ url: "https://vimeo.com/manage/videos/125987207", label: "Angin’" }],
        image: "/Angin.jpeg"
    },
    {

        id: 51,
        title: 'BBC',
        focusTitle: 'The Nihal Show',
        primaryCategory: 'TV & Streaming',
        category: 'Television',
        role: 'Radio and TV Contributor',
        date: '2005 - 2011',
        description: 'I was a regular paid contributor to The Asian Network’s Nihal show as a journalist discussing current affairs from hard news to entertainment topics, which was also streamed live over the internet. I was also regularly invited to appear on Radio 5 and BBC News TV to discuss video games and social topics.',
        externalLinks: [],
        image: '/BBC%20Logo.jpg',
        focusImage: '/BBC%20Radio.jpeg'
    },
    {
        id: 6,
        title: "ActUpNorth",
        primaryCategory: "TV & Streaming",
        category: "Acting",
        role: "Trainee Actor",
        date: "2011 - present day",
        description: "I studied acting part time in London's The Actors Centre (now the Seven Dials Playhouse) and currently train in Manchester at ActUpNorth. I’ve always felt it was important for a screenwriter to understand and feel attuned with how dialogue’s performed while writing it - often an eye contact can save a hundred needless words.",
        externalLinks: [{ url: "https://www.actupnorth.com", label: "ActUpNorth" }],
        image: "/act-up.jpg"
    },

    {
        id: 7,
        title: "European Sega Championships",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "1991 winner",
        date: "1991",
        description: "My start in the videogame industry happened in 1991 when I beat over 160,000 other players to become the European Sega Champion - the first year the Sega championships went international. This made me a celebrity of sorts for a time, leading to many hours of TV coverage across shows like BBC’s Newsround and C4’s GamesMaster. I also made a video with Dominik Diamond called Power Play “How To Become a Videogames Master” which was available to buy through retail.",
        externalLinks: [{ url: "https://www.youtube.com/watch?v=AIcLrZVqBkk", label: "Watch Power Play" },
        { url: "https://fb.watch/DJ826i8e-t/", label: "BBC Newsround" },
        { url: "https://www.youtube.com/watch?v=pexW8MH7kLw", label: "GamesMaster: Sonic Challenge" },
        { url: "https://www.youtube.com/watch?v=jVGVbk4sqT0&t=14s", label: "YouBet!" }],
        image: "/Sega-European-Champion.jpg"
    },

    {
        id: 8,
        title: "The Getaway",
        primaryCategory: "Video Games",
        category: "Content",
        role: "Storywriter",
        date: "1999-2000",
        description: <React.Fragment><p>I worked at Sony's Team Soho for just over a year as the storyline writer for the PS2 game The Getaway.</p><p >It was considered a groundbreaking title for the time, pushing the boundaries for both videogame narratives and cinematography cutscenes and direction.</p > <p>I did not work on it to the end, I created the outline for the story (the kidnapping and dual storyline with Mark and Frank) and created most of the main characters, but the script was finished by others after I left.</p></React.Fragment>,
        externalLinks: [{ url: "https://www.youtube.com/watch?v=T2iqvZupgds", label: "The Getaway trailer" }],
        image: "/TheGetaway-sm.jpg"
    },
    {
        id: 9,
        title: "QA and Design",
        primaryCategory: "Video Games",
        category: "QA and Design",
        role: "QA Tester and Game Designer",
        date: "1991 - 98",
        description: "Throughout most of the '90s I worked at several independent video game development studios in Manchester, starting as a QA Tester then worked my way up to Level Designer then Game Designer. I worked on dozens of games including Super Kick Off, Flashback, Spider-Man: Maximum Carnage, James Pond: RoboCod and Olympic Gold: Barcelona 1992 and Tunnel B2 (unreleased)",
        externalLinks: [],
        image: "/Flashback.jpeg"
    },
    {
        id: 10,
        title: "Sega Power",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Freelance Writer",
        date: "1991 - 92",
        description: "I started freelance writing for Future Publishing’s Sega Power in 1991 while still just 15. I wrote a monthly column called Curley’s Challenge and several features, the most memorable being a visit to Sega Japan where I met the President of Sega and was able to reveal many new developments Sega were working on.",
        externalLinks: [],
        image: "/SegaJapan-sm.jpg",
        internalLinks: [{ url: "/SegaJapan", label: "Sega Power Japan" }, {
            url: "/TheHarderTheyCome", label: "Harder they come"
        }],
    },
    {
        id: 11,
        title: "Official PS Magazine",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Deputy Editor",
        date: "2003 - 04",
        description: "After a spell on Future’s XGamer magazine, I became Deputy Editor of The Official UK PlayStation Magazine where I planned each issue, managed the freelance budget and pool and chaired features meetings. While at Future, I also freelanced for PSM2, GamesMaster Magazine, PlayStation Max, Total Film, and edited and wrote Metal Hammer's videogame section.",
        externalLinks: [],
        internalLinks: [{ url: "/Firebugs", label: "Firebugs design feature" }],
        image: "/OPM-cover.jpg",
    },
    {
        id: 12,
        title: "360 magazine",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Features Editor",
        date: "2005 - 06",
        description: "At Imagine, I managed a 25 - 30 page features section, lead features meetings, planned content, commissioned and wrote features. I also wrote for other sections including reviews and news. My favourite piece from this time was a feature about videogaming in prison, which involved interviewing someone from the prison service and a convicted criminal who’d spent time in prison. I also freelanced for Retro Gamer and Cheat Machine while at Imagine.",
        externalLinks: [],
        image: "/MeanMachine360-sm.jpg",
        internalLinks: [{ url: "/3601", label: "Flashback pages 1-2" },
        { url: "/3602", label: "Flashback pages 3-4" },
        { url: "/3603", label: "Mean Machine pages 1-2" },
        { url: "/3604", label: "Mean Machine pages 3-4" },
        { url: "/3605", label: "Mean Machine pages 5-6" }],

    },
    {
        id: 14,
        title: "Creative Tourist",
        primaryCategory: "Journalism",
        category: "Journalism",
        role: "Freelance Restaurant Reviewer",
        date: "2019 - 22",
        description: "When I lived in Leeds I became Creative Tourist's restaurant critic for the city, specialising in (but not restricted too) vegetarian and vegan establishments and menus. I also did the occasional review in Manchester.",
        externalLinks: [{ url: "https://www.creativetourist.com/venue/habas-bar-restaurant/", label: "Habas" },
        { url: "https://www.creativetourist.com/venue/bundobust-leeds/", label: "Bundobust" },
        { url: "https://www.creativetourist.com/venue/sarto-leeds/", label: "Sarto" }],
        image: "/CreativeTouristlogo.png"
    },
    {
        id: 15,
        title: "Springwise",
        primaryCategory: "Journalism",
        category: "Journalism",
        role: "Freelance News Writer",
        date: "2016 - 17",
        description: "I would write around 10-12 news stories a week for this global B2B science site, covering everything from consumer tech to governmental research and development innovations. I wrote hundreds of news pieces while I was freelancing for them which are behind a paywall (hence screen grabs instead of links).",
        externalLinks: [],
        image: "/Springwise%20Landmine%20Clearing-sm.jpg",
        internalLinks: [
            { url: "/Springwise", label: "Examples" }
        ],
    },
    {
        id: 16,
        title: "The Quietus",
        primaryCategory: "Journalism",
        category: "Journalism",
        role: "Freelance Film Reviewer",
        date: "2008 - 10",
        description: "I was a freelance film reviewer for The Quietus during the site's launch years, attending press screenings and often interviewing film stars and directors.",
        externalLinks: [{ url: "https://www.thequietus.com/culture/film/kick-ass-film-review-nicholas-cage/", label: "Kick Ass" },
        { url: "https://www.thequietus.com/culture/film/avatar-3d-review-more-polished-than-hugh-hefner-s-cock/", label: "Avatar" },
        { url: "https://www.thequietus.com/culture/film/star-wars-clone-wars/", label: "Star Wars: The Clone Wars" }],
        image: "/TheQuietusLogo-sm.jpg"
    },
    {
        id: 17,
        title: "Loaded",
        primaryCategory: "Journalism",
        category: "Journalism",
        role: "Freelance Features Writer",
        date: "2002 - 05",
        description: "I was a freelance features writer pitching ideas for commission. Among other pieces, I spent two weeks embedded with the military in Iraq, wrestled alligators in Florida and did the Cresta Run in Switzerland. I also contributed comic strips and wrote a court reports column. This was when Loaded was owned by what was then called IPC Media.",
        externalLinks: [{ url: "https://www.loaded.co.uk/features/", label: "Loaded" }],
        internalLinks: [{ url: "/Loaded1", label: "Alligator Wrestling" },
        { url: "/Loaded2", label: "Cresta Run" },
        { url: "/Loaded3", label: "Iraq Bomb Squad" }],
        image: "/Loadedlogo-sm.jpg"
    },

    {
        id: 18,
        title: "Orange",
        primaryCategory: "Journalism",
        category: "Journalism",
        role: "Freelance Travel Writer",
        date: "2006-11",
        description: "As mentioned in the TV section of my portfolio, my fulltime job at Orange during this period was working on the TV section of the portal, but I also freelanced for lots of other areas of the website including writing regular topical blogs for the travel channel.",
        internalLinks: [{ url: "/Travel1", label: "Travel don't be a dick" },
        { url: "/Travel2", label: "Travel languages" },
        { url: "/Travel3", label: "Travel sunburn" }],
        externalLinks: [],
        image: "/Orange-Logo.png"
    },


];
