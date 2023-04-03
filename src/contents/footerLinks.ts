import { createID } from '../utils/helpers'
export const footerLinksData = [
  {
    id: createID(),
    footerHead: 'Services',
    footers: [
      {
        id: createID(),
        name: 'Company Review',
        link: '/services',
      },
      {
        id: createID(),
        name: 'Innovate with us',
        link: '/services',
      },
      {
        id: createID(),
        name: 'Consulting',
        link: '/contact',
      },
      {
        id: createID(),
        name: 'Tips & Tricks',
        link: '/case-studies',
      },
    ],
  },
  {
    id: createID(),
    footerHead: 'Company',
    footers: [
      {
        id: createID(),
        name: 'Soilsense Profile',
        link: '/about',
      },
      {
        id: createID(),
        name: 'Meet the Team',
        link: '#team',
      },
      {
        id: createID(),
        name: 'Testimonials',
        link: '#testimonials',
      },
      {
        id: createID(),
        name: "Work we've done",
        link: '/case-studies',
      },
    ],
  },

  {
    id: createID(),
    footerHead: 'About',
    footers: [
      {
        id: createID(),
        name: 'What we do?',
        link: '/services',
      },
      {
        id: createID(),
        name: 'Join our team',
        link: '/contact',
      },
      {
        id: createID(),
        name: 'Work with us',
        link: '/contact',
      },
    ],
  },
  {
    id: createID(),
    footerHead: 'Case studies',
    footers: [
      {
        id: createID(),
        name: 'Studies',
        link: '/case-studies',
      },
      {
        id: createID(),
        name: 'Research',
        link: '/case-studies',
      },
    ],
  },
  {
    id: createID(),
    footerHead: 'Contact',
    footers: [
      {
        id: createID(),
        name: 'A-47/6, opp. Jain Support Mandir, Udhyog Nagar, Punjab, India - 123456',
        link: 'https://maps.google.com/maps/dir//30.8994649,76.7284529/@30.8994649,76.7284529,14z',
      },
      {
        id: createID(),
        name: '+91-9977553300',
        link: 'tel:+919977553300',
      },
    ],
  },
]
