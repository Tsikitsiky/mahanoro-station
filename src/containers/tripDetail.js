import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { TripDetail } from '../components'

export default function TripDetailContainer() {
    const {town} = useParams();
    const trips = useSelector(state => state.trips);
    const tripToDisplay = trips.filter(trip => trip.destination === town);
    function getDay(day) {
        switch (day) {
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            case 7:
                return "Sunday"
        
            default:
                break;
        }
    }
    return (
        <TripDetail>
            <TripDetail.Title>Next to trips to: 
                <TripDetail.Span>{town}</TripDetail.Span>
            </TripDetail.Title>
            <TripDetail.List>
                {tripToDisplay.map(trip => <TripDetail.Trip key={trip.id}>
                    <TripDetail.Group>
                        <TripDetail.Day>{getDay(new Date(trip.departureTime).getDay())}</TripDetail.Day>
                        <TripDetail.Time>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}</TripDetail.Time>
                    </TripDetail.Group>
                    <TripDetail.Group>
                        <TripDetail.Date>{new Date(trip.departureTime).toLocaleDateString()}</TripDetail.Date>
                        <TripDetail.Seats>
                            <TripDetail.Span>{trip.seats.filter(seat => seat.isAvailable === true).length}</TripDetail.Span> seats left
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
