import electricalImage from '/public/assets/images/soil-parameters/electrical.png'
import humidityImage from '/public/assets/images/soil-parameters/humidity.png'
import moistureImage from '/public/assets/images/soil-parameters/moisture.png'
import nitrogenImage from '/public/assets/images/soil-parameters/nitrogen.png'
import phorsphorusImage from '/public/assets/images/soil-parameters/phosphorus.png'
import potassiumImage from '/public/assets/images/soil-parameters/potassium.png'
import soilphImage from '/public/assets/images/soil-parameters/soilph.png'
import temperatureImage from '/public/assets/images/soil-parameters/temperature.png'
import { createID } from '@/utils/helpers'

export const controlParametersData = [
  {
    id: createID(),
    name: 'Electrical Conductivity',
    image: electricalImage,
    description:
      'Soil electrical conductivity, referred to as EC, is the ability of soil to conduct (transmit) or attenuate electrical current. EC is expressed in milliSiemens per meter (mS/m) or at times is reported in deciSiemens per meter (dS/m)',
  },
  {
    id: createID(),
    name: 'Soil pH Level',
    image: soilphImage,
    description:
      'Most soils have pH values between 3.5 and 10. In higher rainfall areas the natural pH of soils typically ranges from 5 to 7, while in drier areas the range is 6.5 to 9.',
  },
  {
    id: createID(),
    name: 'Nitrogen(N) Level',
    image: nitrogenImage,
    description:
      'In sand soils, the best balance is achieved by a “Moderate” soil nitrogen supply (25 - 50 mg-N/kg soil). In contrast, in loam and clay soils “High” soil nitrogen supply is most suitable (50 - 75 and 75 - 125 mg-N/kg soil respectively).',
  },
  {
    id: createID(),
    name: 'Phosphorus(P) Level',
    image: phorsphorusImage,
    description:
      'Healthy levels of Phosphorus in soil ranges from 25 to 50 ppm. The University of Nebraska-Lincoln gives the following guidelines to consider when analyzing your P levels in soil',
  },
  {
    id: createID(),
    name: 'Potassium(K) Content',
    image: potassiumImage,
    description:
      'Potassium is a major plant nutrient that is less directly impacted by soil pH, but still is to some extent (especially when soil pH drops below 5.5.) Healthy levels of potassium in soil range from 40 to 80 ppm.',
  },
  {
    id: createID(),
    name: 'Soil Moisture Levels',
    image: moistureImage,
    description:
      'Generally, soil moisture will range from 10% to 45%, but can be higher during and after watering. The water in your soil is stored on the surface of the soil particles, as well as in the pores, which are holes or gaps between individual soil particles.',
  },
  {
    id: createID(),
    name: 'Soil Temperature',
    image: temperatureImage,
    description:
      'The average soil temperatures for bioactivity range from 50 to 75°F (10-24°C). These values are favorable for the normal life functions of the ground biota that ensure proper organic matter decomposition, increased nitrogen mineralization, uptake of soluble substances, and metabolism.',
  },
  {
    id: createID(),
    name: 'Soil Humidity',
    image: humidityImage,
    description:
      'Ultimately, the soil moisture effect on plants and the yield is vital. The optimal range of soil moisture content for crops depends on the specific plant species, but the range for most crops is between 20% and 60%.',
  },
]
