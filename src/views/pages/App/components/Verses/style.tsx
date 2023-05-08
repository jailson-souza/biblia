import styled from 'styled-components'

export const Grid = styled.div`
   display: flex;
   flex-wrap: wrap;
`

export const Item = styled.a`
   font-size: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   height: calc(calc(100vw - 6px) / 5);
   width: calc(calc(100vw - 6px) / 5);
   border: 1px solid #f0f0f0;
   transition: all ease-in-out 0.3s;
   &:hover {
      color: #0000ee;
      border-bottom: 1px solid #0000ee;
   }
   &.verse-choosed {
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
