"use client"

type Props={
  params:{
    productId:string
  }
}

const ProductDetail = ({params}:Props) => {

  const generateInt=(count: number)=>{
    return Math.floor(Math.random()*count)

  }
  const random = generateInt(2)

  if(random === 1){
    throw new Error("Error loading review")
  }

  return (
    <div>
        This is a product detail page {params.productId}
    </div>
  )
}

export default ProductDetail
