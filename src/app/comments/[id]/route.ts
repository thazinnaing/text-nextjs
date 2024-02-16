import {comments} from "../data"

export const GET= async(
         _request: Request, 
        {params}:{params:{id:string}}
    )=>{
    const comment = comments.find((comment )=> comment.id === parseInt(params.id))
    return Response.json(comment);
}

export const PATCH = async(request:Request, {params}:{params:{id:string}})=>{

    const body = await request.json()
    const {description}=body
    const index = comments.findIndex(
        comment => comment.id === parseInt(params.id)
    )
    comments[index].description = description
    return Response.json(comments[index])
}

export const DELETE=async(_request: Request, {params}:{params: {id:string}}) =>{
    const deleteIndex = comments.findIndex(
        comment => comment.id === parseInt(params.id)
    )
    const deletedComment=comments[deleteIndex]
    comments.splice(deleteIndex,1)
    return Response.json(deletedComment)

}