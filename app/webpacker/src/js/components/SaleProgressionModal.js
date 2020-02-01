import React from "react"
import Currency from './Currency';
import SaleProgressionList from './SaleProgressionList';
import closeBtn from '../../../images/close.png';

const SaleProgressionModal = props => {
  const { sale: {product, customer, amount}, progressions } = props.currentProgression;

  return (
    <div className="box-shadow-modal border-rounded left-50p top-50p transform-translate-m50 max-width-600 width-100 absolute bg-white height-auto z-index-1">
      <div className="bg-header-modal border-radius-top padding-x-xxl padding-top-xxl padding-bottom-lx"> 
        <span className="cursor-pointer float-right top-20 right-20 absolute"onClick={props.hideSaleProgression}>
          <img src={closeBtn} />
        </span>
        <div className="text-white text-xlarge margin-bottom-md">{product}</div>
        <div className="text-white text-larger opacity-6">{customer}</div>
        <div className="text-white text-larger opacity-6 text-right">
          <Currency amount={amount} />
        </div>
      </div>
      <div className="padding-x-xxl padding-y-xl flex">
        <SaleProgressionList progressions={progressions} />
      </div>
    </div>
  )
}

export default React.memo(SaleProgressionModal)
