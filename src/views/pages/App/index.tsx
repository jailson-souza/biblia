import * as Style from './style'
import { useState, useCallback, useEffect } from 'react'
import Books from './components/Books'
import Header from './components/Header'
import NavOfChoose, { NavChooseEnum } from './components/NavOfChoose'
import { Book } from '@biblia/domain/book/Book'
import Chapters from './components/Chapters'
import Verses from './components/Verses'
import { useVerse } from '@biblia/views/common/hooks/useVerse'
import Reader from './components/Reader'
import { useBook } from '@biblia/views/common/hooks/useBook'
import { useDb } from '@biblia/views/common/hooks/useDb'
import { Verse } from '@biblia/domain/verse/Verse'

export default function App() {
   const { db } = useDb()
   const { getBooks, books, isLoadinBooks } = useBook()
   const { isLoadinVerses, verses, getVerses } = useVerse()

   const [nav, setNav] = useState<NavChooseEnum>(NavChooseEnum.book)
   const [book, setBook] = useState<Book>({} as Book)
   const [chapter, setChapter] = useState<number>(1)
   const [verse, setVerse] = useState<number>(1)
   const [showReader, setShowReader] = useState(false)

   const HandleCompareNav = useCallback((chooseNav: NavChooseEnum) => chooseNav === nav, [nav])

   const handleClickNav = useCallback((choosed: NavChooseEnum) => {
      setNav(choosed)
   }, [])

   const handleChooseBook = useCallback((bookChoosed: Book) => {
      setBook(bookChoosed)
      setNav(NavChooseEnum.chapter)
   }, [])

   const handleChooseChapter = useCallback((chapterChoosed: number) => {
      setChapter(chapterChoosed)
      setNav(NavChooseEnum.verse)
   }, [])

   const handleChooseVerse = useCallback((verseChoosed: number) => {
      setVerse(verseChoosed)
      setShowReader(true)
   }, [])

   const handleOnPreview = useCallback(() => {
      setShowReader(false)
   }, [])

   const handleOnPreviewChapter = useCallback(
      (preview: number) => {
         if (preview < 1) {
            const bookIndex = books.findIndex(b => b.id === book.id)
            setBook(books[bookIndex - 1])
            setChapter(books[bookIndex - 1].chapters)
         } else {
            setChapter(preview)
         }
         setVerse(1)
      },
      [books, book]
   )

   const handleOnNextChapter = useCallback(
      (next: number) => {
         if (next > book.chapters) {
            const bookIndex = books.findIndex(b => b.id === book.id)
            setBook(books[bookIndex + 1])
            setChapter(1)
         } else {
            setChapter(next)
         }
         setVerse(1)
      },
      [books, book]
   )

   const handleSaveSelecteds = useCallback(
      async (selecteds: Verse[]) => {
         await db.save({ name: '', date: new Date(), verses: selecteds })
      },
      [db]
   )

   useEffect(() => {
      getBooks()
   }, [getBooks])

   useEffect(() => {
      if (book.name && chapter) {
         getVerses({ bookId: book.id, chapter, version: 'acf' })
      }
   }, [book, chapter, getVerses])

   return (
      <>
         <Header
            previewVisible={showReader}
            onPreview={handleOnPreview}
            breadCrumbList={book.name ? [book.name, String(chapter), String(verse)] : []}
         />
         <NavOfChoose onClickNav={handleClickNav} selected={nav} hide={showReader} />
         <Style.Container>
            {!showReader ? (
               <>
                  {HandleCompareNav(NavChooseEnum.book) && (
                     <Books books={books} choosed={book} onChooseBook={handleChooseBook} isLoading={isLoadinBooks} />
                  )}
                  {HandleCompareNav(NavChooseEnum.chapter) && (
                     <Chapters
                        numbers={book?.chapters}
                        choosed={chapter}
                        onChoosedChapter={handleChooseChapter}
                        isLoading={isLoadinBooks}
                     />
                  )}
                  {HandleCompareNav(NavChooseEnum.verse) && (
                     <Verses
                        numbers={verses?.length}
                        choosed={verse}
                        onChoosedVerse={handleChooseVerse}
                        isLoading={isLoadinVerses}
                     />
                  )}
               </>
            ) : (
               <Reader
                  isLoading={isLoadinVerses}
                  verses={verses}
                  choosed={verse}
                  onPreview={handleOnPreviewChapter}
                  onNext={handleOnNextChapter}
                  onClickSaveSelecteds={handleSaveSelecteds}
               />
            )}
         </Style.Container>
      </>
   )
}
