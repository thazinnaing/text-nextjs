
const ProductDetail = ({params}:{params:{productId:string}}) => {
  return (
    <div>
        This is a product detail page {params.productId}
    </div>
  )
}

export default ProductDetail
