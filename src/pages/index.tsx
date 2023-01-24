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
  'Test documentation',
  'DevTools',
  'Postman',
  'PostgreSQL',
  'Android Studio',
  'Charles',
  'XML',
  'JSON',
  'Jenkins',
  'Git',
  'JavaScript',
  'HTML',
  'CSS',
  'Learnability',
  'Adaptability',
  'Autonomy',
];

const contacts = [
  {
    name: 'Email',
    label: 'anna@notprometey.pro',
    link: 'mailto:anna@notprometey.pro',
  },
  {
    name: 'Phone',
    label: '+375333456145',
    link: 'tel:+375333456145',
  },
  {
    name: 'Telegram',
    label: '@anna_aslamova',
    link: 'https://telegram.me/anna_aslamova',
  },
  {
    name: 'LinkedIn',
    label: '@anna-aslamova',
    link: 'https://www.linkedin.com/in/anna-aslamova/',
  }
];

const languages = [
  { name: 'RUSSIAN', level: 'First' },
  { name: 'ENGLISH', level: 'Pre-intermediate' },
];

const header = {
  name: 'Anna Aslamova',
  text: 'I am conscientious about completing tasks. I readily take on new projects and see them through to the end. I work well in a team, I can resolve conflicts and find compromise. I learn quickly and easily.',
}

const historyItems = [
  {
    name: 'Tester-Assessor',
    extra: 'Yandex',
    place: 'Minsk, Belarus',
    date: {
      from: '01.01.2022',
      to: '30.04.2022'
    },
    text: 'Analysis of documentation, testing Yandex services, the creation of bug reports.',
    tools: 'Charles, DevTools, Android Studio, Yandex Traker',
  },
  {
    name: 'Student QA Engineer',
    extra: 'Yandex Practicum',
    place: 'Minsk, Belarus',
    date: {
      from: '25.07.2021',
      to: '28.11.2021'
    },
    text: 'Creating mind maps, checklists, test cases, bug reports, writing test reports. Cross-browser layout testing. Testing the application in the Android Studio emulator. Working with Postman. Testing the database. Test design techniques used: equivalence classes and boundary values, pairwise testing.',
    tools: 'Postman, PostgreSQL, Swagger, Charles, DevTools, Android Studio, Yandex Traker, bash',
  },
  {
    name: 'Teacher-defectologist',
    extra: 'School № 4 in Novopolotsk.',
    place: 'Novopolotsk, Belarus',
    date: {
      from: '15.08.2014',
      to: '13.10.2017'
    },
    text: 'Diagnostics of speech and cognitive processes, general educational lessons and remedial classes, documentation and reporting, leadership of the methodical association of teachers-defectologists of the school.',
    tools: '',
  }
];

const educationItems = [
  {
    name: 'EPAM Learn',
    place: 'Online',
    date: {
      from: '01.12.2022',
      to: '01.01.2023'
    },
    text: 'Continuous Integration with Jenkins',
    tools: ['Work with environment.', 'Manage project.', 'Manage pipeline.'],
  },
  {
    name: 'EPAM Learn',
    place: 'Online',
    date: {
      from: '01.08.2022',
      to: '01.09.2022'
    },
    text: 'Version Control with Git',
    tools: ['VCS concept.', 'Basic commands.'],
  },
  {
    name: 'EPAM Learn',
    place: 'Online',
    date: {
      from: '01.09.2021',
      to: '01.10.2021'
    },
    text: 'Software Testing Introduction',
    tools: ['Test Planning.', 'Requirements Testing.', 'Defect Reporting.'],
  },
  {
    name: 'Yandex Practicum',
    place: 'Online',
    date: {
      from: '25.07.2021',
      to: '28.11.2021'
    },
    text: 'QA Engineer professional training course',
    tools: ['QA Theory.', 'Test analysis and design.', 'Web application testing.', 'Mobile App testing.', 'API and database testing.'],
  },
  {
    name: 'Vitebsk State University named after P.M. Masherov',
    place: 'Vitebsk, Belarus',
    date: {
      from: '01.09.2009',
      to: '01.06.2014'
    },
    text: 'Oligofreno-pedagogue. Teacher-speech therapist',
    tools: ['Pedagogy.', 'Diagnostic methods.', 'Social interactions.'],
  }
];

const achievements = {
  name: 'Achievements',
  links: [
    {
      href: 'https://drive.google.com/file/d/1K6rzaqyQAIfq84eBuFXszKX7oEeXotGn/view?usp=sharing',
      text: 'Certificate of Completion of the QA Engineer Professional Training Course'
    },
    {
      href: 'https://drive.google.com/file/d/1YLPiXs-CU9EgQda9qqRXJ-CXKmGnU-eq/view?usp=sharing',
      text: 'Software Testing: Preparation for Certification ISTQB Foundation'
    }
  ],
  text: ''
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
        title="Anna Aslamova - QA engineer CV"
        meta={[
          { name: 'description', content: 'Anna Aslamova QA engineer CV file' },
          { name: 'keywords', content: 'CV, Anna Aslamova, QA engineer, testing' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className="container">
        <Follow links={followLinks} className="follow"/>
        <aside className="aside">
          <List className="aside__block" name="Key Skills and Tolls">
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
            <Items items={educationItems} format="LLL yyyy" duration={false} />
          </History>
          <TextItem className="achievements" name={achievements.name} text={achievements.text} links={achievements.links} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default CVPage
