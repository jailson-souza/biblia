import { Book } from '../Book'

export interface IBook {
   get(): Promise<Book[]>
   getById(id: string): Promise<Book>
}
