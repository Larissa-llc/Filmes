import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../service/apiFilmes'

const Ator = (props) => {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = props.match.params.id

        apiFilmes.get(`/person/${id}?language=pt-BR`).then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data.cast)
        })
    }, [props])

    return (
        <>
                        {ator.id &&
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                        </Card>
                    </Col>
                    <Col md={9}>
                        <h1>{ator.name}</h1>
                        <p>Data de Nascimento: {ator.birthday}</p>
                        <p>Nascido(a) em: {ator.place_of_birth}</p>
                        <p>{ator.biography}</p>
                        <Button variant="primary" onClick={()=>props.history.goBack()}>Voltar</Button>
                    </Col>
                    <Col md={12}>
                        <h1>Filmes</h1>
                        <Row>
                            {filmes.map(filme => (
                                <React.Fragment key={filme.id}>
                                    {filme.poster_path &&
                                        <Col md={1}>
                                            <Card title={filme.title}>
                                                <Link to={`/filme/${filme.id}`}>
                                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                                                </Link>
                                            </Card>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }
        </>
    )
}

export default Ator