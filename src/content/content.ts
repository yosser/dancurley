export const aboutMe = [
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
    primaryCategory: 'Television' | 'Video Games'
    category: string;
    role: string;
    date: string;
    description: string;
    externalLink?: string;
    image: string;
    externalLinks: { url: string; label: string }[];
}


export const projects: IProject[] = [
    {
        id: 1,
        title: "Channel 4",
        primaryCategory: "Television",
        category: "Television",
        role: "Staff Writer",
        date: "2023",
        description: "I spent over a decade at Channel 4 writing and editing synopsis for hundreds of shows and thousands of episodes as a Programme Information Editor across all the main channels (C4, E4 and Film4). Each show needed several editorial components - one for the show itself, each series and each individual episode. All would start as press billings to send out to the TV press, then be edited for proprietary platforms like c4.com and then EPG (Electronic Programming Guide) to be sent out to Sky and Freeview. I would build and update boxsets, and refresh them by checking older shows for outdated and insensitive terminology, often working in conjunction with legal and compliance.All content came under the Channel 4 house style guide which I would contribute to and help shape, working within a small team.",
        externalLinks: [{ url: "https://www.channel4.com/programmes/married-at-first-sight-australia", label: "Married at First Sight Australia" },
        { url: "https://www.channel4.com/programmes/the-simpsons", label: "The Simpsons" },
        { url: "https://www.channel4.com/programmes/homeland", label: "Homeland" }],
        image: "/Channel_4_Logo_2023.svg"
    },
    {
        id: 2,
        title: "Orange",
        primaryCategory: "Television",
        category: "Journalism",
        role: "Script Doctor",
        date: "2023",
        description: "For several years in the late ‘00s I was working at www.orange.co.uk as a TV editor and journalist, working across all genres from reality to drama to documentaries. I would write half a dozen news stories each morning, then spend the afternoon working on reviews, features and sometimes microsites for longer running nightly shows like Big Brother and I’m a Celebrity. I would also write live blogs for evictions on these reality shows - often late on Friday nights.",
        externalLinks: [{ url: "https://www.orange.co.uk", label: "Orange" }],
        image: "/Orange-Logo.png"
    },
    {
        id: 3,
        title: "Scriptwriting and Acting",
        primaryCategory: "Television",
        category: "Scriptwriting and Acting",
        role: "Freelance Journalist",
        date: "2022",
        description: "I’ve always been interested in TV screenwriting and acting, although more as a hobby than professionally. I completed three script writing courses at City Lit in London… TV and Film Writing - Beginner TV and Film Writing - Advanced TV Comedy Writing",
        externalLinks: [{ url: "https://example.com", label: "Example" }],
        image: "/api/placeholder/600/400"
    },
    {
        id: 4,
        title: "Skanked Pilot",
        primaryCategory: "Television",
        category: "Television",
        role: "Scriptwriter & Actor",
        date: "2012",
        description: "In 2012 I also wrote, produced and appeared in a sitcom pilot I wrote and self funded. It’s far from broadcast quality and was never made to pitch, it was more an exercise in the fields of TV production. I wrote an entire six episode series but only produced the pilot episode",
        externalLinks: [{ url: "https://vimeo.com/65003138", label: "Skanked Pilot" }],
        image: "/Skanked.png"
    },
    {
        id: 5,
        title: "Angin’",
        primaryCategory: "Television",
        category: "Television",
        role: "Scriptwriter & Actor",
        date: "2023",
        description: "I wrote a pilot script for an hour-long TV pilot called ‘Angin’, set in the ‘50s following a group of hangmen during the decline of capital punishment in Britain. I made a very short taster with the late Ewen Mackintosh (Big Keith from The Office) who was also working with me on the script.",
        externalLinks: [{ url: "https://vimeo.com/manage/videos/125987207", label: "Angin’" }],
        image: "/Angin.jpeg"
    },
    {
        id: 6,
        title: "ActUpNorth",
        primaryCategory: "Television",
        category: "Acting",
        role: "Actor",
        date: "2021",
        description: "I studied acting part time in London (The Actors Centre, now the Seven Dials Playhouse) and Manchester and Leeds (ActUpNorth). I’ve always felt it was important for a screenwriter to understand and feel attuned with how dialogue’s performed while writing it - often an eye contact can save a hundred needless words.",
        externalLinks: [{ url: "https://www.actupnorth.co.uk", label: "ActUpNorth" }],
        image: "/act-up.jpg"
    },

    {
        id: 7,
        title: "European Sega Championships",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Staff Writer",
        date: "1991",
        description: "My start in the videogame industry started in 1991 when I beat over 160,000 to become the European Sega Champion - the first year the Sega championships went international. This made me a celebrity of sorts for a time, leading to many hours of TV coverage across shows like BBC’s Newsround and C4’s GamesMaster. I also made a video with Dominik Diamond called Power Play “How To Become a Videogames Master” which was available to buy through retail.",
        externalLinks: [{ url: "https://www.youtube.com/watch?v=AIcLrZVqBkk", label: "Watch the video" }],
        image: "/Sega-European-Champion.jpg"
    },
    {
        id: 8,
        title: "The Getaway",
        primaryCategory: "Video Games",
        category: "Content",
        role: "Staff Writer",
        date: "1991",
        description: "I worked at Sony for just over a year as the storyline writer for the PS2 game The Getaway - which cost(and unprecedented at the time) £6 million to develop and turned over £100 million in total.It was considered a groundbreaking title for the time, pushing the boundaries for both videogame narratives and cinema - style cutscenes and direction.I did not work on it to the end, I created the outline for the story(the kidnapping and dual storyline with Mark and Frank) and created most of the main characters, but the script was finished by others after I left.",
        externalLinks: [{ url: "https://en.wikipedia.org/wiki/The_Getaway_(video_game)", label: "The Getaway" }],
        image: "/Channel_4_Logo_2023.svg"
    },
    {
        id: 9,
        title: "QA and Design",
        primaryCategory: "Video Games",
        category: "QA and Design",
        role: "QA Tester and Game Designer",
        date: "1991",
        description: "Throughout most of the '90s I worked at several independent video game development studios in Manchester, starting as a QA Tester then worked my way up to Level Designer then Game Designer. I worked on dozens of games including Super Kick Off, Flashback, Spider-Man: Maximum Carnage, James Pond: RoboCod and Olympic Gold: Barcelona 1992. My last game in this period was Tunnel B2 for which I was the full designer, but the studio Neon didn’t last due to financial reasons.",
        externalLinks: [{ url: "https://en.wikipedia.org/wiki/Super_Kick_Off", label: "Super Kick Off" }],
        image: "/Channel_4_Logo_2023.svg"
    },
    {
        id: 10,
        title: "Sega Power",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Freelance Writer",
        date: "1991",
        description: "I started freelance writing for Future Publishing’s Sega Power in 1991 while still just 15. I wrote a monthly column called Curley’s Challenge and several features, the most memorable being a visit to Sega Japan where I met the President of Sega and was able to reveal many new developments Sega were working on.",
        externalLinks: [{ url: "https://en.wikipedia.org/wiki/Sega_Power", label: "Sega Power" }],
        image: "/flashback.jpg"
    },
    {
        id: 11,
        title: "The Official UK PlayStation Magazine",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Deputy Editor",
        date: "1991",
        description: "After a spell on Future’s XGamer magazine, I became Deputy Editor of The Official UK PlayStation Magazine where I planned each issue, managed the freelance budget and pool and chaired features meetings.While at Future, I also freelanced for PSM2, GamesMaster Magazine, PlayStation Max, Total Film, and edited and wrote Metal Hammer's videogame section.",
        externalLinks: [{ url: "https://en.wikipedia.org/wiki/The_Official_UK_PlayStation_Magazine", label: "The Official UK PlayStation Magazine" }],
        image: "/PlayStation.png"
    },
    {
        id: 12,
        title: "360",
        primaryCategory: "Video Games",
        category: "Journalism",
        role: "Editor",
        date: "1991",
        description: "At Imagine, I managed a 25 - 30 page features section, lead features meetings, planned content, commissioned and wrote features.I also wrote for other sections including reviews and news.My favourite feature from this time was a feature about videogaming in prison, in which I interviewed someone from the Prison Service and a convicted criminal who’d spent time in prison.",
        externalLinks: [{ url: "https://en.wikipedia.org/wiki/360", label: "360" }],
        image: "/Channel_4_Logo_2023.svg"
    }
];

