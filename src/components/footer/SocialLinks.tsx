import { socialLinksData } from '@/contents/socialLinks'

export const SocialLinks = () => {
  return (
    <ul className="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end">
      {socialLinksData.map((data, index) => (
        <li key={'Social Link' + data.id + index}>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-200 transition drop-shadow hover:opacity-75"
          >
            <span className="sr-only">{data.name}</span>

            <data.Icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}
