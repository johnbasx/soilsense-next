import techlandLogo from '/public/assets/logos/TechLand-logo.png'
import soilsenseLogo from '/public/assets/logos/soilsense.png'
import organicchefLogo from '/public/assets/logos/organicchef-logo.png'
import { createID } from '@/utils/helpers'

export const ourAppsStepsData = [
  {
    id: createID(),
    name: 'SoilSense',
    image: soilsenseLogo,
    description:
      'Soil health management services, that provides IoT based kits to be installed in farms to collect soil parameters.',
    link: '#!',
  },
  {
    id: createID(),
    name: 'TechLand',
    image: techlandLogo,
    description: 'Invest in agriculture land to grow your wealth adn income.',
    link: '#!',
  },
  {
    id: createID(),
    name: 'OrganicChef',
    image: organicchefLogo,
    description:
      'A Platform that sells fresh and organic grocery like fruit,vegetables, spices, herbs and much more.',
    link: '#!',
  },
]
