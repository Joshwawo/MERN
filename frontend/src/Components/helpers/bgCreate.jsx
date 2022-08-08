import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [tecnonology, setTecnonology] = useState("");
  const navigate = useNavigate();

  const store = async (evento) => {
    evento.preventDefault();
    const data = {
      title,
      content,
      image,
      link,
      tecnonology,
    };
    // console.log(data)
    const respuesta = await axios.post(URI, data);
    console.log(respuesta);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>Crear un nuevo blog</h1>
          <form onSubmit={store}>
            <div className="form-group">
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contenido</label>
              <textarea
                className="form-control"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Imagen</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Link</label>
              <input
                type="text"
                className="form-control"
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tecnologias</label>
              <input
                type="text"
                className="form-control"
                value={tecnonology}
                onChange={(event) => setTecnonology(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
