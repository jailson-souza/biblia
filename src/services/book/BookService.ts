import { Book } from '@biblia/domain/book/Book'
import { IBook } from '@biblia/domain/book/interfaces/IBook'
import { BaseService } from '../BaseService'

interface IBookCacheById {
   [id: string]: Book
}

export class BookService extends BaseService implements IBook {
   private static bookCache: Book[] = []
   private static bookCacheById: IBookCacheById = {}

   async get(): Promise<Book[]> {
      if (BookService.bookCache.length < 1) {
         const response = await this.api.get('/books')
         BookService.bookCache = response.data.map((book: any) => this.mapBook(book))
      }
      return BookService.bookCache
   }

   async getById(id: string): Promise<Book> {
      if (!BookService.bookCacheById[id]) {
         const response = await this.api.get(`/books/${id}`)
         BookService.bookCacheById[id] = this.mapBook(response.data)
      }
      return BookService.bookCacheById[id]
   }

   private mapBook(book: any): Book {
      return {
         id: book.abbrev.pt,
         author: book.author,
         chapters: book.chapters,
         group: book.group,
         name: book.name,
         testament: book.testament
      }
   }
}
