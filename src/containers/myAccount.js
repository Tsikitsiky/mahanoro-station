import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MyAccount } from '../components'
import { InputLabel } from '../components/myAccount/style/myAccount';
import {changeFirstName, changeLastName, changePhoneNbr, cancel} from '../actions'

export default function MyAccountCountainer() {
    const bookedTrips = useSelector(state => state.booked);
    const user = useSelector(state => state.user);
    const seats = useSelector(state => state.seats);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phoneNbr, setPhoneNbr] = useState(user.phoneNumber);
    const dispatch = useDispatch();
    function update(e) {
        e.preventDefault();
        dispatch(changeFirstName(firstName))
        dispatch(changeLastName(lastName))
        dispatch(changePhoneNbr(phoneNbr))
        console.log(firstName, lastName);
    }
    console.log(bookedTrips);
    return (
        <MyAccount>
            <MyAccount.Pan>
                <MyAccount.Title>
                    <img src="../icons/flat-ui_user-interface.svg" />
                </MyAccount.Title>
                <MyAccount.SubTitle>My personal informations</MyAccount.SubTitle>
                <MyAccount.Form onSubmit={update}>
                    <InputLabel>
                        First name<br />
                        <MyAccount.Input value={firstName} onChange = {(e) => setFirstName(e.target.value)} />
                    </InputLabel>
                    <InputLabel>
                        Last name<br />
                        <MyAccount.Input value={lastName} onChange = {(e) => setLastName(e.target.value)} />
                    </InputLabel>
                    <InputLabel>
                        Phone number<br />
                        <MyAccount.Input type="tel" value={phoneNbr} onChange = {(e) => setPhoneNbr(e.target.value)} />
                    </InputLabel>
                    <MyAccount.UpdateButton>Update</MyAccount.UpdateButton>
                </MyAccount.Form>
            </MyAccount.Pan>
            <MyAccount.Pan>
                <MyAccount.Title>
                    My account: <br />
                    <MyAccount.Span>{user.firstName} &nbsp; {user.lastName}</MyAccount.Span>
                </MyAccount.Title>
                <MyAccount.SubTitle>My booking:</MyAccount.SubTitle>
                <MyAccount.List>
                    {bookedTrips.length !== 0 ? 
                    bookedTrips.map(trip => <MyAccount.Trip key={trip.id}>
                        <MyAccount.Group>
                            <MyAccount.Detail>{trip.destination}</MyAccount.Detail>
                            <MyAccount.Detail>
                                {new Date(trip.departureTime).toLocaleDateString()}, {new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}
                            </MyAccount.Detail>
                        </MyAccount.Group>
                        <MyAccount.Group>
                            <MyAccount.Detail>{trip.bookedSeats}seats</MyAccount.Detail>
                            <MyAccount.Detail>{trip.totalPrice}Ar</MyAccount.Detail>
                        </MyAccount.Group>
                        <MyAccount.CancelButton onClick={() => dispatch(cancel(trip.id))} >cancel</MyAccount.CancelButton>
                    </MyAccount.Trip>) 
                    :
                     "No trip booked"}
                </MyAccount.List>
            </MyAccount.Pan>
        </MyAccount>
    )
}
