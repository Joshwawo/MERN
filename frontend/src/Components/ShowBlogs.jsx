import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const URI = "http://localhost:8000/blogs/";
const   URI = "https://blogporta.herokuapp.com/blogs/";
// https://blogporta.herokuapp.com/blog

const ShowBlogs = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);
  //Procedimiento para mostrar todos los blogs

  const getBlogs = async () => {
    const respuesta = await axios.get(URI);
    setBlog(respuesta.data);
    console.log(respuesta.data);
  };

  const deleteBlog = async (id) => {

    const confirmar = confirm("Desea eliminar el blog?");

    if (confirmar) {
      await axios.delete(URI + id);
      getBlogs();
    }

    // await axios.delete(`${URI}${id}`);
    // getBlogs();
  };

  return (
    
      <div className=" bg-gray-900 ">
        <Link to="/create" >
          <button className="bg-green-200 py-2 px-2 mt-5">Crear uno nuevo</button>
        </Link>

        {/* <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4   gap-5  mx-4  ">
          {blogs.map(
            ({
              id,
              title,
              content,
              createdAt,
              updatedAt,
              image,
              link,
              tecnonology,
            }) => (
              <div
                key={id}
                className="max-w-sm h-[25rem] rounded overflow-hidden shadow-2xl mt-5 "
              >
                <img
                  className= "h-[50%] mx-auto"
                  src={image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base mb-2 ">{content}</p>
                 
                  <div className=" flex justify-around">
                    <Link to={`/edit/${id}`} className="btn btn-info">
                      <button className="bg-yellow-300 py-2 px-2 ">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteBlog(id)}
                      className="bg-red-300 py-2 px-2"
                    >
                      Eliminar
                    </button>
                    <Link to={`/blog/${id}`}> 
                      <button className="bg-green-300 py-2 px-2">
                        Ver
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div> */}
        <div class="pt-6 pb-12 ">
          {
            blogs.map(({ id,
              title,
              content,
              createdAt,
              updatedAt,
              image,
              link,
              tecnonology,}) =>{
                return(
                  <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
                    

                  <div v-for="card in cards" class="flex flex-col md:flex-row bg-gray-300 rounded-lg shadow-xl overflow-hidden mt-4 w-100 mx-2">
            
                    
                    <div class="h-64 md:h-48 w-auto">
                      <img class="object-cover h-full w-full" src={image} />
                    </div>
                    
                    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h3 class="font-semibold text-lg leading-tight truncate">{title}</h3>
                      <p class="mt-2">
                        {content}
                      </p>
                      <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Jorge Morales &bull; {createdAt}
                      </p>
                      <div className="acciones flex justify-around mx-auto gap-4">
                        <Link to={`/edit/${id}`} className="btn btn-info">
                          <button className="bg-orange-300/50 hover:bg-orange-300/100  py-2 px-2 rounded-lg ">
                            Editar
                          </button>

                        </Link>
                        <button
                          onClick={() => deleteBlog(id)}
                          className="bg-rose-300/50 hover:bg-rose-300/100 py-2 px-2 rounded-lg"
                        >
                          Eliminar
                        </button>
                        <Link to={`/blog/${id}`}>
                          <button className=" bg-violet-300/50 hover:bg-violet-300/100  py-2 px-2 rounded-lg block">
                            Ver
                          </button>
                        </Link>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                )
              })
          }


  {/* <div id="card" class="">
    <h2 class="text-2xl text-center">Todas las entradas del blog</h2>

   
    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">

      <div v-for="card in cards" class="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden mt-4 w-100 mx-2">

        
        <div class="h-64 md:h-48 w-auto">
          <img class="object-cover h-full w-full" src="https://source.unsplash.com/l3Jdvs1Qui4/800x600" />
        </div>
        
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">Titulo de la carta</h3>
          <p class="mt-2">
            holas poist
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            holas &bull; holas
          </p>
        </div>
      </div>

    </div>
  </div> */}
</div>
      </div>
   
  );
};

export default ShowBlogs;

{
  /* <table className='table'>
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
 */
}
