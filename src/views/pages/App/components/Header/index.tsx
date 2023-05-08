import PreviewIcon from '@biblia/views/common/components/Icon/PreviewIcon'
import * as Style from './style'
import OrderAlphaIcon from '@biblia/views/common/components/Icon/OrderAlphaIcon'
import HistoryIcon from '@biblia/views/common/components/Icon/HistoryIcon'
import { useMemo, useState, useEffect } from 'react'

interface IHeader {
   onPreview?: () => void
   breadCrumbList?: string[]
   orderVisible?: boolean
   previewVisible?: boolean
   historyVisible?: boolean
   onClickOrder?: (ordered: boolean) => void
}

export default function Header({
   onPreview,
   onClickOrder,
   orderVisible,
   previewVisible,
   historyVisible,
   breadCrumbList = []
}: IHeader) {
   const [ordered, setOrdered] = useState(false)

   const breadCrumber = useMemo(() => {
      if (breadCrumbList?.length > 0) {
         return breadCrumbList?.map((item, i) => (
            <Style.BreadCrumberItem key={`bread-crumber-item-${String(i)}`}>{item}</Style.BreadCrumberItem>
         ))
      }
   }, [breadCrumbList])

   useEffect(() => {
      onClickOrder?.(ordered)
   }, [ordered, onClickOrder])

   return (
      <Style.Header>
         <Style.BreadCrumber>
            {previewVisible && (
               <Style.Link onClick={() => onPreview?.()}>
                  <PreviewIcon />
               </Style.Link>
            )}

            {breadCrumber}
         </Style.BreadCrumber>
         <Style.Actions>
            {orderVisible && (
               <Style.Link onClick={() => setOrdered(o => !o)} className={`order ${ordered && 'ordered'}`}>
                  <OrderAlphaIcon />
               </Style.Link>
            )}
            {historyVisible && (
               <Style.Link>
                  <HistoryIcon />
               </Style.Link>
            )}
         </Style.Actions>
      </Style.Header>
   )
}
