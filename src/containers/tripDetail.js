import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { TripDetail } from '../components'

export default function TripDetailContainer() {
    const {town} = useParams();
    const trips = useSelector(state => state.trips);
    const tripToDisplay = trips.filter(trip => trip.destination === town);
    return (
        <TripDetail>
            <TripDetail.Title>Next to trips to: 
                <TripDetail.Span></TripDetail.Span>
            </TripDetail.Title>
            <TripDetail.List>
                {tripToDisplay.map(trip => <TripDetail.Trip key={trip.id}>
                    <TripDetail.Group>
                        <TripDetail.Day>{trip.departureTime}</TripDetail.Day>
                        <TripDetail.Time></TripDetail.Time>
                    </TripDetail.Group>
                    <TripDetail.Group>
                        <TripDetail.Date></TripDetail.Date>
                        <TripDetail.Seats>
                            {trip.seats.filter(seat => seat.isAvailable === true).length} seats left
                        </TripDetail.Seats>
                    </TripDetail.Group>
                    <TripDetail.Button>
                        <TripDetail.Link to={`/book/${trip.id}`}>Book a Seat</TripDetail.Link>
                    </TripDetail.Button>
                </TripDetail.Trip>)}
            </TripDetail.List>
        </TripDetail>
    )
}
