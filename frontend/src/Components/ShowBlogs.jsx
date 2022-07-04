import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const ShowBlogs = () => {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        getBlogs()
    }, [])
    //Procedimiento para mostrar todos los blogs

    const getBlogs = async () => {
        const respuesta = await axios.get(URI);
        setBlog(respuesta.data)
        console.log(respuesta.data)


    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs();

    }



    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>

                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>{blog.createdAt}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>

                                        <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                    </td>

                                </tr>
                            )
                            )

                            }
                        </tbody>

                    </table>

                </div>
            </div>


        </div>
    )
}

export default ShowBlogs