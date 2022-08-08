import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
// const URI = "http://localhost:8000/blogs/";
const URI = "https://blogporta.herokuapp.com/blogs/";

const EditBlog2 = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [tecnonology, setTecnonology] = useState("");
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
      tecnonology: tecnonology,
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
  };

  return (
    <div>
      <Link to="/" className="btn btn-primary mt-2 mb-5">
        {/* <i className="fas fa-arrow-left"></i> */}
        <button className="bg-yellow-300 py-2 px-2 text-dark">Regresar</button>
      </Link>
      <h3 className="text-2xl my-10">
        Entrada del blog #{id}-{title}
      </h3>
      {error ? (
        <div className="alert alert-danger">
          Todos los campos son obligatorios
        </div>
      ) : null}
      <form onSubmit={update}>
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
      </form>
    </div>
  );
};

export default EditBlog2;
