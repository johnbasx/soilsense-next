import whyImage1 from '/public/assets/images/why-01.png'
import whyImage2 from '/public/assets/images/why-02.png'
import whyImage3 from '/public/assets/images/why-03.png'
import whyImage4 from '/public/assets/images/why-04.png'
import whyImage5 from '/public/assets/images/why-05.png'
import whyImage6 from '/public/assets/images/why-06.png'
import whyImage7 from '/public/assets/images/why-07.png'
import { createID } from '@/utils/helpers'

export const currentServicesData = [
  { id: createID(), name: 'Soil Nutrient Balance (NPK)', image: whyImage1 },
  { id: createID(), name: 'Soil health (EC and pH)', image: whyImage2 },
  { id: createID(), name: 'Efficient Irrigation (Moisture)', image: whyImage3 },
]
export const futureServicesData = [
  { id: createID(), name: 'Satellite Mapping', image: whyImage4 },
  { id: createID(), name: 'Remote farming', image: whyImage5 },
  { id: createID(), name: 'Pest/Disease forecast', image: whyImage6 },
  {
    id: createID(),
    name: 'Introduction of Robots and Drones',
    image: whyImage7,
  },
]
