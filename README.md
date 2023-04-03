![SoilSense logo](public/assets/logos/soilsense-logo.png?raw=true 'SoilSense')

# SoilSense Website

## SN Silos Private Limited

Corporate Identification Number : (CIN) U51100DL2018PTC339003

Registration Number : 339003.

Email address : nitish.narula14@gmail.com

Registered address : 2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI North Delhi DL 110006 IN.

This website is built using [Next.js](https://nextjs.org/) for the majority of the code in [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) for styling & [i18next](https://www.npmjs.com/package/next-i18next) for Language Translations modules.

## Getting Started

To run the project in development server:

```bash
# Install dependencies
yarn install
# Enable husky
yarn husky install

# Start dev server
yarn dev

# Build for production
yarn build
```

## Features

- ESLint and Prettier are integrated with VSCode to fix and format code on save (you need eslint and prettier VSCode plugins)
- lint-staged: linting will only happen on staged files, not all file
- Latest Husky
- TypeScript types are checked before each commit

## Steps

Now, open [http://localhost:3000](http://localhost:3000) with your preferred browser to see the results.

You can start editing the home page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. Although you need to re-start the development server everytime you change the translation files located in `public/locales/*`

All the sections in every page are devided into individual components that lie in their respective directories that share the same folder name as the page name.

If you want to integrate some backend code to the site you can use the [API routes](https://nextjs.org/docs/api-routes/introduction) which can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/filename). This endpoint can be edited in `pages/api/filename.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Guidelines

### Language

To add new language files go to `public/locales/en` to add new English translations then go to `public/locales/hn` to add the respective Hindi translations. After that go to `src/types/i18next.d.ts` to add the file directory and add its types for proper type inference and error detection while adding new language files.

If you want to add new a new `language` go to `next-i18next.config.js` and add the new language configurations and then add a folder in the `public/locales/` directory for the particular language and then repeat the above steps.

To add the new translated files, go the specific page and then add the file name during server side fetch and then you can use in the different nested components by using `useTranslation()` hook from `next-i18next`

#### Forexample:

```typescript
// extrapage.tsx

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

...
// other code here...

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["home", "common"])),
  },
});
```

... and for dynamic webpages (like Case study custom dynamic page), add these following code for static paths generation -

```typescript
export const getStaticPaths: GetStaticPaths = async () => {
  const arr = combinedStudiesData
  const paths = arr.map((item) => {
    return {
      params: { id: item.id },
    }
  })
  return { paths, fallback: true }
}
```

```typescript
// component.tsx
import { useTranslation } from "next-i18next";

...
const Component= () => {
    const { t } = useTranslation("filename")
    return (
        <div>{t('objectname.key')}</div>
    )
}
// or
somevalue={t('objectname.key')}
```

For editing the translations files go to `public/locales/`, then `en` or `hn` where it will look somewhat like this -

```json
{
  "title": "SoilSense | Plantation with Technology",
  "company": "SoilSense Pvt Ltd",
  "about": "Let's dive into the future of Agriculture & Plantation with the power of advanced technologies.",

  "navigation-links": [
    {
      "label": "Services",
      "link": "/services"
    },
    {
      "label": "About",
      "link": "/about"
    },
    {
      "label": "Case Studies",
      "link": "/case-studies"
    },
    {
      "label": "Contact",
      "link": "/contact"
    }
  ],

  "change": "Change language",
  "download": "Download the app",
  "login": "Login",
  "new": "Don't have an account",
  "register": "Register",
  "demo": "Request a demo",

  "footer": [
    {
      "footerHead": "Services",
      "links": [
        "Company Review",
        "Innovate with us",
        "Consulting",
        "Tips & Tricks"
      ]
    },
    {
      "footerHead": "Company",
      "links": [
        "SoilSense Profile",
        "Meet the team",
        "Testimonials",
        "Work we've done"
      ]
    },
    {
      "footerHead": "About",
      "links": ["What we do?", "Join our team", "Work with us"]
    },
    {
      "footerHead": "Case studies",
      "links": ["Studies", "Research"]
    },
    {
      "footerHead": "Contact",
      "links": [
        "A-47/6, opp. Jain Support Mandir, Udhyog Nagar, Punjab, India - 123456",
        "+91-9977553300"
      ]
    }
  ],

  "terms": "Terms & Conditions",
  "privacy": "Privacy Policy"
}
```

and the `Hindi` conversion will look like this -

```json
{
  "title": "सॉइलसेंस | प्रौद्योगिकी के साथ वृक्षारोपण",
  "company": "सॉइलसेंस प्राइवेट लिमिटेड",
  "about": "आइए उन्नत तकनीकों की शक्ति के साथ कृषि और वृक्षारोपण के भविष्य में गोता लगाएँ।",

  "navigation-links": [
    {
      "label": "हमारी सेवाएँ",
      "link": "/services"
    },
    {
      "label": "हमारे बारे में",
      "link": "/about"
    },
    {
      "label": "मामले का अध्ययन",
      "link": "/case-studies"
    },
    {
      "label": "संपर्क करें",
      "link": "/contact"
    }
  ],
  "change": "भाषा बदलें",
  "download": "ऐप डाउनलोड करें",
  "login": "लॉग इन करें",
  "new": "खाता नहीं है",
  "register": "अभी पंजीकरण करें",
  "demo": "एक डेमो का अनुरोध करें",

  "footer": [
    {
      "footerHead": "सेवाएं",
      "links": [
        "कंपनी की समीक्षा",
        "हमारे साथ नया करें",
        "परामर्श देनेवाला",
        "सुझाव और युक्ति"
      ]
    },
    {
      "footerHead": "कंपनी",
      "links": [
        "सॉइलसेंस प्रोफाइल",
        "टीम से मिलो",
        "प्रशंसापत्र",
        "काम हमने किया है"
      ]
    },
    {
      "footerHead": "हमारे बारे में",
      "links": [
        "हम क्या करते हैं?",
        "हमारी टीम में शामिल हों",
        "हमारे साथ काम करें"
      ]
    },
    {
      "footerHead": "मामले का अध्ययन",
      "links": ["अध्ययन", "अनुसंधान"]
    },
    {
      "footerHead": "संपर्क करें",
      "links": [
        "ए-47/6, अपोजिट. जैन समर्थन मंदिर, उद्योग नगर, पंजाब, भारत - 123456",
        "+91-9977553300"
      ]
    }
  ],
  "terms": "नियम एवं शर्तें",
  "privacy": "गोपनीयता नीति"
}
```

Feel free to edit the files upon your requirements but don't forget to add in their respective `Javascript/Typescript` files as well where you would find static contents and javascript array objects like this -

```typescript
// NavLinks.tsx

export const navigationLinks = [
  {
    id: createID(),
    label: 'Services',
    link: '/services',
  },
  {
    id: createID(),
    label: 'About',
    link: '/about',
  },
  {
    id: createID(),
    label: 'Case Studies',
    link: '/case-studies',
  },
  {
    id: createID(),
    label: 'Contact',
    link: '/contact',
  },
]
```

```typescript
// footerLinks.tsx

import { createID } from '@/utils/helpers'
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
```

### Build

To build the project for production apart from deployment to vercel of other edge functions, use the following command

```bash
yarn build
```

You can find the generated output in the `build` folder

If you want to build static files and deploy them as static only then use this page as your reference - [NextJs Deployment](https://nextjs.org/docs/deployment#static-only)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
