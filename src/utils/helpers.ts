import { combinedStudiesData } from '@/components/case-study/caseStudiesData'
import { nanoid } from 'nanoid'

export const createID = () => {
  const id = nanoid(18)
  return id
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export function findCaseStudyById(id: string) {
  const result = combinedStudiesData.filter((item) => {
    return item.id === id
  })[0]
  return result
}
