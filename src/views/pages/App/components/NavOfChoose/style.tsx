import styled from 'styled-components'

export const Nav = styled.nav`
   /* z-index: 2; */
   /* position: fixed; */
   display: flex;
   align-items: center;
   /* top: 50px; */
   height: 40px;
   width: 100%;
   border-bottom: 1px solid #f0f0f0f0;
   background-color: #fff;
`
export const NavItem = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: inherit;
   font-size: 14px;
   border-bottom: 2px solid transparent;
   transition: all 0.3s ease-in-out;
   &:hover,
   &.nav-selected {
      color: #0000ee;
      border-bottom: 2px solid #0000ee;
   }
`
