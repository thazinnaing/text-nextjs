import { Metadata } from "next"

type Props={
  params:{
    productId:string
  }
}

export const generateMetadata = ({params}:Props):Metadata=>{
  return{
    title: `Product ${params.productId}`
  }
}


const ProductDetail = ({params}:Props) => {
  return (
    <div>
        This is a product detail page {params.productId}
    </div>
  )
}

export default ProductDetail
