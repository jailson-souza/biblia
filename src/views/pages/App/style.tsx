import styled from 'styled-components'

export const Container = styled.div`
   overflow: auto;
   height: calc(100vh - 90px);
   ::-webkit-scrollbar {
      height: 10px;
      width: 6px;
      background: #f1f1f1;
   }
   ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      background: #979696;
   }
`
