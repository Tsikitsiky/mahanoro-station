import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MyAccount } from '../components'
import { InputLabel } from '../components/myAccount/style/myAccount'

export default function MyAccountCountainer() {
    const bookedTrips = useSelector(state => state.booked);
    const users = useSelector(state => state.user);
    const seats = useSelector(state => state.seats);
    const [firstName, setFirstName] = useState(users.firstName);
    const [lastName, setLastName] = useState(users.lastName);
    const [phoneNbr, setPhoneNbr] = useState(users.phoneNumber);
    console.log(bookedTrips);
    return (
        <MyAccount>
            <MyAccount.Pan>
                <MyAccount.Title>
                    <img src="../icons/flat-ui_user-interface.svg" />
                </MyAccount.Title>
                <MyAccount.SubTitle>My personal informations</MyAccount.SubTitle>
                <MyAccount.Form>
                    <InputLabel>
                        First name<br />
                        <MyAccount.Input value={firstName} />
                    </InputLabel>
                    <InputLabel>
                        Last name<br />
                        <MyAccount.Input value={lastName} />
                    </InputLabel>
                    <InputLabel>
                        Phone number<br />
                        <MyAccount.Input type="tel" value={phoneNbr} />
                    </InputLabel>
                    <MyAccount.UpdateButton>Update</MyAccount.UpdateButton>
                </MyAccount.Form>
            </MyAccount.Pan>
            <MyAccount.Pan>
                <MyAccount.Title>
                    My account: <br />
                    <MyAccount.Span>{firstName} &nbsp; {lastName}</MyAccount.Span>
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
                            <MyAccount.Detail>{seats.bookedSeats}seat</MyAccount.Detail>
                            <MyAccount.Detail>{seats.totalPrice}Ar</MyAccount.Detail>
                        </MyAccount.Group>
                        <MyAccount.CancelButton>cancel</MyAccount.CancelButton>
                    </MyAccount.Trip>) 
                    :
                     "No trip booked"}
                </MyAccount.List>
            </MyAccount.Pan>
        </MyAccount>
    )
}
