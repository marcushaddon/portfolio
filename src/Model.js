const Model = {
    aboutMe: [
        "I originally come from a creative background, but have always excelled at the technical/analytical side of creative tasks. This has been an immense asset in my career as a programmer, as software development and programming are at once technical, creative, and social activities.",
        "I excel at all three of these areas, which is essential for any member of a small, interdisciplinary team building a new product."
    ],

    skills: [
        {
            name: "Problem Solving",
            description: "I excel at thinking laterally, and I believe this gives me a valuable perspective as a programmer. I use this ability to find creative solutions to difficult technical and business problems."
        },
        {
            name: "Versatility",
            description: "I work daily with a wide range of technologies. As a result, I don't think about problems in terms of a specific language or framework, but rather in well-established and widely applicable design patterns. I can use the right tool for the job."
        },
        {
            name: "Communication",
            description: "I can clearly describe technical subjects to non-technical collaborators and translate plain language feature requests into detailed lists of technical requirements. I also enjoy collaborating with other developers and technical professionals."
        }
    ],

    technologies: [
        {
            name: "Javascript",
            confidence: 100
        },
        {
            name: "Python",
            confidence: 85
        },
        {
            name: "C#",
            confidence: 75
        },
        {
            name: "SQL",
            confidence: 70
        },
        {
            name: "HTML",
            confidence: 65
        },
        {
            name: "CSS/Sass",
            confidence: 65
        },
        {
            name: "PHP",
            confidence: 60
        }
    ],

    frameworks: [
        'Angular 5',
        'Angular 1.x',
        'React',
        'Express',
        'Mongoose',
        'Flask',
        'SQLAlchemy',
        '.NET Core',
        'Entity Framework',
        'Wordpress'
    ],

    projects: [
        // mycrate.ip
        {
            id: "mycrateio",
            name: "mycrate.io",
            link: "http://www.mycrate.io",
            img: "mycrate1.png",
            skills: [
                "Application Design",
                "Full Stack Development",
                "RESTful API Design",
                "Third Party API Integration",
                "Single Page App Development",
                "UI Design",
                "Project Management"
            ],
            technologies: [
                "Javascript",
                "Node.js",
                "Express",
                "AngularJs",
                "MongoDb",
                "Material CSS"
            ],
            gist: ["mycrate.io is my first (and longest ongoing) personal project. It allows users to collect and share obscure music they find on Youtube (if it can’t be found anywhere else). Furthermore, it allows breakpoints to be inserted into videos that contain entire albums by pulling release information from Discogs.com’s API (so users can skip songs they don’t like, or make playlists of their favorite tracks from each video-album)."]
        },

        // QPilot
        {
            id: "qpilot",
            name: "QPilot",
            link: "https://qpilot.cloud",
            img: "qpilot1.png",
            skills: [
                "Full Stack Development",
                "eCommerce Development",
                "RESTful API Design",
                "Single Page App Development",
                "Functions Based Microservices"
            ],
            technologies: [
                'C#',
                ".NET Core",
                "Microsoft SQL Server",
                "MongoDb",
                "Typescript",
                "Angular 5",
                "HTML",
                "Material Design"
            ],
            gist: [`QPilot is a \"RESTful API and serverless/functions based backend for powering Automatic Replenishment of consumer goods.\"`,

            "Translation: \"Would you like these coffee beans every Monday? How about on the 10th of every month? You can pause, resume, change frequency, add or remove products to this schedule at any time, via a chatbot if you wish!\"\.",
            
            "I am one of two engineers that has built this product up from an idea and an ERD to a production web service over the past year."]
        },

        // bytely.me
        {
            id: "bytelyme",
            name: "bytely.me",
            link: "http://bytely.me",
            img: "bytelyme1.png",
            skills: [
                "Application Design",
                "Full Stack Development",
                "RESTful API Design",
                "Single Page App Development",
                "Project Management"
            ],
            technologies: [
                "Javascript",
                "React",
                "Python",
                "Flask",
                "MongoDb",
                "Bootstrap",
                "HTML",
                "Sass"
            ],
            gist: ["bytely.me is a bit.ly clone written in Python for Flask, with a React front end. Guest users can enter long, ugly URLs and receive shortened versions that redirect to their original links, and registerd users can track basic statistics about who is clicking on their links including geographic location, time of day, and device type. It also supports custom branded links."]
        },


        // Autoship Cloud
        {
            id: "autoshipcloud",
            name: "Autoship Cloud",
            link: "https://wordpress.org/plugins/autoship-cloud/",
            img: "autoship-cloud.png",
            skills: [
                "Full Stack Development",
                "eCommerce Development",
                "Wordpress Plugin Development",
                "WooCommerce Development"
            ],
            technologies: [
                "PHP",
                "MySQL",
                "Wordpress",
                "Angular 5",
                "HTML",
                "CSS"
            ],
            gist: ["While QPilot can integrate with any eCommerce platform, Autoship Cloud is the officially supported integration of the service with the eCommerce platform WooCommerce. Autoship Cloud is a Wordpress plugin that extends WooCommerce and allows a WooCommerce store to talk with QPilot."]
        },

        // BBATX Video Journal
        {
            id: "bbatxvideojournal",
            name: "BBATX Video Journal",
            link: "",
            img: "bbatx.png",
            skills: [
                "Front-end Development"
            ],
            technologies: [
                "Typescript",
                "Angular 5",
                "HTML",
                "CSS"
            ],
            gist: ["Made for the non-profit Boss Babes ATX (BBATX), this video journal allows guests at BBATX events to leave video responses to prompts specified by the organization.",
            "The app runs in the browser on an iPad set up at the event. Users select from one of several prompts, at which point the app opens the selfie camera on the iPad. Once finished with their video response, the user is prompted to provide their name and email address. The organizers of the event can later view all the responses."]
        },

        // Quick Address
        {
            id: "quickaddress",
            name: "Quick Address",
            link: "https://github.com/marcushaddon/quick-address",
            img: "quickaddress1.png",
            skills: [
                "Command Line Utility Development"
            ],
            technologies: [
                "Python",
                "Click"
            ],
            gist: ["Working in eCommerce, I often find myself writing the same shipping/billing form (in some form or another) over and over again. One of my new year’s resolutions is to live a DRYer life, so I automated that. quick-address is a command line utility I built for spitting out shipping/billing forms (be they in HTML, PHP, Javascript, whatever) using a templating syntax."]
        },

        // Video to ASCII art
        {
            id: "asciiart",
            name: "Video to ASCII Art",
            link: "https://www.youtube.com/watch?v=fSCmVCcgmes",
            img: "running.gif",
            skills: [
                "Video/Image Processing",
                "Batch Processing",
                "Command Line Utility Development"
            ],
            technologies: [
                "Python",
                "Click",
                "Pillow",
                "Bash",
                "FFMPEG"
            ],
            gist: ["A command line tool I built for a filmmaker friend. It takes as input a digital video file, and converts it into an ASCII art representation. It supports 'key frame' like editing through .csv files. It is being used to create a music video."]
        },

        // Talking to trees
        {
            id: "trees",
            name: "Talking To Trees",
            link: "",
            img: "trees.gif",
            skills: [
                "Natural Language Processing",
                "REST API"
            ],
            technologies: [
                "Python",
                "TextBlob",
                "Javascript",
                "webKitSpeechRecognition",
                "Open Sound Control Protocol"
            ],
            gist: ["An app that converts speech to text, tags the text using Sentiment Analysis, and sends notifications via OSC protocol to another application controlling output of projection mapping onto trees.",
            "Part of an outdoor art installation in which visitors walked through a grove of trees where hidden microphones picked up their speech, causing the trees to 'react' to their speech in terms of volume, pitch, and sentiment. A more detailed demonstration is forthcoming."]
        },
    ]
};

export default Model;