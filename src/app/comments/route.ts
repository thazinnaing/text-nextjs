import { NextRequest } from "next/server"
import {comments} from "./data"

export const GET=async(request:NextRequest)=>{
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredComments = query 
    ?
    comments.filter(comment => comment.description?.includes(query)) 
    :
    comments

    return Response.json(filteredComments)
}

export const POST = async(request: Request)=>{
    const comment = await request.json()
    
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
