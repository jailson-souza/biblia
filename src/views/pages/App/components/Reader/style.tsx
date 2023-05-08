import styled from 'styled-components'

export const Grid = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 18px;
   padding: 50px 28px 100vh 28px;
`

export const Line = styled.div`
   display: flex;
   align-items: start;
   justify-content: start;
   gap: 8px;
   padding: 8px;
   &.choosed {
      background-color: rgba(0, 0, 0, 0.05);
   }
   &.line-selected {
      p {
         text-decoration: underline dotted #0000ee 2px;
         color: #0000ee;
      }
      span {
         color: #0000ee;
      }
   }
`

export const Number = styled.span`
   color: #000;
   opacity: 0.7;
`

export const Text = styled.p`
   text-align: justify;
   font-size: 16px;
   line-height: 26px;
   letter-spacing: 0.5px;
`

export const Toolbar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   height: 40px;
   box-shadow: 1px 1px 8px 1px #0000007f;
   background-color: transparent;
`

export const ButtonStep = styled.button`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #fff;
   gap: 18px;
   &.preview {
      padding-left: 28px;
      border-right: 1px solid #0000007f;
   }
   &.next {
      padding-right: 28px;
      border-left: 1px solid #0000007f;
   }
`

export const ButtonSave = styled.button`
   position: absolute;
   width: 50px;
   height: 50px;
   left: 50%;
   bottom: 1px;
   translate: -50%;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 1px 1px 8px 1px #0000007f;
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
