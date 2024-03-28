import { useEffect, useState } from 'react'
import './Filme.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Filme() {
    const [filme, setFilme] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        buscarFilmePeloId()
    }, [])

    const buscarFilmePeloId = async () => {
        const resultado = await axios.get(`https://www.omdbapi.com/?apiKey=28d0dee8&i=${id}`)
        setFilme(resultado.data)
    }

    return (
        <>
            {filme && (
                <>
                    <h1>{filme.Title}</h1>
                    <h5>Ano: {filme.Year}</h5>
                    <h5>Diretor: {filme.Director}</h5>
                    <img src={filme.Poster} /></>
            )}
            {!filme && (
                <p>Carregando...</p>
            )}
        </>
    )
}

export default Filme
