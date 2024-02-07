
const reviewId = ({
    params,}
    :{
    params:{
        productId:string,
        reviewId:string
    }}) => {
  return (
    <div>
      This is review id {params.reviewId} for product id {params.productId}
    </div>
  )
}

export default reviewId

