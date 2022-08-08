import {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {FaHome} from 'react-icons/fa'
import Spinner from './Components/helpers/Spinner'
// const URI = 'http://localhost:8000/blogs/'
const URI = "https://blogporta.herokuapp.com/blogs/"


const Blog = () => {
    // const [title, setTitle] = useState('')
    // const [content, setContent] = useState('')
    // const [image, setImage] = useState('')
    // const [link, setLink] = useState('')
    // const [tecnonology, setTecnonology] = useState('')
    // const [error, setError] = useState(false)
    const [blog, setBlog] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const getBlogById = async () => {
            try {
                const respuesta = await axios.get(URI + id)
            setBlog(respuesta.data)
            
                
            } catch (error) {
                console.log(error)
                
            }
            setCargando(!cargando)
        }
        getBlogById()

    },[])
    console.log(blog)

    const objBlog = {
        title: blog.title,
        content: blog.content,
        image: blog.image,
        link: blog.link,
        tecnonology: blog.tecnonology,
    }
    const {title, content, image, link, tecnonology} = objBlog

 


  return cargando ? (
    // <p>Cargando...</p>
    <>
     <Link to="/" className="btn btn-primary mt-2 mb-5">
                {/* <button className='text-xl font-semibold hover:bg-blue-300 rounded-lg py-2 px-2'>Regresar Al Home Page</button> */}
                <FaHome className='mx-auto w-14 h-7 my-5  ' />
            </Link>
    <Spinner/>
    </>
    ): Object.keys(blog).length === 0 ? (
        <>
        <Link to="/" className="btn btn-primary mt-2 mb-5">
                <FaHome className='mx-auto w-14 h-7 my-5  '/>
                
            </Link>
        <p className='text-2xl pt-10 '>No hay resultados de la busqueda</p>
        {/* { navigate("/") } */}
        </>
        

    ):(
        <div>
            <Link to="/" className="btn btn-primary mt-2 mb-5">
                <FaHome className='mx-auto w-14 h-7 my-5  '/>
                
            </Link>
        <p>Entrada del blog {blog.id}</p>
        <h1 className='text-4xl mb-10'>{title}</h1>
        {/* <p>Titulo:{title}</p> */}
        <p>Contenido:</p>
        <h2 className='text-xl border-b border-black mb-10'>{content}</h2>
        {/* <p className='text-xl'>Link al proyecto: {link}</p> */}
        <a href={link} className="text-md hover:font-bold
        ">Ver Proyecto...</a>
        <p>Tecnonologias usadas: {tecnonology}</p>
        <img src={image} alt={title}  className="mx-auto"/>
        {/* <p>Imagen:{image}</p> */}
        
    </div>
    )
    
  
}

export default Blog