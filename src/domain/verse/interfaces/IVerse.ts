import { Verse } from '../Verse'

export interface IInputVerse {
   version: string
   bookId: string
   chapter: number
}

export interface IInputVerseByNumber extends IInputVerse {
   number: number
}

export interface IVerse {
   get(input: IInputVerse): Promise<Verse[]>
   getByNumber(input: IInputVerseByNumber): Promise<Verse>
}
