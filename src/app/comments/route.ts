import {comments} from "./data"

export const GET=async()=>{
    return Response.json(comments)
}

export const POST = async(request: Request)=>{
    const comment = await request.json()
    console.log("comment",comment)
    const newComment = {
        id: comments.length+1,
        description: comment.description
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment),{
        headers: {
            "Content_Type":"application/json"
        },
        status: 201
    })
}

export const PATCH = async()=>{
    
}