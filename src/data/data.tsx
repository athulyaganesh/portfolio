import {
  AcademicCapIcon,
  //CalendarIcon,
  DownloadIcon,
  //ExclamationCircleIcon,
  FlagIcon,
  MapIcon,
  //MailIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import EMailIcon from '../components/Icon/MailIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import portfolioImage0 from '../images/portfolio/portfolio-0.png';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from "../images/portfolio/portfolio-5.jpg"; 
import portfolioImage6 from "../images/portfolio/portfolio-6.png"; 
import portfolioImage7 from "../images/portfolio/portfolio-7.jpg"; 
import portfolioImage8 from "../images/portfolio/portfolio-8.jpg"; 
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import portfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import portfolioImage15 from '../images/portfolio/portfolio-15.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  //SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Athulya Ganesh',
  description: 'Resume website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi. I'm Athulya Ganesh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Leaner. Developer. Fitness Enthusiast. Self-described funny person.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me practicing <strong className="text-stone-100">Yoga</strong>, watching
        some <strong className="text-stone-100">Bollywood classics</strong>, or working on{' '}
        <strong className="text-stone-100">fun projects.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an undergraduate and Masters Computer Science graduate from the University of Cincinnati, looking out for new experiences in the field of Computer Science. When I started my degree in Computer Science, I knew absolutely nothing. Hours of research, projects, Leetcode problems and internship searches, I am comfortable with what I have learnt, and would love to keep going. Join me on my quest to conquer this field!`,
  aboutItems: [
    {label: 'Location', text: 'Cincinnati, OH', Icon: MapIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Dogs, Yoga, Bollywood movies', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Cincinnati', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'ITW', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section

export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];
 */

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Clinical Workflow Analysis Tool',
    description: '',
    url: 'https://www.youtube.com/watch?app=desktop&v=z3obuvSdLeg',
    image: porfolioImage1,
  },
  {
    title: 'FlaskBlog',
    description: '',
    url: 'https://github.com/athulyaganesh/flaskapp',
    image: porfolioImage2,
  },
  {
    title: 'D3.js Health Data Visualization',
    description: '', 
    url: "https://main--health-usa-metric.netlify.app/",
    image: portfolioImage6
  },
  {
    title: 'Bulletin Board Messaging System',
    description: '',
    url: 'https://github.com/athulyaganesh/messaging-system',
    image: porfolioImage3,
  },
  {
    title: 'Time Motion Data Collector',
    description: '',
    url: 'https://www.icdcu.org/project#h.ay6xeclicyq5',
    image: porfolioImage4,
  },
  {
    title: 'Alterna-Canvas (Gamified)', 
    description: "", 
    url: 'https://alterna-canvas.vercel.app/',
    image: portfolioImage5
  }, 
  {
    title: 'Azure Data Visualization',
    description: '',
    url: 'https://github.com/athulyaganesh/Cloud-Computing-Final-Project',
    image: portfolioImage0,
  },
  {
    title: 'athuDesk',
    description: '',
    url: 'https://ui-smart-desk.vercel.app/',
    image: porfolioImage12,
  }, 
  {
    title: '[SIGHTSTEP] by the Vision Vanguards (Senior Design Project)',
    description: '',
    url: 'https://www.github.com/mullise147/VisionVanguards',
    image: portfolioImage13,
  },
  {
    title: 'leettrack',
    description: '', 
    url: 'https://leettrack-sigma.vercel.app/',
    image: portfolioImage14,
  },
  {
    title: 'athuNotes',
    description: '', 
    url: 'https://github.com/athulyaganesh/athuNotes',
    image: portfolioImage15,
  },
  {
    title: 'UFO Data Visualization',
    description: '',
    url: 'https://github.com/nishilfaldu/ufo-sightings-visualization',
    image: portfolioImage7
  },
  {
    title: 'Exploring the TV Show: Frasier',
    description: '',
    url: 'https://balfouwuc.github.io/DataVisProject3TVTime/',
    image: portfolioImage8
  },

  //{
  //   title: 'Time Motion Data Collector',
  //   description: '',
  //   url: 'https://www.icdcu.org/project#h.ay6xeclicyq5',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2024',
    location: 'University of Cincinnati',
    title: 'Masters of Engineering in Computer Science',
    content: <p>A combined program with my Bachelors degree. I will receive this degree in December 2024.</p>,
  },
  {
    date: 'May 2024',
    location: 'University of Cincinnati',
    title: 'Bachelors of Science in Computer Science',
    content: <p>Distinguished Honors Scholar; Summa Cum Laude. Recipient of UC Global & UC International Outreach Scholarship, graduated in May 2024.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'ITW',
    title: 'Software Engineer',
    content: ( <ul>
      <li>Implemented full-stack features using C++, JavaScript, QML and SQL, reducing processing time by 25% for clients like Walmart.</li>
      <li>Envisioned and optimized Python scripts to reduce data retrieval time by 30%, accelerating weighing and boosting revenue by $50k.</li>
      <li>Aligned closely with clients to deliver unique features 9% ahead of schedule, enhancing relationships with key accounts like Costco.</li>
      </ul>
    ),
  } , 
  {
    date: 'May 2023 - August 2023',
    location: 'Nokia',
    title: 'Software Engineering Intern',
    content: (
      <ul>
      <li>Generated a Java web application, enhancing system performance by 20% through optimized code and efficient database integration.</li>
      <li>Implemented backend services and Python scripts, and tested with Docker for containerization, reducing monthly bug reports by 20%.</li>
      <li>Teamed with cross-functional experts to integrate Java applications, cutting integration time by 2 weeks, enhancing project efficiency.</li>
      </ul>
    ),
  } , 
  {
    date: 'January 2022 - Present',
    location: 'University of Cincinnati, Cincinnati',
    title: 'Part Time Student Worker at AIMS and MEMS Laboratory',
    content: ( <ul>
      <li> Working on a Flask Application to collect particulate data in real-time (using RaspberryPi) and display
      it on various graphs.</li>
      <li>Optimized Linux OS on Raspberry Pi, reducing current draw by 23.6%, showing system efficiency skills.</li>
      <li>Improved 3D printing and inventory documentation reflecting resilience and market impact potential.</li>
    </ul>
     
    ),

    },
  {
    date: 'August 2022 - Present',
    location: 'University of Cincinnati, Cincinnati',
    title: 'Resident Advisor',
    content: (
      <ul>
        <li>Developed and implemented educational programs and workshops on topics such as time management, study skills, and wellness, enhancing the overall academic and personal growth of residents.</li>
        <li>Organized and led community-building activities and events to promote social interaction, cultural awareness, and a sense of belonging among residents.</li>
      <li>Provided individualized support and mentorship to students, assisting with academic challenges, personal development, and conflict resolution, fostering a supportive and inclusive living environment.
      </li>
      </ul>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'FOX Sports, Cincinnati',
    title: 'Software Engineer Co-op',
    content: (
      <ul>
      <li>Developed interactive features using JavaScript, specific to the live World Cup match scoring, garnering 93% positive user reviews.</li>
      <li>Optimized user interface for 20+ pages using JSON tests, greatly improving user experience, increasing conversion rates by 20.4%.</li>
      <li>Facilitated stand-ups as interim Agile project manager, enhancing collaboration by aligning tasks with skills and optimizing delegation.</li>
      </ul>
    ),
  },
  {
    date: 'August 2021 - December 2021',
    location: 'Infinera, San Jose',
    title: 'Software Engineer Intern',
    content: (<ul>
      <li>Engineered a robust ASIC chip health check API in Python, ensuring performance and stability, improving diagnostic accuracy by 30%.</li>
      <li>Created a React dashboard to visualize API results, enabling the team to solve issues faster, handling 2x the volume of cases weekly.</li>
      <li>Authored comprehensive API documentation, improving team communication and collaboration, reducing onboarding time by 17%.</li>
      </ul>
    ),
  },
  {
    date: 'January 2021 - May 2021',
    location: 'ICDCU Lab, Cincinnati',
    title: 'Software Engineer Intern',
    content: (
      <ul>
        <li>Developed a collaboration platform using Flask, Python and SQLite, supporting 35 members in improving file management efficiency.</li>
        <li>Redesigned 3 authentication pages with Figma and Flask, enhancing security and UI/UX, thus reducing login time by an average of 2s.</li>
        <li>Collaborated with stakeholders to gather requirements, streamlining workflows, increasing productivity per person by 4 hours/week.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Tom Zentemeyer, VP @ Fox Sports',
      text: 'Athulya is always professional and displays strong initiative. Our team was impressed by her efforts to go beyond what was expected of her and pick up new roles as opportunities became available. Athulya is a go-getter who makes the most of opportunities for learning and self-improvement.',
      image: '',
    },
    {
      name: 'Hardeep Singh, Senior Engineer @ Nokia',
      text: 'During her internship, Athulya made significant contributions to our IP Division, specifically focusing on the implementation of embedded software code for 5G mobile backhaul routers. Athulya exhibited remarkable strengths throughout her internship, particularly in communication, initiative and perseverence. Athulya demonstrated a keen initiative in rapidly acquiring new knowledge and skills, playing a pivotal role in the cleanup of testbench code.'
    },
    {
      name: 'Dr. Tao Li, Associate Professor and UC MEM and AIM Laboratory',
      text: 'I would like to highlight the active participation in sensor and pump selection research, where her insights have been valuable in guiding the team towards optimal choices. Her ability to collaborate with fellow researchers and contribute meaningfully to the decision making process has been commendable. '
    },
    {
      name: 'Dr. Jillian Aurisano, Associate Professor and DaVINCI Laboratory',
      text: 'Athulya has impressed me with her deep technical knowledge. In my discussions of her senior design project, she is quick to break complex tasks into components and describe the constraints and requirements for realizing project goals. Athulya also has a unique talent for user-experience design, visual-design and front-end development. Athulya has impressed me with her creativity in considering diverse designs to address user-experience challenges. Athulya is also a student who has significant leadership potential. Athulya has an effective communication style in meetings and in presentations to the class. In collaborative discussions, she is quick to synthesize disparate discussion points and propose plans and solution. '
    }
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me with project ideas you would like to collaborate on, or just for fun!',
  items: [
    {
      type: ContactType.Email,
      text: 'athulya.ganesh2001@gmail.com',
      href: 'mailto:athulya.ganesh2001@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Athulya Ganesh',
      href: 'https://www.linkedin.com/in/athulyaganesh/',
    },
    {
      type: ContactType.Github,
      text: 'athulyaganesh',
      href: 'https://github.com/athulyaganesh/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/athulyaganesh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/athulyaganesh/'},
  {label: 'Email', Icon: EMailIcon, href: 'athulya.ganesh2001@gmail.com'},
];
