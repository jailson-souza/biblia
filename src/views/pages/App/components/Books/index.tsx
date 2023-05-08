import { useCallback, useMemo } from 'react'
import * as Style from './style'
import { Book } from '@biblia/domain/book/Book'
import LoadIcon from '@biblia/views/common/components/Icon/LoadIcon'

interface IBooks {
   onChooseBook?: (book: Book) => void
   choosed?: Book
   isLoading?: boolean
   books: Book[]
}

export default function Books({ onChooseBook, choosed, books, isLoading }: IBooks) {
   const handleChooseBook = useCallback(
      (book: Book) => {
         onChooseBook?.(book)
      },
      [onChooseBook]
   )

   const bookItems = useMemo(() => {
      if (books?.length > 0) {
         return books.map(b => (
            <Style.Item
               className={`${choosed?.id === b.id && 'book-choosed'}`}
               key={b.id}
               onClick={() => handleChooseBook(b)}
            >
               {b.name}
            </Style.Item>
         ))
      }
   }, [books, handleChooseBook, choosed])

   return isLoading ? (
      <Style.Spinner>
         <LoadIcon />
      </Style.Spinner>
   ) : (
      <Style.Grid>{bookItems}</Style.Grid>
   )
}
