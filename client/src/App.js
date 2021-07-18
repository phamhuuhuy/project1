import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';


import NavBar from './components/NavBar/NavBar';




const App = () => {

    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>

        </BrowserRouter>

    )
}

export default App;