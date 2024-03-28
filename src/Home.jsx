import { useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [nomeDoFilme, setNomeDoFilme] = useState('')
  const [filmes, setFilmes] = useState([])

  const buscarFilme = async () => {
    const resultado = await axios.get(`https://www.omdbapi.com/?apiKey=28d0dee8&s=${nomeDoFilme}`)
    setFilmes(resultado.data.Search)
  }

  return (
    <>
      <h1>Filmes</h1>
      <input
        type='text' value={nomeDoFilme}
        onChange={(evento) => setNomeDoFilme(evento.target.value)}
      />
      <button onClick={buscarFilme}>Buscar</button>
      {filmes.map((filme) => (
        <Link to={`/filme/${filme.imdbID}`}>
          <h5>{filme.Title}</h5>
          <img width={100} src={filme.Poster} />
        </Link>
      ))}
    </>
  )
}

export default Home
