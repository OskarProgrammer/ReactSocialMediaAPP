import "./Comment.css"

export const Comment = (props) => {


    return (
        <>
        
            <div className="comment"> 
                <div className="author">{props.author}</div>
                <div className="text">{props.text}</div>
            </div>
            
        </>
    )
}