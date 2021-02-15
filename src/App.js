import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Booking from './pages/Booking';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import TripDetail from './pages/TripDetail';

export default function App() {
    return (
        <>
        <Switch>
            <Route path="/account">
                <MyAccount />
            </Route>
            <Route path="/book/:id">
                <Booking />
            </Route>
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