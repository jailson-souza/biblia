import LoadIcon from '@biblia/views/common/components/Icon/LoadIcon'
import * as Style from './style'
import { useMemo } from 'react'

interface IVerses {
   numbers: number
   choosed: number
   isLoading?: boolean
   onChoosedVerse?: (choosed: number) => void
}

export default function Verses({ numbers, choosed, isLoading, onChoosedVerse }: IVerses) {
   const verses = useMemo(() => {
      return Array.from({ length: numbers }, (_, index) => {
         const verse = index + 1
         return (
            <Style.Item
               key={`chpater-${String(verse)}`}
               onClick={() => onChoosedVerse?.(verse)}
               className={`${choosed === verse && 'verse-choosed'}`}
            >
               {String(verse)}
            </Style.Item>
         )
      })
   }, [numbers, choosed, onChoosedVerse])

   return isLoading ? (
      <Style.Spinner>
         <LoadIcon />
      </Style.Spinner>
   ) : (
      <Style.Grid>{verses}</Style.Grid>
   )
}
