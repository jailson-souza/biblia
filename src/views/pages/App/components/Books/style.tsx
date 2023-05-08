import styled from 'styled-components'

export const Grid = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   align-items: start;
`

export const Item = styled.a`
   padding: 10px;
   font-size: 14px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   height: calc(calc(100vw - 6px) / 4);
   width: calc(calc(100vw - 6px) / 4);
   border: 1px solid #f0f0f0;
   transition: all ease-in-out 0.3s;
   &:hover {
      color: #0000ee;
      border-bottom: 1px solid #0000ee;
   }
   &.book-choosed {
      color: #0000ee;
      border-bottom: 2px solid #0000ee;
   }
`

export const Spinner = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   translate: -50%;
   height: 50px;
   width: 50px;
   svg {
      animation: is-rotating 1s linear infinite;
      width: 40px;
      height: 40px;
      fill: #0000007f;
   }

   @keyframes is-rotating {
      to {
         transform: rotate(360deg);
      }
   }
`
