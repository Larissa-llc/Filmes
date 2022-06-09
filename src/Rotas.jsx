import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Filmes from './pages/Filmes'
import Filme from './pages/filme/Filme'
import Ator from './pages/ator/Ator.jsx'

const Rotas = () => {
    return (
        <div>
            <Switch>
            <Route exact path='/' component={Filmes} /> 
            <Route exact path='/filme/:id' component={Filme} />
            <Route exact path='/ator/:id' component={Ator} />
            </Switch> 
        </div>
    )
} 

export default Rotas 