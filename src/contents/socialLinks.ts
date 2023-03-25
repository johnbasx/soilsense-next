import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { createID } from '../utils/helpers'

export const socialLinksData = [
  {
    id: createID(),
    link: '#!',
    name: 'Meta, Facebook',
    Icon: FaFacebook,
  },
  {
    id: createID(),
    link: '#!',
    name: 'Instagram',
    Icon: FaInstagram,
  },
  {
    id: createID(),
    link: '#!',
    name: 'Twitter',
    Icon: FaTwitter,
  },
  {
    id: createID(),
    link: '#!',
    name: 'Github',
    Icon: FaGithub,
  },
  {
    id: createID(),
    link: '#!',
    name: 'Whatsapp',
    Icon: FaWhatsapp,
  },
]
