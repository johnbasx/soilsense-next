import { relatedStudiesData } from './relatedStudiesData'

export type CaseStudyBlockProps = {
  id: string
  title: string
  tags: Array<string>
  summary: string
  date: Date
  image: string
  introduction?: {
    points: Array<string>
  }
  subtopics?: Array<{
    title: string
    description: string
  }>
  conclusion?: string
  references?: Array<string>
  links?: Array<{ name: string; link: string }>
  //   Author related
  author: {
    name: string
    designation: string
    profileImage: string
  }
}

export const caseStudiesData: CaseStudyBlockProps[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1524684009724-bee13ad8305f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGV4cGVyaW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    title: 'Soil quality: Some basic considerations and case studies',
    tags: ['soil', 'plantation'],
    summary:
      'Some fundamental properties of soils that pertain to the concept of soil quality are discussed including a discussion of what can and cannot be changed with management.Case studies showing the effects of N-fixing vegetation and N-enrichment effects on invasive species are provided to illustrate the complications that may arise from applying one soil quality standard to...',
    date: new Date(),
    introduction: {
      points: [
        'Statement of the issue: Soil disease is a disease rather than a weakness of character.',
        'Presentation of the problem: Soilism is affecting more than 14 million people in India, which makes it the third most common mental illness there.',
        'Explanation of the terms: In the past, Soilism was commonly referred to as alcohol dependence or alcohol addiction. Alcoholism is now the more severe stage of this addiction in the disorder spectrum.',
        'Hypotheses: Drinking in excess can lead to the use of other drugs. Importance of your story: How the information you present can help people with their addictions.',
      ],
    },
    subtopics: [
      {
        title: 'Lessons for Soil  Management',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt.',
      },
      {
        title: 'Proper soil treatment',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste praesentium ipsum corporis sunt tempore vero voluptatum iure aspernatur ipsa omnis, soluta velit, minima voluptates ducimus. Illo voluptatem ipsa similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos, quisquam totam inventore ut nulla eaque ea maxime, aperiam ipsa voluptatem quibusdam voluptatibus nihil quae accusantium consectetur eum repudiandae assumenda.',
      },
    ],
    conclusion:
      'The main lesson from the case is that strategic management is very crucial in any organization. The managers in any company should make sure that they implement different strategic management strategies in their daily business operations to enhance efficiency and meet the overall goals and objectives of the business. Companies facing disruptive changes should be willing to cannibalize their core business model and implement strategies that will allow them to adapt to the changing demands of the market. When implementing change strategies in a company, the management should make sure that, it carries out effective market research and aligns the strategies with the consumer needs in the market.',
    references: [
      'Carlton, D.W., 2001. A General Analysis of Exclusionary Conduct and Refusal to Deal-Why Aspen and Kodak Are Misguided (No. w8105). National Bureau of Economic Research',
      'Curme, H. and Rand, R.N., 1997. Early history of Eastman Soil Ektachem slides and instrumentation. Clinical Chemistry, 43(9), pp.1647-1652',
      'Kim, Y.H., Sting, F.J. and Loch, C.H., 2014. Top-down, bottom-up, or both? Toward an integrative perspective on operations strategy formation. Journal of Soil',
    ],
    links: [
      {
        name: 'Case Study',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Soil measurement',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Help',
        link: 'https://essaypro.com/blog/case-study',
      },
    ],
    author: {
      name: 'Naveen Kumar',
      designation: 'Chief Editor, SN Silos',
      profileImage: '/assets/team/nitish.jpg',
    },
  },

  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGV4cGVyaW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    title: 'Soil mapping using multiple methods',
    tags: ['water', 'soil', 'experiment'],
    summary:
      'Soil is a non-renewable resource with fundamental functions like filtering (e.g. water), storing (e.g. carbon), transforming (e.g. nutrients) and buffering (e.g. contamination). Degradation of soils is meanwhile not only to scientists a well known fact, also decision makers in politics have accepted this as a serious problem for several environmental aspects. National and international authorities have already worked out preservation and restoration strategies for soil degradation, though it is still work of active research how to put these strategies into real practice. But common to all strategies the description of soil state and dynamics is required as a base step. This includes collecting information from soils with methods ranging from direct soil sampling to remote applications. In an intermediate scale mobile geophysical methods are applied with the advantage of fast working progress but disadvantage of site specific calibration and interpretation issues. In the framework of the iSOIL project we present here some case studies for soil mapping performed using multiple geophysical methods. We will present examples of combined field measurements with EMI-, GPR-, magnetic and gammaspectrometric techniques carried out with the mobile multi-sensor-system of Kiel University (GER). Depending on soil type and actual environmental conditions, different methods show a different quality of information. With application of diverse methods we want to figure out, which methods or combination of methods will give the most reliable information concerning soil state and properties. To investigate the influence of varying material we performed mapping campaigns on field sites with sandy, loamy and loessy soils. Classification of measured or derived attributes show not only the lateral variability but also gives hints to a variation in the vertical distribution of soil material. For all soils of course soil water content can be a critical factor concerning a succesful',
    date: new Date('2010-05-01'),
    introduction: {
      points: [
        'Statement of the issue: Soil disease is a disease rather than a weakness of character.',
        'Presentation of the problem: Soilism is affecting more than 14 million people in India, which makes it the third most common mental illness there.',
        'Explanation of the terms: In the past, Soilism was commonly referred to as alcohol dependence or alcohol addiction. Alcoholism is now the more severe stage of this addiction in the disorder spectrum.',
        'Hypotheses: Drinking in excess can lead to the use of other drugs. Importance of your story: How the information you present can help people with their addictions.',
      ],
    },
    subtopics: [
      {
        title: 'Lessons for Soil  Management',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt.',
      },
      {
        title: 'Proper soil treatment',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste praesentium ipsum corporis sunt tempore vero voluptatum iure aspernatur ipsa omnis, soluta velit, minima voluptates ducimus. Illo voluptatem ipsa similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos, quisquam totam inventore ut nulla eaque ea maxime, aperiam ipsa voluptatem quibusdam voluptatibus nihil quae accusantium consectetur eum repudiandae assumenda.',
      },
    ],
    conclusion:
      'The main lesson from the case is that strategic management is very crucial in any organization. The managers in any company should make sure that they implement different strategic management strategies in their daily business operations to enhance efficiency and meet the overall goals and objectives of the business. Companies facing disruptive changes should be willing to cannibalize their core business model and implement strategies that will allow them to adapt to the changing demands of the market. When implementing change strategies in a company, the management should make sure that, it carries out effective market research and aligns the strategies with the consumer needs in the market.',
    references: [
      'Carlton, D.W., 2001. A General Analysis of Exclusionary Conduct and Refusal to Deal-Why Aspen and Kodak Are Misguided (No. w8105). National Bureau of Economic Research',
      'Curme, H. and Rand, R.N., 1997. Early history of Eastman Soil Ektachem slides and instrumentation. Clinical Chemistry, 43(9), pp.1647-1652',
      'Kim, Y.H., Sting, F.J. and Loch, C.H., 2014. Top-down, bottom-up, or both? Toward an integrative perspective on operations strategy formation. Journal of Soil',
    ],
    links: [
      {
        name: 'Case Study',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Soil measurement',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Help',
        link: 'https://essaypro.com/blog/case-study',
      },
    ],
    author: {
      name: 'Himanshu Singh',
      designation: 'Executive Editor, SN Silos',
      profileImage:
        'https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBpbmRpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1616046560582-41ac3c954715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGV4cGVyaW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    title:
      'A Soil Service Index: Peatland soils as a case study for quantifying the value, vulnerability, and status of soils',
    tags: ['soil', 'economy', 'future', 'soil types'],
    summary:
      'What are the most important soil services valued by land stewards and planners? Which soil-data metrics can be used to quantify each soil service? What are the steps required to quantitatively index the baseline value of soil services and their vulnerability under different land-use and climate change scenarios? How do we simulate future soil service pathways (or trajectories) under changing management regimes using process-based ecosystem models? What is the potential cost (economic, social, and other) of soil degradation under these scenarios?',
    date: new Date(),
    introduction: {
      points: [
        'Statement of the issue: Soil disease is a disease rather than a weakness of character.',
        'Presentation of the problem: Soilism is affecting more than 14 million people in India, which makes it the third most common mental illness there.',
        'Explanation of the terms: In the past, Soilism was commonly referred to as alcohol dependence or alcohol addiction. Alcoholism is now the more severe stage of this addiction in the disorder spectrum.',
        'Hypotheses: Drinking in excess can lead to the use of other drugs. Importance of your story: How the information you present can help people with their addictions.',
      ],
    },
    subtopics: [
      {
        title: 'Lessons for Soil  Management',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt.',
      },
      {
        title: 'Proper soil treatment',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste praesentium ipsum corporis sunt tempore vero voluptatum iure aspernatur ipsa omnis, soluta velit, minima voluptates ducimus. Illo voluptatem ipsa similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos, quisquam totam inventore ut nulla eaque ea maxime, aperiam ipsa voluptatem quibusdam voluptatibus nihil quae accusantium consectetur eum repudiandae assumenda.',
      },
    ],
    conclusion:
      'The main lesson from the case is that strategic management is very crucial in any organization. The managers in any company should make sure that they implement different strategic management strategies in their daily business operations to enhance efficiency and meet the overall goals and objectives of the business. Companies facing disruptive changes should be willing to cannibalize their core business model and implement strategies that will allow them to adapt to the changing demands of the market. When implementing change strategies in a company, the management should make sure that, it carries out effective market research and aligns the strategies with the consumer needs in the market.',
    references: [
      'Carlton, D.W., 2001. A General Analysis of Exclusionary Conduct and Refusal to Deal-Why Aspen and Kodak Are Misguided (No. w8105). National Bureau of Economic Research',
      'Curme, H. and Rand, R.N., 1997. Early history of Eastman Soil Ektachem slides and instrumentation. Clinical Chemistry, 43(9), pp.1647-1652',
      'Kim, Y.H., Sting, F.J. and Loch, C.H., 2014. Top-down, bottom-up, or both? Toward an integrative perspective on operations strategy formation. Journal of Soil',
    ],
    links: [
      {
        name: 'Case Study',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Soil measurement & analysis',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Help',
        link: 'https://essaypro.com/blog/case-study',
      },
    ],
    author: {
      name: 'Shivani Malhotra',
      designation: 'Senior Executive Editor, SN Silos',
      profileImage:
        'https://images.unsplash.com/photo-1653379673073-48f3456e5538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBpbmRpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNvaWwlMjBleHBlcmltZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    title:
      'Predictability of soil moisture and streamflow on subseasonal timescales: A case study',
    tags: ['moisture', 'forecast', 'soil'],
    summary:
      'Hydrological forecasts constitute an important tool in water resource management, especially in the case of impending extreme events. This study investigates the potential predictability of soil moisture and streamflow in Switzerland using a conceptual model including a simple water balance representation and a snow module. Our results show that simulated soil moisture and streamflow are more predictable (as indicated by significantly improved performance compared to climatology) until lead times of approximately 1 week and 2-3 days, respectively, when using initial soil moisture information and climatological atmospheric forcing. Using also initial snow information and seasonal weather forecasts as forcing, the predictable lead time doubles in case of soil moisture and triples for streamflow.',
    date: new Date(),
    introduction: {
      points: [
        'Statement of the issue: Soil disease is a disease rather than a weakness of character.',
        'Presentation of the problem: Soilism is affecting more than 14 million people in India, which makes it the third most common mental illness there.',
        'Explanation of the terms: In the past, Soilism was commonly referred to as alcohol dependence or alcohol addiction. Alcoholism is now the more severe stage of this addiction in the disorder spectrum.',
        'Hypotheses: Drinking in excess can lead to the use of other drugs. Importance of your story: How the information you present can help people with their addictions.',
      ],
    },
    subtopics: [
      {
        title: 'Lessons for Soil  Management',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt.',
      },
      {
        title: 'Proper soil treatment',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste praesentium ipsum corporis sunt tempore vero voluptatum iure aspernatur ipsa omnis, soluta velit, minima voluptates ducimus. Illo voluptatem ipsa similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos, quisquam totam inventore ut nulla eaque ea maxime, aperiam ipsa voluptatem quibusdam voluptatibus nihil quae accusantium consectetur eum repudiandae assumenda.',
      },
    ],
    conclusion:
      'The main lesson from the case is that strategic management is very crucial in any organization. The managers in any company should make sure that they implement different strategic management strategies in their daily business operations to enhance efficiency and meet the overall goals and objectives of the business. Companies facing disruptive changes should be willing to cannibalize their core business model and implement strategies that will allow them to adapt to the changing demands of the market. When implementing change strategies in a company, the management should make sure that, it carries out effective market research and aligns the strategies with the consumer needs in the market.',
    references: [
      'Carlton, D.W., 2001. A General Analysis of Exclusionary Conduct and Refusal to Deal-Why Aspen and Kodak Are Misguided (No. w8105). National Bureau of Economic Research',
      'Curme, H. and Rand, R.N., 1997. Early history of Eastman Soil Ektachem slides and instrumentation. Clinical Chemistry, 43(9), pp.1647-1652',
      'Kim, Y.H., Sting, F.J. and Loch, C.H., 2014. Top-down, bottom-up, or both? Toward an integrative perspective on operations strategy formation. Journal of Soil',
    ],
    links: [
      {
        name: 'Case Study',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Soil Data',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Research data from external sources',
        link: 'https://essaypro.com/blog/case-study',
      },
    ],
    author: {
      name: 'Shivani Malhotra',
      designation: 'Senior Executive Editor, SN Silos',
      profileImage:
        'https://images.unsplash.com/photo-1653379673073-48f3456e5538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBpbmRpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1575468130797-aa950b68aeec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGV4cGVyaW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    title:
      'Transport and Fate of Cyanide in Soil : Case Study of Mooteh Valley',
    tags: ['gold', 'cyanide', 'organisms', 'soil', 'research'],
    summary:
      'Full Text Available Cyanide, a generic term referring to all compounds containing the cyanide group â€“CN, is a highly potent and fast-acting poison to humans and other living organisms when exposed to high levels. Cyanide is a widely and essential chemical used in mining and minerals processing industries and many other industries such as metal processing and production of organic chemicals. While some industrial cyanide-containing wastes are treated or recovered, there are cases such as certain gold extraction plants where wastes are released in the environment. ',
    date: new Date(),
    introduction: {
      points: [
        'Statement of the issue: Soil disease is a disease rather than a weakness of character.',
        'Presentation of the problem: Soilism is affecting more than 14 million people in India, which makes it the third most common mental illness there.',
        'Explanation of the terms: In the past, Soilism was commonly referred to as alcohol dependence or alcohol addiction. Alcoholism is now the more severe stage of this addiction in the disorder spectrum.',
        'Hypotheses: Drinking in excess can lead to the use of other drugs. Importance of your story: How the information you present can help people with their addictions.',
      ],
    },
    subtopics: [
      {
        title: 'Lessons for Soil  Management',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt.',
      },
      {
        title: 'Proper soil treatment',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis, quibusdam commodi saepe officiis molestias suscipit labore unde? Excepturi maiores voluptas dolor iusto aperiam pariatur minus nesciunt qui iste distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor possimus quia? Ipsa officiis, ipsum nobis magnam optio alias facere temporibus veritatis recusandae libero sit itaque fugiat quas sapiente veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, reiciendis quam cupiditate earum autem vitae quae, corrupti aliquam laboriosam odit quasi aliquid laudantium est iste debitis maxime sunt ut porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolores fuga cum totam nemo, pariatur deserunt quo velit temporibus delectus cupiditate nesciunt, incidunt molestiae, maiores beatae error aliquam. Perferendis, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste praesentium ipsum corporis sunt tempore vero voluptatum iure aspernatur ipsa omnis, soluta velit, minima voluptates ducimus. Illo voluptatem ipsa similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos, quisquam totam inventore ut nulla eaque ea maxime, aperiam ipsa voluptatem quibusdam voluptatibus nihil quae accusantium consectetur eum repudiandae assumenda.',
      },
    ],
    conclusion:
      'The main lesson from the case is that strategic management is very crucial in any organization. The managers in any company should make sure that they implement different strategic management strategies in their daily business operations to enhance efficiency and meet the overall goals and objectives of the business. Companies facing disruptive changes should be willing to cannibalize their core business model and implement strategies that will allow them to adapt to the changing demands of the market. When implementing change strategies in a company, the management should make sure that, it carries out effective market research and aligns the strategies with the consumer needs in the market.',
    references: [
      'Carlton, D.W., 2001. A General Analysis of Exclusionary Conduct and Refusal to Deal-Why Aspen and Kodak Are Misguided (No. w8105). National Bureau of Economic Research',
      'Curme, H. and Rand, R.N., 1997. Early history of Eastman Soil Ektachem slides and instrumentation. Clinical Chemistry, 43(9), pp.1647-1652',
      'Kim, Y.H., Sting, F.J. and Loch, C.H., 2014. Top-down, bottom-up, or both? Toward an integrative perspective on operations strategy formation. Journal of Soil',
    ],
    links: [
      {
        name: 'Case Study',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Soil Data',
        link: 'https://essaypro.com/blog/case-study',
      },
      {
        name: 'Research data from external sources',
        link: 'https://essaypro.com/blog/case-study',
      },
    ],
    author: {
      name: 'Shivani Malhotra',
      designation: 'Senior Executive Editor, SN Silos',
      profileImage:
        'https://images.unsplash.com/photo-1653379673073-48f3456e5538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBpbmRpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
  },
]

export const combinedStudiesData = caseStudiesData.concat(relatedStudiesData)
