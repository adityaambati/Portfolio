import profilePic from '../images/profile_pic.jpg';
import avatarImg from '../images/fsd.png';
import email from '../images/email.jpg';
import phone from '../images/phone.jpg';

import cv_link from '../docs/resume.pdf';

import neu from '../images/org/neu.png';
import sjbit from '../images/org/sjbit.jpeg';

import onsolve from '../images/org/onsolve.png';
import infosys from '../images/org/infosys.png';
import speckbit from '../images/org/speckbit.jpeg';

import java from '../images/skills/java.jpeg';
import python from '../images/skills/python.jpeg';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/js.jpeg';
import typescript from '../images/skills/ts.png';

import angular from '../images/skills/angular.png';
import react from '../images/skills/react.png';
import node from '../images/skills/node.png';
import express from '../images/skills/express.png';
import springboot from '../images/skills/springboot.png';
import jquery from '../images/skills/jquery.png';
import bootstrap from '../images/skills/bootstrap.png';
import tailwindCSS from '../images/skills/tailwindCSS.jpeg';
import numPy from '../images/skills/numPy.png';
import pandas from '../images/skills/pandas.png';
import sciKitLearn from '../images/skills/sciKit-learn.jpg';
import matPlotLib from '../images/skills/matPlotLib.png';
import seaborn from '../images/skills/seaborn.png';
import openCV from '../images/skills/openCV.png';

import jest from '../images/skills/jest.png';
import enzyme from '../images/skills/enzyme.png';
import protractor from '../images/skills/protractor.png';
import jasmine from '../images/skills/jasmine.png';
import mocha from '../images/skills/mocha.png';
import chai from '../images/skills/chai.png';

import mysql from '../images/skills/mysql.png';
import mongodb from '../images/skills/mongodb.png';
import hibernate from '../images/skills/hibernate.jpeg';
import sequelize from '../images/skills/sequelize.png';

import git from '../images/skills/git.png';
import heroku from '../images/skills/heroku.png';
import anaconda from '../images/skills/anaconda.png';
import jupyter from '../images/skills/jupyter.png';
import vscode from '../images/skills/vscode.png';
import eclipse from '../images/skills/eclipse.png';
import packer from '../images/skills/packer.png';

import aws from '../images/skills/aws.png';
import azure from '../images/skills/azure.png';
import gcp from '../images/skills/gcp.png';
import cicd from '../images/skills/cicd.png';
import githubActions from '../images/skills/githubActions.png';
import pulumi from '../images/skills/pulumi.png';

import eduAssign from '../images/projects/eduAssign.png';
import foodzilla from '../images/projects/foodzilla.png';
import eventManagementSystem from '../images/projects/eventmanagementsystem.jpg';
import infyMansions from '../images/projects/infyMansions.jpeg';
import banking from '../images/projects/banking.png';
import air from '../images/projects/air.png';
import face from '../images/projects/face.png';
import smartClassroom from '../images/projects/smartClassroom.jpeg';

import azureCertificate from '../images/certificates/microsoft-certified-azure-fundamentals.png';
import awsCertificate from '../images/certificates/aws-certified-developer-associate.png';

export const homeDetailsMockData = {
  id: 1,
  name: 'Aditya Ambati',
  job_title: 'Back-End Developer',
  par_inro: 'Welcome to my personal world.',
  avatar_img: profilePic,
  hireMe_link: 'adityaambati.cs@gmail.com',
  cv_link: cv_link
};

export const aboutMeMockData = {
  id: 1,
  title: 'About Me',
  title_2: 'Graduate @ University of Massachusetts Boston | SDE | Back-End Developer',
  description: "I am a graduate of the University of Massachusetts Boston with a Master's in Computer Science.\n\nWith three years of industry experience as a Software Development Engineer at  University of Massachusetts Boston, Tata Consultancy Services and innData Analytics, my expertise centers on Back-End Development, underpinned by a robust ability in developing machine learning solutions. Additionally, I am proficient in leveraging cloud technologies, demonstrating a comprehensive skill set in cloud-based solution development and deployment.\n\nHaving completed my academic journey, I am confident that my blend of technical skills, professional experience, and educational background will significantly contribute to my career growth as a Software Development Engineer. I am eager to explore opportunities that not only allow me to apply my skills but also provide a platform for continuous learning and professional development in the dynamic fields of software engineering.",
  about_avatar: avatarImg,
};

export const educationWorkExperienceMockData = {
  education: [
    {
      id: 1,
      university: 'University of Massachusetts Boston',
      degree: 'MS, Computer Science',
      completionDate: 'May 2023',
      coursework: ['Concepts of Object Oriented Design', 'Application Engineering & Development', 'Web Design & User Experience Engineering', 'Database Management & Database Design', 'Web Development Tools & Methods', 'Network Structures & Cloud Computing'],
      logo: neu,
    },
    {
      id: 2,
      university: 'Sri Vasavi Engineering College',
      degree: 'B.Tech, Computer Science & Engineering',
      completionDate: 'April 2018',
      coursework: ['Data Structures & Applications', 'Design & Analysis of Algorithms', 'Computer Networks', 'Unix & Shell Programming', 'Operating Systems', 'Web Technology & Applications', 'Java and J2EE', 'Python Application Programming', 'Machine Learning'],
      logo: sjbit,
    },

  ],
  workExperience: [
    {
      id: 1,
      position: 'Library Systems and Applications Developer',
      company: 'University of Massachusetts Boston',
      duration: 'Dec 2021 - Present',
      responsibilities: [
        'Managed library applications including Alma and Primo VE, enhancing user interface and access to collections.',
        'Developed APIs and scripts for data interoperability and analytics, improving data workflows with Tableau.',
        'Maintained and secured AWS Cloud Servers, resolved technical issues, and documented system standards.',
      ],
      logo: onsolve,
    },
    {
      id: 2,
      position: 'Software Engineer',
      company: 'Tata Consultancy Services',
      duration: 'Dec 2018 - Aug 2021',
      responsibilities: [
        'Developed a fully-functional Retail Predictions system using Spring Boot, Hibernate, and MySQL, allowing users to create, manage, and promote events through an intuitive user interface',
        'Developed a web application using ExtJS, Spring Boot, and PostgreSQL, overseeing the full spectrum of front-end to back-end processes.',
        'Collaborated with teams to create RESTful APIs, boosting data exchange efficiency by 40%, and implemented extensive unit testing in Spring Boot, achieving over 95% code coverage.',
        'Optimized Java code and SQL for efficient large file handling, and automated sales data processes, reducing operation time from 4 hours to 1 hour, thereby meeting stringent client SLAs.',
      ],
      logo: infosys,
    },
    {
      id: 3,
      position: 'DevOps Engineer',
      company: 'innData Analytics Private Limited',
      duration: 'Jan 2019 - Mar 2019',
      responsibilities: [
        'Implemented and deployed CI/CD pipelines using OpenShift and Jenkins across multiple projects, catering to both monolithic and micro-services architectures.',
        'Developed cron schedulers for automated messaging and database operations, achieving an 80% reduction in process time.',
        'Designed and optimized data pipelines using Apache StreamSets ETL Tool, enhancing efficiency by 70% and significantly reducing manual intervention.',
      ],
      logo: speckbit,
    },
  ],
};


export const projectsMockData = [
  {
    id: 1,
    project_title: 'Search Engine Optimization and Data Analysis',
    tech_stack: 'HTML, CSS, javascript, Java, MapReduce, Hadoop',
    project_avatar: foodzilla,
    project_info: [
      'Engineered a Java-based PageRank algorithm on Hadoop to rank Wikipedia pages, tested on Amazon EC2 with a 39 GB dataset.',
      'Adapted text search for case-insensitivity and precision within Hadoop, enhancing search accuracy on extensive XML data.',
      'Deployed scalable MapReduce jobs on AWS, leveraging Elastic MapReduce for efficient data processing and analysis.',    
    ],
    project_links: null,
  },
  {
    id: 2,
    project_title: 'Timesheet Application',
    tech_stack: 'ReactJS, Spring Boot, PostgreSQL, AWS, S3, Beanstalk',
    project_avatar: eduAssign,
    project_info: [
      'Developed a web-based timesheet system using Java Spring Boot, React, and AWS, for efficient event time tracking and management.',
      'Designed and implemented a multi-tier architecture with REST API, facilitating role-based access for Admin, Manager, and Supervisor levels.',
      'Integrated email notifications and document management to boost system functionality and user engagement.',
     ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/adityaambati/time_sheet'
      }
    ],
  },
  {
    id: 3,
    project_title: 'Event Management System',
    tech_stack: 'HTML, CSS, Spring Boot, Hibernate, MySQL',
    project_avatar: eventManagementSystem,
    project_info: [
      'Developed a fully-functional event management system using Spring Boot, Hibernate, and MySQL, allowing users to create, manage, and promote events through an intuitive user interface',
      'Architected the database schema, REST APIs, and front-end views to develop a scalable and maintainable system',
      'Established robust email notification and image hosting functionality, improving overall user experience and satisfaction',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/EventManagementSystem'
      }
    ],
  },
  {
    id: 5,
    project_title: 'Banking Management System',
    tech_stack: 'Java, Java Swing, MySQL',
    project_avatar: banking,
    project_info: [
      'Created a Java-based Banking Management System with advanced features, including graphical insights via pie charts',
      'Designed a modular system with distinct modules for different operations, ensuring efficient access and user management',
      'Implemented a sophisticated authorization and authentication system, enabling secure access and role-based user management',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/BankingManagementSystem'
      }
    ]
  },
  {
    id: 7,
    project_title: 'Face Modelling and Face Recognition from Complex and Crowded Images',
    tech_stack: 'Python, OpenCV, Neural Networks, Flask',
    project_avatar: face,
    project_info: [
      'Constructed an OpenCV-based face detection model with a validation accuracy of 97% (Viola Jones algorithm)',
      'Created face completion model to predict lower halves of faces with an accuracy of 81% employing ANNs',
      'Spearheaded a team of 4 to build a face recognition model using CNN with an accuracy of 96.5%',
    ],
    project_links: null,
  },

];

export const certificationsMockData = [
  {
    id: 1,
    title: 'AWS Certified Developer - Associate',
    image: awsCertificate, 
    link: 'https://www.credly.com/badges/6646e8df-5e21-4f53-8ac3-7a99db4200e4/public_url', 
  },
  {
    id: 2,
    title: 'CCA Spark and Hadoop Developer (CCA175)',
    image: azureCertificate, 
    link: 'https://www.credly.com/badges/6646e8df-5e21-4f53-8ac3-7a99db4200e4/public_url', 
  },
];


export const contactsMockData = [
  {
    id: 1,
    icon: email,
    contact_name: 'Email',
    contact_info: 'adityaambati.cs@gmail.com',
  },
  {
    id: 2,
    icon: phone,
    contact_name: 'Phone',
    contact_info: '+18573086314',
  },
];

export const socialMediaMockData = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adityaambati/',
    social_icon: 'bx bxl-linkedin',
  },
  {
    id: 2,
    name: 'GitHub',
    link: 'https://github.com/adityaambati',
    social_icon: 'bx bxl-github',
  },
];

export const languagesIconsMockData = [
  { id: 1, skill: 'Java', icon: java },
  { id: 2, skill: 'Python', icon: python },
  { id: 3, skill: 'HTML', icon: html },
  { id: 4, skill: 'CSS', icon: css },
  { id: 5, skill: 'JavaScript', icon: js },
  { id: 6, skill: 'TypeScript', icon: typescript },

  { id: 7, skill: 'Angular', icon: angular },
  { id: 8, skill: 'React.js', icon: react },
  { id: 9, skill: 'Node.js', icon: node },
  { id: 10, skill: 'Express.js', icon: express },
  { id: 11, skill: 'Spring Boot', icon: springboot },
  { id: 12, skill: 'jQuery', icon: jquery },
  { id: 13, skill: 'Bootstrap', icon: bootstrap },
  { id: 14, skill: 'Tailwind CSS', icon: tailwindCSS },

  { id: 15, skill: 'Jest', icon: jest },
  { id: 16, skill: 'Enzyme', icon: enzyme },
  { id: 17, skill: 'Protractor', icon: protractor },
  { id: 18, skill: 'Jasmine', icon: jasmine },
  { id: 19, skill: 'Mocha', icon: mocha },
  { id: 20, skill: 'Chai', icon: chai },

  { id: 21, skill: 'MySQL', icon: mysql },
  { id: 22, skill: 'MongoDB', icon: mongodb },
  { id: 23, skill: 'Hibernate', icon: hibernate },
  { id: 24, skill: 'Sequelize', icon: sequelize },

  { id: 25, skill: 'AWS', icon: aws },
  { id: 26, skill: 'Azure', icon: azure },
  { id: 27, skill: 'GCP', icon: gcp },
  { id: 28, skill: 'CI/CD', icon: cicd },
  { id: 29, skill: 'GitHub Actions', icon: githubActions },
  { id: 30, skill: 'Packer', icon: packer },
  { id: 31, skill: 'Pulumi', icon: pulumi },

  { id: 32, skill: 'NumPy', icon: numPy },
  { id: 33, skill: 'Pandas', icon: pandas },
  { id: 34, skill: 'SciKit-Learn', icon: sciKitLearn },
  { id: 35, skill: 'MatPlotLib', icon: matPlotLib },
  { id: 36, skill: 'Seaborn', icon: seaborn },
  { id: 37, skill: 'OpenCV', icon: openCV },

  { id: 38, skill: 'Git', icon: git },
  { id: 39, skill: 'Heroku', icon: heroku },
  { id: 40, skill: 'Anaconda', icon: anaconda },
  { id: 41, skill: 'Jupyter Notebook', icon: jupyter },
  { id: 42, skill: 'VS Code', icon: vscode },
  { id: 43, skill: 'Eclipse', icon: eclipse },

];
