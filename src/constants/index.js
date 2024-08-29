import {
    mobile,
    backend,
    creator,
    web,
    infy,
    infywtbg,
    ridecell,
    trynarrativelogo,
    loanPredictor,
    nca,
    pageRank,
    newsnotif,
    spotifymusiccontroller,
    carShowcase,
    snapsphereimg,
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
        iconBg: "#E6DEDD",
        date: "Feb 2019 - May 2019",
        points: [
            "Designed and implemented a Food Delivery App, enabling users to place orders from nearby eateries and monitor real-time order progress via a map linked to the delivery driver's location and estimated time of arrival.",
            "Developed the user interface using React JS, Django web framework, and Python for backend functionality, supported by SQLite as the database. Employed AWS Amplify's Continuous Deployment pipeline to automate React app deployment, streamlining the process and saving approximately 2.5 hours of manual deployment time per merge.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Infosys",
        icon: infywtbg,
        iconBg: "#383E56",
        date: "Aug 2019 - Jul 2021",
        points: [
            "Led the creation of two web applications—an internal employee-focused and an external public-facing app—aimed at promoting partnership and disseminating collaboration details to clients, consultants, and media; combined frontend technologies like React JS, JavaScript, CSS, and Bootstrap for a mobile-responsive design, alongside robust Express.js APIs and MongoDB backend; ultimately contributing to enhancing customer relationships and playing a pivotal role in securing a record-breaking $1.5B 10-year deal for Infosys.",
            "Developed an Angular-powered mortgage calculator, facilitating borrower assessment of loan eligibility and monthly costs through multifaceted considerations, while achieving seamless integration with PEGA for optimal data exchange and deploying multiple REST web services in a production environment, culminating in a notable 10% enhancement in the website's visitor-to-conversion rate.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Ridecell",
        icon: ridecell,
        iconBg: "#FFFFFF",
        date: "Jun 2022 - Sep 2022",
        points: [
            "Engineered a full-stack module for locating nearby attractions, displaying user-centric points of interest on a map based on geolocation and preferences. Additionally, designed an adaptable Material-UI table wrapper, replacing custom data tables across various web applications.",
            "Implemented robust internationalization and localization capabilities using seamless Phrase integration within both the backend and frontend, this empowered the company to effectively deploy the same product across diverse regions, fostering broader global reach.",
            "Transformed testing by seamlessly integrating Jest coverage reports into multiple customer-facing frontend apps. As a DevOps GitHub Action, this ensures rigorous development-phase testing, elevating overall quality and functionality.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Narrative",
        icon: trynarrativelogo,
        iconBg: "#222526",
        date: "Jan 2024 - Present",
        points: [
            "Led the development of a Canvas Workflow Management tool from scratch with React, including the creation of backend services in Django. This tool enabled effortless data upload, extraction, manipulation, and mapping, with automated workflow triggers based on schedules, data changes, or new email invoices.",
            "Engineered advanced backend functionalities, leveraging algorithms and AI LLMs to intelligently convert raw, unstructured data into refined, actionable information. Also, redesigned existing web application and created user authentication flows, resulting in a consistent and intuitive layout.",
            "Successfully onboarded 3 newly acquired customers to the canvas tool, allowing them to create custom workflows and gain greater autonomy, which led to increased engagement and satisfaction.",
        ],
    },
];

const projects = [
    {
        name: "SnapSphere Social App",
        description:
            "A social media app built using React, React-Query, Appwrite, and TypeScript. Users can share photos, like posts, and save posts.",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "Appwrite",
                color: "pink-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "blue-text-gradient",
            },
            {
                name: "Shadcn-UI",
                color: "green-text-gradient",
            },
        ],
        image: snapsphereimg,
        project_link: "https://snapsphere.vercel.app/",
        source_code_link: "https://github.com/shubhamsingla27/SnapSphere",
    },
    {
        name: "Cars Showcase",
        description:
            "A Next.js app that allows users to browse through a collection of cars and view their details. Get the Rent estimation of a particular car.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "RapidAPI",
                color: "pink-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "blue-text-gradient",
            },
        ],
        image: carShowcase,
        project_link: "https://carhub.ssingla.me/",
        source_code_link: "https://github.com/shubhamsingla27/car_hub",
    },
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
    // {
    //     name: "Event-Driven Notification Service",
    //     description:
    //         "Designed publisher-subscribe model that provides real-time notifications to subscribers utilizing distributed system protocols such as broadcasting, concurrency control, shared memory.",
    //     tags: [
    //         {
    //             name: "docker",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "python",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "nodejs",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: newsnotif,
    //     source_code_link: "https://github.com/shubhamsingla27/NewsNotification",
    // },
];

export { services, experiences, projects };
