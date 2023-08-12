import {
    mobile,
    backend,
    creator,
    web,
    infy,
    infywtbg,
    ridecell,
    loanPredictor,
    nca,
    pageRank,
    newsnotif,
    spotifymusiccontroller,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Machine Learning Enthusiast",
        icon: creator,
    },
];

const experiences = [
    {
        title: "Software Engineer Trainee",
        company_name: "Infosys",
        icon: infy,
        // iconBg: "#E6DEDD",
        iconBg: "#383E56",
        date: "Feb 2019 - May 2019",
        points: [
            "Developed a Food Delivery Application which allows users to order food from local restaurants & fast food chains and track the order status in real-time with a map following the delivery driver and ETA information.",
            "User interface was developed using React JS, Django web framework and Python for the backend and SQLite as the database.",
            "Deployed the React application using a Continuous Deployment pipeline in Heroku, which eliminates about 2.5 hours of manual deployment effort per merge.",
        ],
    },
    {
        title: "Software Systems Engineer",
        company_name: "Infosys",
        icon: infywtbg,
        iconBg: "#E6DEDD",
        date: "Aug 2019 - Jul 2021",
        points: [
            "Developed an internal employee facing and a public facing web application to promote the partnership and to provide information about the collaboration with client to various stakeholders. This project helped in boosting the relationship with the customer and was one of the many factors that helped in securing Infosys's largest deal yet ever estimated at about $1.5B over 10 years.",
            "Full stack development using React JS, HTML/CSS, JavaScript, Bootstrap with a mobile responsive web experience for frontend and backend APIs in ExpressJS and MongoDB as database.",
            "Designed and developed a mortgage calculator using Javascript frameworks like ReactJS and PEGA that helped borrowers understand how much they can borrow and estimated monthly outflow considering applicant age, current obligations, income, and other factors.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Ridecell",
        icon: ridecell,
        iconBg: "#383E56",
        date: "Jun 2022 - Sep 2022",
        points: [
            "Developed a full-stack nearby attraction finding module that shows points of interest centered around the end-user on a map based on their geolocation and selected preferences.",
            "Created a reusable and responsive Material-UI table wrapper component to replace existing custom-built data tables used at multiple places throughout different web applications.",
            "Integrated Jest test coverage report in a multitude of frontend applications used by different customers as a DevOps Github action so that the application can be thoroughly tested in the development phase itself.",
            "Added internationalization and localization functionality in the backend and frontend through Phrase integration so the same product can be used in different regions effectively.",
        ],
    },
];

const projects = [
    {
        name: "Loan Default Predictor",
        description:
            "A cloud-based loan delinquency predictor app in React that utilizes XGBoost model and is hosted on AWS using Amplify, API Gateway, Cognito, S3, Sagemaker and Lambda services.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "awsSagemaker",
                color: "green-text-gradient",
            },
            {
                name: "awsAmplify",
                color: "pink-text-gradient",
            },
        ],
        image: loanPredictor,
        source_code_link:
            "https://github.com/shubhamsingla27/CloudComputing-LoanPredictor-Project",
    },
    {
        name: "News Corpus Analysis",
        description:
            "Text processing and vectorization of dataset containing 20000 newsgroup documents and performed clustering using gensim, scikit-learn in Python to classify the archives into 20 distinct classes.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "jupyterNotebook",
                color: "green-text-gradient",
            },
            {
                name: "k-meansClustring",
                color: "pink-text-gradient",
            },
        ],
        image: nca,
        source_code_link:
            "https://github.com/shubhamsingla27/NLP_news_group_data",
    },
    {
        name: "PageRank",
        description:
            "Ranked 685,230 web pages from google web-graph data set in Spark using power iteration and naive algorithms separately and showed the superiority of using multiple partitions over no partition.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "powerIteration",
                color: "green-text-gradient",
            },
            {
                name: "naiveImplementation",
                color: "pink-text-gradient",
            },
        ],
        image: pageRank,
        source_code_link: "https://github.com/shubhamsingla27/PageRank",
    },
    {
        name: "Spotify Music Controller",
        description:
            "React web application to consume Spotify REST APIs for controlling music playback with backend developed using Django web framework.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "django",
                color: "green-text-gradient",
            },
            {
                name: "spotifyAPI",
                color: "pink-text-gradient",
            },
        ],
        image: spotifymusiccontroller,
        source_code_link:
            "https://github.com/shubhamsingla27/spotify_music_controller",
    },
    {
        name: "Event-Driven Notification Service",
        description:
            "Designed publisher-subscribe model that provides real-time notifications to subscribers utilizing distributed system protocols such as broadcasting, concurrency control, shared memory.",
        tags: [
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: newsnotif,
        source_code_link: "https://github.com/shubhamsingla27/NewsNotification",
    },
];

export { services, experiences, projects };
