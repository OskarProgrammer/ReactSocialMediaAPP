import { useState } from 'react'
import { Post } from './components/Post'
import './App.css'


const initialPosts = [
  {
    title: "Tytuł",
    description: "Opis",
    picture: "Link do zdjęcia",
    author: "Oskar",
    comments: [
      {
        author: "Oskar",
        text: "Cos tam",
      },
      {
        author: "Kots",
        text: "Cos tdsadam",
      }
    ],
    key: crypto.randomUUID()
  },
  {
    title: "Tytuł 1",
    description: "Opis 1",
    picture: "Link do zdjęcia",
    author: "Oskar",
    comments: [
      {
        author: "Oskar",
        text: "Cos tam",
      },
      {
        author: "Kots",
        text: "Cos tdsadam",
      }
    ],
    key: crypto.randomUUID()
  }
]

function App() {

  const [posts, setPosts] = useState(initialPosts)

  const addNewComment = (key, author, text) => {
    let newPosts = []
    
    for (let i = 0; i < posts.length; i++) {
      if (key === posts[i].key) {
        posts[i].comments.push({
          author: author,
          text: text
        })
        newPosts.push(posts[i])
      } else {
        newPosts.push(posts[i])
      }
    }

    setPosts(newPosts)
  }


  return (
    <>
      <div className="mainContainer">
        <h1>Social Media APP</h1>

        {posts.map((post) => {
          return <Post title={post.title} desc={post.description} author={post.author} link={post.picture} comments={post.comments} postKey={post.key} onAdd={addNewComment}/>
        })}

      </div>
    </>
  )
}

export default App
