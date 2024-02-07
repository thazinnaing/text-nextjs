import { notFound } from "next/navigation"
const reviewId = ({
    params,}
    :{
    params:{
        productId:string,
        reviewId:string
    }}) => {

    if(parseInt(params.reviewId)>1000){
        notFound()
    }

    return (
        <div>
        This is review id {params.reviewId} for product id {params.productId}
        </div>
    )
}

export default reviewId

