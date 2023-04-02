import Link from 'next/link'
import kebabCase from '@/utils/kebabCase'

const Tag = ({ text }: { text: string }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <span className="px-2 py-1 mr-2 text-xs font-medium duration-150 rounded-full bg-primary-400 text-primary-50 hover:bg-primary-500">
        {text.split(' ').join('-')}
      </span>
    </Link>
  )
}

export default Tag
