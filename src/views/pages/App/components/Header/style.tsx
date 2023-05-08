import styled from 'styled-components'

export const Header = styled.header`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 18px;
   background-color: transparent;
   border-bottom: 1px solid #f0f0f0f0;
   box-shadow: 1px 1px 8px 1px #0000007f;
`

export const Link = styled.a`
   cursor: pointer;
   &.order {
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
   }
   &.ordered {
      border: 2px solid #0000ee;
      svg {
         fill: #0000ee;
      }
   }
`

export const BreadCrumber = styled.div`
   display: flex;
   gap: 20px;
   padding: 0 8px;
`

export const BreadCrumberItem = styled.div`
   display: flex;
   align-items: center;
   padding: 0 2px;
`
export const Actions = styled.div`
   display: flex;
   gap: 28px;
   align-items: center;
`
