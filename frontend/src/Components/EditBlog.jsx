import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const URI = 'http://localhost:8000/blogs/'


const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams()

    const update = async (evento) => {
        evento.preventDefault();

        await axios.put(URI + id, {
            title: title,
            content: content,
        })
        navigate('/')
    }

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const respuesta = await axios.get(URI + id)
        setTitle(respuesta.data.title)
        setContent(respuesta.data.content)
    }

    return (
        <div>
            <h3>Edit a Post</h3>
            <form onSubmit={update}>
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

export default EditBlog