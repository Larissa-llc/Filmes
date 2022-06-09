import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../service/apiFilmes'


const Filmes = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results);
        })

    }, [])

    return (
        <div>
            <h1>Filmes</h1>
            {filmes.length &&
                <Row>
                    {filmes.map(filme => (
                        <Col key={filme.id} md={3} className="mb-3">
                                <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                                <Card.Body>
                                    <p>{filme.title}</p>
                                    <p>({filme.original_title})</p>
                                    <p>{filme.overview}</p>
                                    <Link to={`/filme/${filme.id}`} className="btn btn-success">Detalhes</Link>
                                </Card.Body>
                                </Card>
                        </Col>
                    ))}
                </Row>
            }
        </div>
    )    
} 

export default Filmes 