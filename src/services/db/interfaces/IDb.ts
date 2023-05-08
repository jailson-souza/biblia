import { Verse } from '@biblia/domain/verse/Verse'

export class Saved {
   id?: string
   name?: string
   date?: Date
   verses: Verse[]
}

export interface IDb {
   save(input: Saved): Promise<void>
   get(): Promise<Saved[]>
}
