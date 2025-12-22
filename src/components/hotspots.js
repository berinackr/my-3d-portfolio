import { createRef } from 'react'

export const HOTSPOTS = [
  {
    id: 'hello',
    position: [0, 5, 28],
    title: 'HI! I\'M BERNA',
    text: ' I\'m a Computer Engineer. Let me tell you how I got here.',
    image: null,
    link: null,
    ref: createRef()
  },
  {
    id: 'school',
    position: [19, 5, 21],
    title: null,
    text: 'It all started in 2020. Finished high school, jumped into Eskisehir Osmangazi University - and things got real. ',
    image: 'public/images/logo.png',
    link: null,
    ref: createRef()
  },
  {
    id: 'hazirlik',
    position: [28, 5, 3],
    title: null,
    text: 'The first stop was a prep year. One year focused on English and getting used to a new rhythm.',
    image: null,
    link: null,
    ref: createRef()
  },
  {
    id: 'pointCamera',
    position: [25, 5, -15],
    title: null,
    text: 'After that, classes and projects took over, leading to my first large-scale project: a Cloud Camera System.',
    image: null,
    link: 'https://github.com/berinackr/3D_Grid_Based_Mapping',
    ref: createRef()
  },
  {
    id: 'internship',
    position: [3, 5, -29],
    title: null,
    text: 'Then came real-world experience. I did an internship in the defense industry, focusing on object-oriented programming.',
    image: null,
    link: null,
    ref: createRef()
  },
  {
    id: 'parttime',
    position: [-19, 5, -23],
    title: null,
    text: 'In my final year, I didn’t just study. I worked part-time on my advisor’s projects and gained hands-on experience.',
    image: null,
    link: 'https://cisar.ogu.edu.tr/',
    ref: createRef()
  },
  {
    id: 'gradproject',
    position: [-30, 5, -3],
    title: null,
    text: 'Along the way, I completed my graduation project — an electric vehicle application focused on speed and range prediction and fleet management.',
    image: null,
    link: 'https://github.com/berinackr/EV_Fleet_Management_System',
    ref: createRef()
  },
  {
    id: 'internship2',
    position: [-26, 5, 14],
    title: null,
    text: 'I also completed my second internship for graduation at an online artificial intelligence company.',
    image: null,
    link: null,
    ref: createRef()
  },
  {
    id: 'graduate',
    position: [-12, 5, 25],
    title: 'And now I’m here.',
    text: 'I graduated in September 2025. This feels less like an ending and more like a starting point.',
    image: null,
    link: null,
    ref: createRef()
  }
]
