const Card=({children,className}:{children:React.ReactNode,className:string})=>{
    return(
        <div className={`p-10 m-3 text-blue-700 shadow-md border-green-300 bg-white flex justify-center items-center ${className}`}>
            {children}
        </div>
    )

}
export default Card;