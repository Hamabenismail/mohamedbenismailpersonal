/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mohamed Ben Ismail",
  title: "Hi all, I'm Mohamed Ben Ismail",
  subTitle: emoji(
   [ `A passionate DevOps engineer and Full Stack Software Developer
   🚀 having an experience in building, deploying and maintaining Web and Mobile applications in cloud or  on-premises environments. `
  ]  

  ),
  resumeLink:
    "https://drive.google.com/file/d/1M6Z9jBzHAZLtOWBOLuBjZdfCe9QKYewK/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hamabenismail",
  linkedin: "https://www.linkedin.com/in/benismail/",
  gmail: "mohamedwaelbenismail@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  medium: "https://medium.com/@mohamedwaelbenismail",
  // Instagram and Twitter are also suptported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Developing highly robust, scalable and secure backend"
    ),
    emoji("⚡ Building highly scalable, secure and cloud infrastructure "),

    emoji(
      "⚡ Creating CI/CD pipelines with required steps: building, packaging, testing and deploying  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-industry"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National institute of applied Science and technology",
      logo: require("./assets/images/insat.png"),
      subHeader: "Engineering in  in Computer Science",
      duration: "September 2017 - September 2022",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend engineering ",
      progressPercentage: "90%"
    },
    {
      Stack: "Devops engineering",
      progressPercentage: "90%"
    },
    {
       Stack: "Cloud engineering",
       progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software engineering",
      company: "Deepmetis",
      companylogo: require("./assets/images/deepmetis.jpeg"),
      date: "September 2020 - January 2021",
      desc: "Project: Locating useful sites for planting solar panels \"Deepmetis\"",
      descBullets: [
        "Developing APIS using flask",
        "Developing Frontend using vuejs",
        "Designing Dynamodb schemas",
        "Deploying the app to a serveless architechture",      
        "Creating CI/CD pipelines"
      ]
    },
    {
      role: "Lead Tech",
      company: "Vayetek",
      companylogo: require("./assets/images/vayetek.png"),
      date: "September 2020 - January 2021",
      desc: "Project: Event management platform \"Eventizer\"",
      descBullets: [
        "Managing a team of four developers following agile scrum methodology",       
        "Working with the commercial team to identify new features to be developed",
        "Creating CI/CD infrastructure using Gitlab+docker+Ansible ",
        "Code review and technical validation of Features"
      ]
    },
    {
      role: "Part-time job as a full-stack developer ",
      company: "Vayetek",
      companylogo: require("./assets/images/vayetek.png"),
      date: "February 2020 - September 2020",
      desc: "Project: Event management platform \"Eventizer\"",
      descBullets: [
        "Application architecture design (Database and code design) ",
        "Implementing Frontend features",
        "Implementing Backend features",
        "Creating unit/integration tests",
        "code refactoring"
      ]
    },
    {
      role: "Full stack developer internship",
      company: "Seemantov ",
      companylogo: require("./assets/images/seemantov.jpg"),
      date: `August 2019 - November 2019`,
      desc: "Project: Pharmacy management platform \"LinkyPharm\"",
      descBullets: [
        "Implementing the front side using Angular",
        "Implementing Rest APIs using Spring boot",
        "Implementing front-end and back-end unit/integration tests "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/eventizer-bg.png"),
      projectName: "Eventizer",
      projectDesc: "Event management platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eventizer.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/index.png"),
      projectName: "GeoMetis",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS associate certified developer",
      subtitle:
        "",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c8d433a2-a5c7-4998-9b4b-d4a9cecfb978?source=linked_in_profile"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://mohamedwaelbenismail.medium.com/serverless-vs-server-based-architectures-3ef054216608",
      title: "Why I think that small companies/startups should use serverless architecture.",
      description:
        "Serverless vs server-based architectures."
    },
    {
      url: "https://bit.ly/3d1lcCM",
      title: "How to automate build and deployment to your AWS ec2-instance",
      description:
        "Angular Application CI/CD with Gitlab , Docker and Ansible"
    },
    {
      url: "https://link.medium.com/8xRSo4YaN5",
      title: "How to build deep and meaningful relationships with others",
      description:
        ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
