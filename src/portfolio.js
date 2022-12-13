import ppImg from './assets/images/parkpickerss.png';
import ntImg from './assets/images/notetakerSS.png';
import fwcImg from './assets/images/fwcss.jpg';
import rmImg from './assets/images/readmess.png';
import spImg from './assets/images/securepasswordgeneratorSS.png';
import vvImg from './assets/images/VVdatass.png';

const header = {
  homepage: 'https://mg8955.github.io/cleanfolio',
  title: 'MG',
}

const about = {
  name: 'Michael Gostomski',
  role: 'Servant Leader, Adventure Seeker, and Full Stack Developer',
  description:
    'I am always looking for a challenge that tests my abilities and pushes my limits. I take pride in building and leading exceptional and diverse teams. At the end of the day, it is all about better serving my clients.',
  description2: 
  'My growth-mindset has led me to founding and selling my first startup, solving complex logistics problems for a nationwide cold-chain transportation company, and the pursuit of extreme endurance sports.',
  description3: 'This yearning for growth set me on the path to becoming a Full Stack Developer.',
  resume: 'https://docs.google.com/document/d/1wVJ99LChMfoArFS4ehJmeGZMUQ5zTMt8U-hhGDndb9U/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/michael-gostomski/',
    github: 'https://github.com/mg8955',
  },
}

const projects = [
  {
    name: 'Park Picker',
    description:
      'An app for users to find a National Park to visit based on their outdoor activity of choice.',
    stack: [ 'JavaScript', 'React', 'GraphQL', 'Express', 'Node', 'MongoDB', 'CSS'],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/home',
    imgUrl: ppImg
  },
  {
    name: 'Note Taker',
    description:
      'A note-taker app built with Express.js. Add, save, and delete notes to keep yourself organized.',
    stack: ['Express.js', 'Node.js', 'JavaScript'],
    sourceCode: 'https://github.com/mg8955/Express.js-Note-Taker',
    livePreview: 'https://express-note-taker-mag.herokuapp.com/',
    imgUrl: ntImg
  },
  {
    name: 'README Generator',
    description:
      'A CLI App for creating a succint, professional README.',
    stack: ['JavaScript', 'Node.js', 'Inquirer'],
    sourceCode: 'https://github.com/mg8955/README-Generator',
    livePreview: 'https://github.com/mg8955/README-Generator',
    imgUrl: rmImg
  },
  {
    name: 'Secure Password Generator',
    description:
      'A simple app to generate a secure password based on user input.',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
    sourceCode: 'https://github.com/mg8955/Secure-Password-Generator',
    livePreview: 'https://mg8955.github.io/Secure-Password-Generator/',
    imgUrl: spImg
  },
  {
    name: 'Delivery Data Analysis and Visualization',
    description:
      'I implemented the collection of daily delivery data for 2021 and 2022 and created visualizations of weekly, monthly and annual statistics.',
    stack: ['Google Sheets / Excel'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imgUrl: vvImg
  },
  {
    name: 'Fairweather Cider Co.',
    description:
      'Craft Cidery startup in Austin, TX. Reader\'s and Editor\'s choice for The Austin Beerguide\'s "Best-Not-Brewery" Award in 2019',
    stack: [' '],
    livePreview: 'https://austin.eater.com/2017/11/10/16634608/fairweather-cider-co-austin',
    imgUrl: fwcImg
  },
]

const skills = [  
  'JavaScript',
  'React.js',
  'MongoDB',
  'Mongoose',
  'MySQL',
  'Sequelize',
  'Inquirer',
  'Bootstrap',
  'SASS',
  'Bootstrap',
  'Git',
  'HTML5',
  'CSS',
]

const studyingFor = [
  'Python',
  'AWS Cloud Practicioner',
  'COMPTIA Security+',
]

const contact = {
  email: 'michael@gostomski.net',
}

const footerQuote = () => {
const quotes = [
  'Be tolerant with others and strict with yourself. - Marcus Aurelius',
  'We should always be asking ourselves: “Is this something that is, or is not, in my control?” - Epictetus',
  'Make the mind tougher by exposing it to adversity. - Robert Greene',
  'Don\'t explain your philosophy. Embody it. - Epictetus',
  'Discomfort is the currency of success. - Brooke Castillo',
];
  return quotes[(Math.floor(Math.random() * quotes.length))];
}

export { header, about, projects, skills, contact, studyingFor, footerQuote }
