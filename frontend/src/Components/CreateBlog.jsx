import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const URI = 'http://localhost:8000/blogs/'


const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const store = async (evento) => {

        evento.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')

    }


    return (
        <div>
            <h3>Create a Post</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Titulo
                        <input type="text" value={title} onChange={(evento) => setTitle(evento.target.value)} className="form-control" />

                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Content
                        <input type="text" value={content} onChange={(evento) => setContent(evento.target.value)} className="form-control" />

                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
        </div>
    )
}

export default CreateBlog