import { createID, shuffle } from '@/utils/helpers'

export type ReviewsDataProps = {
  id: string
  title: string
  body: string
  author: string
  rating: number
  date: string
  image: string
}

export const reviews = [
  {
    id: createID(),
    title: 'It really works!',
    body: 'I downloaded SoilSense and started using today and made huge improvements in my fields',
    author: 'Ramu Kaka',
    rating: 4,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1586278626494-0f8e32836916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjZ8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: 'You need this service.',
    body: 'I didn’t understand the market at all before SoilSense. I still don’t, but at least I’m making progress.',
    author: 'Humdardi Mohanlal',
    rating: 3,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1586354724152-12c2845a8b72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njd8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: 'Thank you 👍🏻 Soilsense',
    body: 'Soil sense makes it so easy to manage my workflows in agriculture coming from an engineering background I had trouble with looking out my farms and the market simultaneously which soil sense helped me a lot.',
    author: 'Pradeep Singh',
    rating: 5,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1596747705898-a152d5d3fb2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzd8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: '🔥🔥 Wow!',
    body: 'Thank you soilsense and their amazing technology.',
    author: 'Varnie Kapoor',
    rating: 4,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1596738317850-3023fb966dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: 'I love it!',
    body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them.',
    author: 'Dr. Shakti Raj',
    rating: 4,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1585923491671-0ced430efe9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzF8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },

  {
    id: createID(),
    title: '😻Too good to be true.😃🥺😃🔥',
    body: 'Soilsense helped a lot in the growth of my business. Thank you soooooo much!! 🖤🖤🖤🖤',
    author: 'Taniya Sharma',
    rating: 2,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1591757037079-15320c184ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODB8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: 'It’s like a superpower🤘🏻',
    body: "Love how we can manage everything from the app and their amazing service. Hat's off team Soil sense",
    author: 'Vikram Bhatt',
    rating: 4,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1586784317077-21b404269df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NzZ8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: createID(),
    title: '👍🏻 Amazing Soilsense',
    body: 'Soil sense makes it so easy to manage my workflows in agriculture coming from an engineering background I had trouble with looking out my farms and the market simultaneously which soil sense helped me a lot.',
    author: 'Shivani Sinha',
    rating: 5,
    date: '6/02/2012',
    image:
      'https://images.unsplash.com/photo-1596395463910-3ac2899a5bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTV8MjAxMzUyMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
]

export const shuffledReviews = shuffle(reviews)
