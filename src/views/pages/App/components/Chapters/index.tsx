import LoadIcon from '@biblia/views/common/components/Icon/LoadIcon'
import * as Style from './style'
import { useMemo } from 'react'

interface IChapters {
   numbers: number
   choosed: number
   isLoading?: boolean
   onChoosedChapter?: (choosed: number) => void
}

export default function Chapters({ numbers, choosed, isLoading, onChoosedChapter }: IChapters) {
   const chapters = useMemo(() => {
      return Array.from({ length: numbers }, (_, index) => {
         const chapter = index + 1
         return (
            <Style.Item
               key={`chpater-${String(chapter)}`}
               onClick={() => onChoosedChapter?.(chapter)}
               className={`${choosed === chapter && 'chapter-choosed '}`}
            >
               {String(chapter)}
            </Style.Item>
         )
      })
   }, [numbers, choosed, onChoosedChapter])

   return isLoading ? (
      <Style.Spinner>
         <LoadIcon />
      </Style.Spinner>
   ) : (
      <Style.Grid>{chapters}</Style.Grid>
   )
}
