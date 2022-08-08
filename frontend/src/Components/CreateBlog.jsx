import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// const URI = "http://localhost:8000/blogs/";
const URI = "https://blogporta.herokuapp.com/blogs/";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [tecnonology, setTecnonology] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const store = async (evento) => {
    evento.preventDefault();
    if ([title, content, image, link, tecnonology].includes("")) {
      setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      return;
    } else {
      setError(false);
    }
    // console.log(data)
    const data = {
      title,
      content,
      image,
      link,
      tecnonology: tecnonology.toLocaleUpperCase(),
    };
    console.log(data.tecnonology);
    const respuesta = await axios.post(URI, data);
    alert(respuesta.data.message);
    // console.log(respuesta);

    navigate("/");
  };

  return (
    <div className="bg-gray-800 ">
      <div className="row">
        <div className="col">
          <Link to="/" className="btn btn-primary mt-2 mb-2">
            {/* <i className="fas fa-arrow-left"></i> */}
            <button className="bg-yellow-300 py-2 px-2 text-dark mt-5">
              Regresar
            </button>
          </Link>
          <h1 className="text-white text-2xl mb-5">Crear una nueva entrada </h1>

          <div className="w-full bg-gray-800 pb-5 ">
            <div className="bg-gradient-to-b to-blue-600 h-80"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
              <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
               
                <p className="text-3xl font-bold leading-7 text-center text-white">
                  Crear Blog
                </p>

                <form onSubmit={store}>
                  <div className="md:flex items-center mt-12"></div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none text-gray-300">
                        Titulo
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(evento) => setTitle(evento.target.value)}
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none text-gray-300 pb-5 ">
                        Tecnologias
                      </label>
                      <span className="text-red-200 text-sm ">
                        Para agregar diferentes tecnologias debes separarlas por
                        una coma y sin espacios
                      </span>
                      <span className="text-green-200">
                        Ejemplo:Node,React,Tailwind
                      </span>
                      <input
                        type="text"
                        value={tecnonology}
                        onChange={(evento) =>
                          setTecnonology(evento.target.value)
                        }
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                      />
                    </div>
                  </div>

                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none text-gray-300">
                        Imagen
                      </label>
                      <input
                        type="text"
                        value={image}
                        onChange={(evento) => setImage(evento.target.value)}
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none text-gray-300">
                        Link Al Proyecto
                      </label>
                      <input
                        type="text"
                        value={link}
                        onChange={(evento) => setLink(evento.target.value)}
                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col mt-8">
                      <label className="font-semibold leading-none text-gray-300">
                        Descripción
                      </label>
                      <textarea
                        type="text"
                        value={content}
                        onChange={(evento) => setContent(evento.target.value)}
                        className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <button
                      type="submit"
                      className="mt-9 font-semibold leading-none  py-4 px-10 bg-yellow-500 rounded hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
                    >
                      Crear
                    </button>
                  </div>
                  {error ? (
                  <div className=" bg-red-500 inline-block py-2 px-2 font-bold mt-5 rounded-3xl">
                    Todos los campos son obligatorios
                  </div>
                ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
