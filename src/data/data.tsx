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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage0 from '../images/portfolio/portfolio-0.png';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
        <strong className="text-stone-100">Student. Developer. Fitness Enthusiast. Self-described funny person.</strong>
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
  description: `I am an undergraduate Computer Science major at the University of Cincinnati, looking out for new experiences in the field of CS. When I started my degree in Computer Science, I knew absolutely nothing. Hours of research, projects, Leetcode problems and internship searches, I am comfortable with what I have learnt, and would love to keep going. Join me on my quest to conquer this field!`,
  aboutItems: [
    {label: 'Location', text: 'Cincinnati, OH', Icon: MapIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Dogs, Yoga, Bollywood movies', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Cincinnati', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'University of Cincinnati', Icon: OfficeBuildingIcon},
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
    title: 'Azure Data Visualization',
    description: '',
    url: 'https://github.com/athulyaganesh/Cloud-Computing-Final-Project',
    image: portfolioImage0,
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
    date: 'May/Dec 2024',
    location: 'University of Cincinnati',
    title: 'Masters of Engineering in Computer Science',
    content: <p>A combined program with my Bachelors degree. I will receive both in May 2024 (or December 2024).</p>,
  },
  {
    date: 'May/Dec 2024',
    location: 'University of Cincinnati',
    title: 'Bachelors of Science in Computer Science',
    content: <p>Part of UC Honors Program. Recipient of UC Global & UC International Outreach Scholarship</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - August 2023',
    location: 'Nokia',
    title: 'Embedded Software Engineering Intern',
    content: (
      <p>
        Achieved precise validation and industry compliance with advanced Ethernet OAM Testbench development
      </p>
    ),
  } , 
  {
    date: 'January 2022 - Present',
    location: 'University of Cincinnati, Cincinnati',
    title: 'Part Time Student Worker at AIMS and MEMS Laboratory',
    content: (
      <p>
        Working on a Flask Application to collect particulate data in real-time (using RaspberryPi)and display
        it on various graphs.
      </p>
    ),

    },
  {
    date: 'August 2022 - Present',
    location: 'University of Cincinnati, Cincinnati',
    title: 'Resident Advisor',
    content: (
      <p>
        Promote an environment conducive to living and learning, foster the personal growth of students within the
        residence hall.
      </p>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'FOX Sports, Cincinnati',
    title: 'Software Engineer Co-op',
    content: (
      <p>Create, test, debug, document and implement software features, working directly with the developer team.</p>
    ),
  },
  {
    date: 'August 2021 - December 2021',
    location: 'Infinera, San Jose',
    title: 'Application Specific Integrated Circuit Intern',
    content: (
      <p>
        Designed and developed a health checker API for the ASIC chip capable of traversing and logging register-level
        errors.
      </p>
    ),
  },
  {
    date: 'January 2021 - May 2021',
    location: 'ICDCU Lab, Cincinnati',
    title: 'Web Development Intern',
    content: (
      <p>
        Created a platform to add, edit, delete and download project files allowing 35 lab members to collaborate on
        research.
      </p>
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
      text: 'It was a pleasure to have Athulya as a co-op and contribute in our division!'
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
      href: 'https://www.linkedin.com/in/athulya-ganesh/',
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/athulya-ganesh/'},
  {label: 'Email', Icon: EMailIcon, href: 'athulya.ganesh2001@gmail.com'},
];
