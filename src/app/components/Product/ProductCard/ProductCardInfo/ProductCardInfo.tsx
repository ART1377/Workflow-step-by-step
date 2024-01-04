import React from 'react'
import { Step } from '../../../../../../next-type-d';

type Props = {
    productName: string;
    productDescription: string;
    steps: Step[];
    openModal: () => void;
}

const ProductCardInfo = (props: Props) => {
  return (
    <div>ProductCardInfo</div>
  )
}

export default ProductCardInfo