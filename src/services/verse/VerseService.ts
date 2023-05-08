import { Verse } from '@biblia/domain/verse/Verse'
import { IInputVerse, IInputVerseByNumber, IVerse } from '@biblia/domain/verse/interfaces/IVerse'
import { BaseService } from '../BaseService'

interface IVerseCacheByHash {
   [id: string]: Verse | Verse[]
}

export class VerseService extends BaseService implements IVerse {
   private static verseCacheByHash: IVerseCacheByHash = {}

   async get({ version, bookId, chapter }: IInputVerse): Promise<Verse[]> {
      const hash = `${version}-${bookId}-${String(chapter)}`
      if (!VerseService.verseCacheByHash[hash]) {
         const response = await this.api.get(`/verses/${version}/${bookId}/${String(chapter)}`)
         VerseService.verseCacheByHash[hash] = this.mapVerses(response.data)
      }
      return VerseService.verseCacheByHash[hash] as Verse[]
   }

   async getByNumber({ version, bookId, chapter, number }: IInputVerseByNumber): Promise<Verse> {
      const hash = `${version}-${bookId}-${String(chapter)}-${String(number)}`
      if (!VerseService.verseCacheByHash[hash]) {
         const response = await this.api.get(`/verses/${version}/${bookId}/${String(chapter)}/${String(number)}`)
         VerseService.verseCacheByHash[hash] = this.mapVerse(response.data)
      }
      return VerseService.verseCacheByHash[hash] as Verse
   }

   private mapVerses(verse: any): Verse[] {
      const { book, chapter, verses } = verse
      return verses.map((v: any) => ({
         id: v.number,
         version: book.version,
         bookId: book.abbrev.pt,
         bookName: book.name,
         chapter: chapter.number,
         verse: v.number,
         text: v.text
      }))
   }

   private mapVerse(verse: any): Verse {
      const { book, chapter, number, text } = verse
      return {
         id: number,
         version: book.version,
         bookId: book.abbrev.pt,
         bookName: book.name,
         chapter: chapter,
         verse: number,
         text: text
      }
   }
}
