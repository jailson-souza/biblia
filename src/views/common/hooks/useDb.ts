import { DB } from '@biblia/services/db/db'
import { useMemo } from 'react'

export function useDb() {
   const db = useMemo(() => new DB(), [])

   return { db }
}
