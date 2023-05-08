import { Book } from '@biblia/domain/book/Book'
import { BookService } from '@biblia/services/book/BookService'
import { useCallback, useMemo, useState } from 'react'

export function useBook() {
   const bookService = useMemo(() => new BookService(), [])

   const [books, setBooks] = useState<Book[]>([] as Book[])
   const [isLoadinBooks, setIsLoadingBooks] = useState<boolean>(false)

   const getBooks = useCallback(async () => {
      setIsLoadingBooks(true)
      const _books = await bookService.get()
      setBooks(_books)
      setIsLoadingBooks(false)
   }, [bookService])

   return {
      isLoadinBooks,
      books,
      getBooks
   }
}
