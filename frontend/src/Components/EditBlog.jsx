import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
// const URI = "http://localhost:8000/blogs/";
const URI = "https://blogporta.herokuapp.com/blogs/";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [tecnonology, setTecnonology] = useState("");
  const [creado, setcreado] = useState("");
  const [actualizado, setActualizado] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (evento) => {
    evento.preventDefault();

    if ([title, content, image, link, tecnonology].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    await axios.put(URI + id, {
      title: title,
      content: content,
      image: image,
      link: link,
      tecnonology: tecnonology.toUpperCase(),
    });
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const respuesta = await axios.get(URI + id);
    setTitle(respuesta.data.title);
    setContent(respuesta.data.content);
    setImage(respuesta.data.image);
    setLink(respuesta.data.link);
    setTecnonology(respuesta.data.tecnonology);
    setcreado(respuesta.data.createdAt);
    setActualizado(respuesta.data.updatedAt);
  };

  return (
    <div className=" bg-gray-800 ">
      <Link to="/" className="btn btn-primary mt-2 mb-5">
        {/* <i className="fas fa-arrow-left"></i> */}
        <button className="bg-yellow-300 py-2 px-2 text-dark mt-5">Regresar</button>
      </Link>
      <h3 className="text-2xl my-10  text-white">
        Entrada del blog #{id}-{title}
      </h3>
      {error ? (
        <div className="alert alert-danger">
          Todos los campos son obligatorios
        </div>
      ) : null}

      <div className="w-full bg-gray-800 pb-10 ">
        <div className="bg-gradient-to-b to-blue-600 h-80"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">
              Actulizar Blog
            </p>
            <p className=" text-gray-500 leading-7 text-st">
              Creado el: {creado}
            </p>
            <p className=" text-gray-500 leading-7 text-st">
              Actulizado por ultima vez: {actualizado}
            </p>
            <form onSubmit={update} className="">
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
                  <span className="text-red-200 text-sm md:text-base">
                    Para agregar diferentes tecnologias debes separarlas por una
                    coma y sin espacios
                  </span>
                  <span className="text-green-200">
                    Ejemplo: Node,React,Tailwind
                  </span>
                  <input
                    type="text"
                    value={tecnonology}
                    onChange={(evento) => setTecnonology(evento.target.value)}
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
                <img src={image} alt={title} className="w-20 mx-auto mt-5" />
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">
                    Link
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
                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Actualizar Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form onSubmit={update}>
        <div className="mb-3">
          <label htmlFor="" className=" bg-gray-300 ">
            Titulo
            <input
              type="text"
              value={title}
              onChange={(evento) => setTitle(evento.target.value)}
              className=" px-5"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="" className=" bg-gray-300 ">
            Content
            <input
              type="text"
              value={content}
              onChange={(evento) => setContent(evento.target.value)}
              className=" px-5"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="" className=" bg-gray-300 ">
            Image
            <input
              type="text"
              value={image}
              onChange={(evento) => setImage(evento.target.value)}
              className=" px-5"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="" className=" bg-gray-300 ">
            link to proyect
            <input
              type="text"
              value={link}
              onChange={(evento) => setLink(evento.target.value)}
              className=" px-5"
            />
          </label>
        </div>
        <div className="mb-3">
          <p>
            Por favor usar este formato para las tecnologia <br />
            <span className="text-danger">Ejemplo</span>:{" "}
            <span className="text-success">node,react,tailwind</span>
            <br />
            <span>Todo tiene que estar junto y separado por comas</span>
          </p>
          <label htmlFor="" className=" bg-gray-300 ">
            Tecnonology
            <input
              type="text"
              value={tecnonology}
              onChange={(evento) => setTecnonology(evento.target.value)}
              className=" px-5"
            />
          </label>
        </div>
        <button type="submit" className="bg-green-2000">
          Save
        </button>
      </form> */}
    </div>
  );
};

export default EditBlog;
