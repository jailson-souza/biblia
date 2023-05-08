import { useMemo, useState } from 'react'
import { Verse } from '@biblia/domain/verse/Verse'
import * as Style from './style'
import NextStepIcon from '@biblia/views/common/components/Icon/NextStepIcon'
import PreviewStepIcon from '@biblia/views/common/components/Icon/PreviewStepIcony'
import SaveIcon from '@biblia/views/common/components/Icon/SaveIcon'
import LoadIcon from '@biblia/views/common/components/Icon/LoadIcon'

interface IReader {
   verses: Verse[]
   choosed?: number
   isLoading?: boolean
   onPreview?: (preview: number) => void
   onNext?: (next: number) => void
   onClickSaveSelecteds?: (verses: Verse[]) => void
}

export default function Reader({ verses, choosed = 1, isLoading, onPreview, onNext, onClickSaveSelecteds }: IReader) {
   const [linesSelecteds, setLinesSelecteds] = useState<Verse[]>([])

   const text = useMemo(() => {
      if (verses?.length > 0) {
         return verses.map(v => {
            const hash = `${v?.version}-${v?.bookId}-${v?.chapter}-${v?.verse}`
            return (
               <Style.Line
                  id={hash}
                  key={hash}
                  className={`${linesSelecteds.some(selected => selected.verse === v.verse) && 'line-selected'} ${
                     choosed === v.verse && 'choosed'
                  }`}
                  onClick={() => {
                     setLinesSelecteds(([...currentSelecteds]) => {
                        if (!currentSelecteds.some(selected => selected.verse === v.verse)) {
                           currentSelecteds.push(v)
                        } else {
                           currentSelecteds = currentSelecteds.filter(s => s.verse !== v.verse)
                        }
                        return currentSelecteds
                     })
                  }}
               >
                  <Style.Number>{String(v.verse)}</Style.Number>
                  <Style.Text>{v.text}</Style.Text>
               </Style.Line>
            )
         })
      }
   }, [verses, linesSelecteds, choosed])

   return (
      <>
         <Style.Grid>
            {isLoading ? (
               <Style.Spinner>
                  <LoadIcon />
               </Style.Spinner>
            ) : (
               text
            )}

            <Style.Toolbar>
               <Style.ButtonStep className="preview" onClick={() => onPreview?.(verses[0].chapter - 1)}>
                  <PreviewStepIcon />
                  Anterior
               </Style.ButtonStep>
               {linesSelecteds.length > 0 && (
                  <Style.ButtonSave onClick={() => onClickSaveSelecteds?.(linesSelecteds)}>
                     <SaveIcon />
                  </Style.ButtonSave>
               )}
               <Style.ButtonStep className="next" onClick={() => onNext?.(verses[0].chapter + 1)}>
                  Próximo
                  <NextStepIcon />
               </Style.ButtonStep>
            </Style.Toolbar>
         </Style.Grid>
      </>
   )
}
