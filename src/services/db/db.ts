import { IDb, Saved } from './interfaces/IDb'

export class DB implements IDb {
   private _key = 'saved'

   save(input: Saved): Promise<void> {
      return new Promise(resolve => {
         input.id = Math.random().toString(16).substring(2, 7)
         const saveds = localStorage.getItem(this._key)
         if (!saveds) {
            localStorage.setItem(this._key, JSON.stringify([input]))
            return resolve()
         }
         try {
            const savedParsed = JSON.parse(saveds as string)
            const updated = JSON.stringify([...savedParsed, input])
            localStorage.setItem(this._key, updated)
            return resolve()
         } catch (_) {
            localStorage.setItem(this._key, JSON.stringify([input]))
            return resolve()
         }
      })
   }
   get(): Promise<Saved[]> {
      return new Promise(resolve => {
         const saveds = localStorage.getItem(this._key)
         if (!saveds) {
            return resolve([])
         }
         try {
            const savedParsed = JSON.parse(saveds as string)
            return resolve(savedParsed)
         } catch (_) {
            return resolve([])
         }
      })
   }
}
