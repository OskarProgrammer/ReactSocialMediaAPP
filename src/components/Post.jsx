import { useState } from "react"
import { Comment } from "./Comment"
import "./Post.css" 


export const Post = (props) => {
    const [areShown, setAreShown] = useState(false)
    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")
    const [isLiked, setIsLiked] = useState(false)


    const sendComment = () => {
        if (author !== "" && text !== ""){
            props.onAdd(props.postKey, author, text)
            setAuthor("")
            setText("")
        }
    }

    return (
        <div className="post">
            <div className="title">{props.title}</div>
            <div className="image"> <img src="" alt={props.link} width="360px" height="360px"/> </div>
            <div className="desc">{props.desc}</div>
            <div className="buttons"> 
                <button onClick={()=>{setAreShown(!areShown)}}>{areShown ? "Hide Comments":"Show Comments"}</button>
                <button onClick={()=>{setIsLiked(!isLiked)}} className={isLiked ? "liked": ""}>Like</button>
            </div>

            {areShown ? 
            <>
                <div className="newcomment">
                    <div><input onChange={(e)=>{setAuthor(e.target.value)}} type="text" placeholder="Author" value={author}/></div>
                    <div><input onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Your Comment" value={text}/></div>
                    <button onClick={() => {sendComment()}}>Send</button>
                </div>
            </>
            : ""}

            {areShown ? props.comments.map((comment) => {
                return <><Comment author={comment.author} text={comment.text}/>
                </>
            }) : ""}
        </div>
    )
}