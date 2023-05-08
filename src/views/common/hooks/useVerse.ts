import { Verse } from '@biblia/domain/verse/Verse'
import { IInputVerse } from '@biblia/domain/verse/interfaces/IVerse'
import { VerseService } from '@biblia/services/verse/VerseService'
import { useCallback, useMemo, useState } from 'react'

export function useVerse() {
   const verseService = useMemo(() => new VerseService(), [])

   const [verses, setVerses] = useState<Verse[]>([] as Verse[])
   const [isLoadinVerses, setIsLoadingVerses] = useState<boolean>(false)

   const getVerses = useCallback(
      async ({ version, bookId, chapter }: IInputVerse) => {
         setIsLoadingVerses(true)
         const _verses = await verseService.get({ version, bookId, chapter })
         setVerses(_verses)
         setIsLoadingVerses(false)
      },
      [verseService]
   )

   return {
      isLoadinVerses,
      verses,
      getVerses
   }
}
