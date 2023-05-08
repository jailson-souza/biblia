import * as Style from './style'
import { useCallback } from 'react'

export enum NavChooseEnum {
   chapter = 'chapter',
   verse = 'verse',
   book = 'book'
}

interface INavChoose {
   onClickNav?: (choosed: NavChooseEnum) => void
   hide?: boolean
   selected?: NavChooseEnum
}

export default function NavOfChoose({ onClickNav, hide, selected }: INavChoose) {
   const handleSelectNav = useCallback(
      (choosed: NavChooseEnum) => {
         onClickNav?.(choosed)
      },
      [onClickNav]
   )

   return hide ? null : (
      <Style.Nav>
         <Style.NavItem
            className={`${selected === NavChooseEnum.book && 'nav-selected'}`}
            onClick={() => handleSelectNav(NavChooseEnum.book)}
         >
            Livro
         </Style.NavItem>
         <Style.NavItem
            className={`${selected === NavChooseEnum.chapter && 'nav-selected'}`}
            onClick={() => handleSelectNav(NavChooseEnum.chapter)}
         >
            Capitulo
         </Style.NavItem>
         <Style.NavItem
            className={`${selected === NavChooseEnum.verse && 'nav-selected'}`}
            onClick={() => handleSelectNav(NavChooseEnum.verse)}
         >
            Versículo
         </Style.NavItem>
      </Style.Nav>
   )
}
