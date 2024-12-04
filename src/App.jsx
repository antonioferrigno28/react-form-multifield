// Esercizio
// Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select) e uno stato per pubblicare o meno l'articolo.
// Utilizzare un unico oggetto per gestire tutti i dati del form.
// BONUS
// Aggiungere uno useEffect che mostri un alert quando l’utente clicca sull’apposita checkbox per pubblicare un articolo.
// Aggiungere l'associazione con dei possibili tags (lista di checkbox)
// Buon lavoro!
//////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from "react";
import postsData from "./data/posts";

function App() {
  const [newPost, setNewPost] = useState({
    autore: "",
    contenuto: "",
    immagine: "",
    categoria: "",
    published: true,
  });

  const [posts, setPosts] = useState(postsData);

  function handleInput(e) {
    const { name, value } = e.target;
    let currentAuthor = newPost.autore;
    let currentContent = newPost.contenuto;
    let currentImg = newPost.immagine;
    let currentCategory = newPost.categoria;
    //modifichiamo autore o content?
    if (name === "autore") {
      currentAuthor = value;
      console.log("modifying author with value " + " " + value);
    } else if (name === "contenuto") {
      currentContent = value;
    } else if (name === "immagine") {
      currentImg = value;
    } else if (name === "categoria") {
      currentCategory = value;
    }

    //aggiorno valore

    setNewPost({
      autore: currentAuthor,
      contenuto: currentContent,
      immagine: currentImg,
    });
    console.log("ao" + " " + value + " " + name);
    console.log(newPost.autore, newPost.contenuto);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !newPost.autore ||
      !newPost.contenuto ||
      !newPost.categoria ||
      !newPost.immagine
    ) {
      alert("Hai lasciato un campo vuoto");
      return;
    }

    setPosts([...posts, newPost]);
    setNewPost({ autore: "", contenuto: "", immagine: "", categoria: "" });
  }

  function handleDelete(i) {
    const updatedPosts = posts.filter((post, index) => i !== index);
    setPosts(updatedPosts);
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">BoolBlog</h1>
        <div className="wrapper mt-5">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="my-4">
                <div className="col-4">
                  <input
                    type="text"
                    name="autore"
                    placeholder="Inserisci il nome"
                    onChange={handleInput}
                    className="form-control mb-2"
                    value={newPost.autore}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    name="contenuto"
                    className="form-control mb-2"
                    placeholder="Inserisci il contenuto"
                    onChange={handleInput}
                    value={newPost.contenuto}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    name="immagine"
                    className="form-control mb-2"
                    placeholder="Inserisci l'URL immagine"
                    onChange={handleInput}
                    value={newPost.immagine}
                  />
                </div>
                <div className="col-4">
                  <select
                    name="categoria"
                    className="form-select mb-2"
                    onChange={handleInput}
                    value={newPost.categoria}
                  >
                    <option value="Ozio">Ozio</option>
                    <option value="Scoperte">Scoperte</option>
                    <option value="Giochi">Giochi</option>
                    <option value="Tv">Tv</option>
                  </select>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary">Invia</button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <ul className="list-group col-4">
              {posts.map((post, i) => (
                <li key={i} className="list-group-item">
                  <b>{post.autore}: </b>
                  {post.contenuto}
                  <div className="img-fluid">
                    <img src={post.immagine} className=" my-2" />
                  </div>
                  <button className="ms-2">Modifica titolo</button>
                  <button className="ms-2" onClick={() => handleDelete(i)}>
                    Cancella
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
