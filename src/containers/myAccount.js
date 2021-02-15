import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MyAccount } from '../components'
import { InputLabel } from '../components/myAccount/style/myAccount'

export default function MyAccountCountainer() {
    const bookedTrips = useSelector(state => state.booked);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNbr, setPhoneNbr] = useState();
    console.log(bookedTrips);
    return (
        <MyAccount>
            <MyAccount.Pan>
                <MyAccount.Title></MyAccount.Title>
                <MyAccount.SubTitle></MyAccount.SubTitle>
                <MyAccount.Form>
                    <InputLabel>
                        First name
                        <MyAccount.Input value={firstName} />
                    </InputLabel>
                    <InputLabel>
                        <MyAccount.Input value={lastName} />
                    </InputLabel>
                    <InputLabel>
                        <MyAccount.Input type="tel" value={phoneNbr} />
                    </InputLabel>
                </MyAccount.Form>
            </MyAccount.Pan>
            <MyAccount.Pan>
                <MyAccount.Title></MyAccount.Title>
                <MyAccount.SubTitle></MyAccount.SubTitle>
                <MyAccount.List>
                    {bookedTrips.length !== 0 ? 
                    bookedTrips.map(trip => <MyAccount.Trip key={trip.id}>
                        <MyAccount.Group>
                            <MyAccount.Detail>{trip.destination}</MyAccount.Detail>
                            <MyAccount.Detail>{trip.departureTime}</MyAccount.Detail>
                        </MyAccount.Group>
                        <MyAccount.Group>
                            <MyAccount.Detail>seat</MyAccount.Detail>
                            <MyAccount.Detail>Ar</MyAccount.Detail>
                        </MyAccount.Group>
                    </MyAccount.Trip>) 
                    :
                     "No trip booked"}
                </MyAccount.List>
            </MyAccount.Pan>
        </MyAccount>
    )
}
