const linksData = {
    github: "https://github.com/saikuNoCoda",
    linkedln: "https://www.linkedin.com/in/saikunocoda/",
    instagram: "https://www.instagram.com/saikunocoda/",
    twitter: "https://twitter.com/DivyanshVerma2",
};


const aboutData = {
    bio: "Hi, my name is Divyansh Verma, I'm a Software Engineer with 8 months of experience. I am currently working for Myntra as a Data Science Engineer for their Size and Fit services. I really love competitive programming and also developing web apps.\n I have worked with a range of different languages and frameworks and always looking for opportunities to work with something new. The things that I have the most experience working are: ",
    skills: [
        "C++",
        "Java",
        "Python",
        "React",
        "Kotlin",
        "Go",
        "MySql",
        "MongoDB",
        "NodeJs"
    ]
};

const projectData = [
    {
        name: "Wave Flume Analyzer",
        link: "https://github.com/failedcoder12/Wave-Flume-Analyser",
        heading: "Wave Flume Analyses (Amplitute, Frequency and other stuffs) using Image Processing",
        explanation: "This project includes analysis of frequency,amplitude, phase of a wave using image processing techniques in different daylight conditions. This project was used as an alternative for expensive wave flume analyzer which costs 10x more that this project.",
        techs: [
            "python",
            "openCV",
            "Image Processing"
        ]
    },
    {
        name: "Lipstick Personalization",
        link: "https://bitbucket.org/divyansh_300070948/lipstick-personalization/",
        heading: "Using user image to recommend lipstick shades",
        explanation: "Given an input image of a user (containing face), analyse the skin tone & recommend different shades of lipstick based on it. We have used MediaPipe framework to detect cheek and lips region. Internally MediaPipe uses Machine Learning(custom ResNet CNN model) to infer a 3-D surface geometry. Then using KNN we predict the lipstick for user skintone comparing it with some celebs skin tone and their lipstick color preference.",
        techs: [
            "Python",
            "Javascript",
        ]
    },
    {
        name: "Detecting Anomalies in Streaming Graphs",
        link: "https://github.com/failedcoder12",
        heading: "Detection of anomalies",
        explanation: "This project help in detection of anomalies (port scan or denial of service attacks) in an IP-IP communication using Spotlight algorithm. This is based on approximations and induced subgraphs on a particular graphs. This algorithm creates sketches of subgraph which basically measures density of a particular induced subgraph and used K such subgraphs as an approximation of original graph.",
        techs: [
            "python",
            "Spotlight Algorithm",
        ]
    },
    
];

const eduData = [
    {
        universitry: "National Institute of Technology Karnataka",
        degree: "Bachelor of Technology",
        cgpa: "8.46",
        time: "2016-2020",
        explain: "I completed my B.Tech from National Institute of Technology Karnataka (NITK) in Computer Engineering. I was a part of Programming club BFME (Competitive Coding club) which organised knowledge sharing sessions on DSA and hosts monthly competitive programming contests for 1st year and 2nd year students."
    },
    {
        universitry: "S.A. Jain Senior Model School",
        degree: "+2 Non-Medical",
        cgpa: "96.4%",
        time: "2015-2016",
        explain: "I studied in S.A. Jain Senior Model School from class 2nd to +2. I got 96.8% in +2 Non Medical. I regularly particated in Fine Arts and Table Tennis competitions like CBSE cluster. Other than that I participated i various extra curricular activities."
    },
]

const achieveData = [
    {
        heading: "ICPC 2020",
        detail: `Ranked 79th out of 3700+ teams in ICPC India Qualifiers.
        Ranked 100th out of 313 teams in Amritapuri Reginal Onsite.`,
    },
    {
        heading: "OHF by Dare2Compete",
        detail: `1st runner up in 30 days long hackathon and won a cash prize of 15,000 INR`,
    },
    {
        heading: "HackWithInfy by Infosys",
        detail: `Round 2 - In top 5 out of all 25 teams selected for onsite hackathon.
        Round 1 - Among 109 finalists selected for onsite hackathon out of 1,18,000 participants.`,
    },
    {
        heading: "Google Kickstart",
        detail: `Ranked 44 out of 13600+ participants in Round A(2020).
             Ranked 133 out of 11700+ participants in Round D(2020)`,
    },
    {
        heading: "Geeks Coding Challenge by GFG",
        detail: `Ranked 7th out of 100+ participants in round 3, Ranked 12th out of 200+ participants in round 2 and Ranked 55th out of 900+ participants in round 1.`,
    },
    {
        heading: "Other Achievements",
        detail: `Ranked 737th in Facebook Hacker Cup Round 2.
        Ranked 25th in Topcoder Collegiate Contest India 2019.
        Ranked 25th out of 30,000 participants in CodeKaze.`,
    }
]

const expData = [
    {
        name: "Google",
        post: "Software Engineer",
        time: "Mar 2020 - Present",
        work: "Working as a Software Engineer. Part of Google Pay team."
    },
    {
        name: "Myntra",
        post: "Data Sciences Engineering",
        time: "Oct 2020 - Feb 2020",
        work: "Part of data sciences engineering team. I worked on size and fit services where I build RESTful endpoints for User profile services. I also worked on encryption of Personal data of users before saving that data in database thus providing data security. While working in Myntra I also explored Mediapipe framework for mobile edge development."
    },
    {
        name: "Samsung R&D",
        post: "Software Enginneer Intern",
        time: "May 2019 - July 2019",
        work: "Worked with the Samsung Bixby(Virtual Assistant) Voice team (It was a 2 month internship) on building a personal recommender system based on user interest. Implemented the solution by mining sequential patterns using PrefixSpan and CloSpan algorithm."
    }
]

const notData = {
    main: "When I’m not at my desk, you can find me playing Table Tennis or watching anime. I'm a big anime fan, I can watch or even discuss about anime for hours may be even for days :P. My favourite animes include Demon Slayer, Assasination Classroom, Haikyuu etc. Other than that I'm really into competitive coding and actively participate in competitive coding competitions on codechef, codeforces and hackerrank.",
    implinks: [
        {
            name: "Codeforces Profile",
            link: "https://codeforces.com/profile/failed_coder",
        },
        {
            name: "Codechef Profile",
            link: "https://www.codechef.com/users/failed_coder", 
        },
        {
            name: "Hackerearth Profile",
            link: "https://www.hackerearth.com/@failed_coder",
        },
        {
            name: "Atcoder Profile",
            link: "https://atcoder.jp/users/failed__coder",
        },
        {
            name: "Prep Talks",
            link: "https://preptalks.netlify.app/",
        },
        {
            name: "GoodReads Profile",
            link: "https://www.goodreads.com/saikunocoda",
        },
        {
            name: "My Anime List",
            link: "https://myanimelist.net/animelist/saikuNoCoda",
        }
    ]
}

export {
    linksData,
    aboutData,
    projectData,
    eduData,
    achieveData,
    expData,
    notData,
};
