import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import TripDetail from './pages/TripDetail';

export default function App() {
    return (
        <>
        <Switch>
            <Route path="/account">My account</Route>
            <Route path="/book/:id"></Route>
            <Route path="/trip/:town">
                <TripDetail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </>
    )
}