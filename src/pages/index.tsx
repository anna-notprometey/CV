import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import "@fontsource/roboto/latin-100.css";
import "@fontsource/roboto/latin-100-italic.css";
import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-300-italic.css";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-400-italic.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-500-italic.css";
import "@fontsource/roboto/latin-700.css";
import "@fontsource/roboto/latin-700-italic.css";
import "@fontsource/roboto/latin-900.css";
import "@fontsource/roboto/latin-900-italic.css";

import "./index.scss";

import List from '../components/List';
import Skills from '../components/list/Skills';
import Contacts from '../components/list/Contacts';
import Languages from '../components/list/Languages';
import Headers from '../components/Headers';
import History from '../components/History';
import Items from '../components/history/Items';
import TextItem from '../components/TextItem';

import * as theme from './variables.module.scss';
import Avatar from '../components/Avatar';
import Follow from '../components/Follow';

import { faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const skills = [
  'JavaScript',
  'TypeScript',
  'Node JS',
  'PHP',
  'Python',
  'HTML',
  'CSS',
  'Docker',
  'Learnability',
  'Adaptability',
  'Autonomy',
];

const contacts = [
  {
    name: 'Email',
    label: 'admin@notprometey.pro',
    link: 'mailto:admin@notprometey.pro',
  },
  {
    name: 'Phone',
    label: '+375336589744',
    link: 'tel:+375336589744',
  },
  {
    name: 'Telegram',
    label: '@notprometey',
    link: 'https://telegram.me/notprometey',
  },
  {
    name: 'LinkedIn',
    label: '@notprometey',
    link: 'https://www.linkedin.com/in/notprometey/',
  }
];

const languages = [
  { name: 'RUSSIAN', level: 'First' },
  { name: 'ENGLISH', level: 'Pre-intermediate' },
];

const header = {
  name: 'Stepan Telitsyn',
  text: `Front-end developer with ${new Date().getFullYear() - 2014} years experience look for a company that needs his knowledge and experience to solve interesting and challenging tasks, which will be a good opportunity for further professional development and training`,
}

const historyItems = [
  {
    name: 'Web developer',
    extra: 'Freelance',
    place: 'Vitebsk, Belarus',
    date: {
      from: '01.09.2012',
      to: '01.06.2015'
    },
    text: 'Communication with the customer, development of front and back parts of sites, development of plug-ins for popular CMS, the layout of the layouts, API design, API development and integration',
    tools: 'PHP, Laravel, CodeIgniter, WordPress, Drupal, Joomla, JS, jQuery',
  },
  {
    name: 'Front-end developer',
    extra: 'Andersen',
    place: 'Polotsk, Belarus',
    date: {
      from: '01.06.2015',
      to: '01.05.2016'
    },
    text: 'Teamwork, design of high load systems on the backend, development of a module for working with data on the map, development of the frontend of e-commerce, development of the backend and frontend of site builder, code debagging, code refactoring, review code, testing, fixing bugs.',
    tools: 'JS, jQuery, AngularJS, ReactJS, Gulp, HTML, CSS, Bootstrap, PHP, Yii2, Git',
  },
  {
    name: 'JavaScript developer',
    extra: 'Scand',
    place: 'Minsk, Belarus',
    date: {
      from: '01.06.2017'
    },
    text: 'Team work, Team management, scrum, development of the frontend of an online store with an internal site builder, development of the backend for the site builder on the node js, server rendering, development of the frontend for car sharing system, development of scandltd/vue-injector package, code debagging, code refactoring, review code, testing, fixing bugs, improving application responsiveness, designing, performance',
    tools: 'Angular2+, VueJS, Node JS, ReactJS, TS, GraphQL, Flow, HTML, CSS, SCSS Docker, Webpack, Jira, Git, Rest, PHP, Python, Symfony, Yii2, Django, Docket, Material, Scrum, Architecture web applications, @scandltd/vueinjector',
  }
];

const educationItems = [
  {
    name: 'Physicist. Engineer',
    extra: 'Vitebsk State University named after P.M. Masherov',
    place: 'Vitebsk, Belarus',
    date: {
      from: '01.09.2009',
      to: '01.06.2015'
    },
    text: 'Computer Modeling of Physical Processes',
    tools: ['Introduction to programming.', 'Algorithms and their implementation in C++.', 'Basic web development skills.'],
  }
];

const achievements = {
  name: 'Achievements',
  links: [
    {
      href: 'https://www.npmjs.com/package/@scandltd/vue-injector',
      text: '@scandltd/vueinjector'
    }
  ],
  text: 'Developed VueJs plugin for dependancy injection.'
};

const followLinks = [
  { href: 'https://telegram.me/notprometey', icon: faTelegram },
  { href: 'https://www.linkedin.com/in/notprometey/', icon: faLinkedin },
  { href: 'mailto:admin@notprometey.pro', icon: faEnvelopeOpen },
  { href: 'tel:+375336589744', icon: faPhone },
];

const CVPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        defer={false}
        title="Stepan Telitsyn - CV"
        meta={[
          { name: 'description', content: 'Stepan Telitsyn CV file' },
          { name: 'keywords', content: 'CV, Stepan Telitsyn, Stepan, Telitsyn, frontend developer, front-end developer, frontend, front-end, frontend engineer, front-end engineer, senior, senior engineer, senior developer' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className="container">
        <Follow links={followLinks} className="follow"/>
        <aside className="aside">
          <List className="aside__block" name="Skills">
            <Skills skills={skills} />
          </List>

          <List className="aside__block" name="Contact information">
            <Contacts address="Minsk, Belarus" contacts={contacts} />
          </List>

          <List className="aside__block" name="Languages">
            <Languages languages={languages} />
          </List>
        </aside>
        <main className="main">
          <Headers className="header" name={header.name} article={header.text} />
          <Avatar className="avatar" />
          <History name="experience" className="experience">
            <Items items={historyItems} />
          </History>
          <History name="Education" className="education">
            <Items items={educationItems} format="yyyy" duration={false} />
          </History>
          <TextItem className="achievements" name={achievements.name} text={achievements.text} links={achievements.links} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default CVPage
