import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
     const [title, setTitle] = useState('');
     const [body, setBody] = useState('');
     const [author, setAuthor] = useState('Vivek Pareek');
     const [isPending, setIsPending] = useState(false);
     const history = useHistory();

     const handleSubmit = (e) => {
          e.preventDefault(); 
          const blog = {title, body, author};
          setIsPending(true);
          fetch('http://localhost:8000/blogs', {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(blog)
          }).then(() => {
               console.log("New Blog Added and it's work fine :)");

               setIsPending(false);
          })
          history.push('/');
     }

    return ( 
        <div className="create">
             <h2>Add a new blog</h2>
             <form onSubmit={handleSubmit}>
                  <label>Blog Title: </label>
                  <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                  />
                  <label>Blog Body: </label>
                  <textarea
                    rows="20"
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                  ></textarea>
                  <label>Blog Author: </label>
                  <select
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                  >
                       <option value="Vivek Pareek">Vivek Pareek</option>
                  </select>
                  {!isPending && <button>Post</button>}
                  {isPending && <button disabled>Posting...</button>}
             </form>
        </div>
     );
}
 
export default Create;
