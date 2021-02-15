import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Booking } from '../components';
import {bookSeat, pickSeat} from '../actions'

export default function BookingContainer() {
    const trips = useSelector(state => state.trips);
    const bookedSeats = useSelector(state => state.totalPrice)
    console.log(bookedSeats);
    const {id} = useParams();
    const trip = trips.find(trip => trip.id == id);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <Booking>
            <Booking.Pan>
                <Booking.Title></Booking.Title>
                <Booking.SubTitle>Pick a seat</Booking.SubTitle>
                <Booking.Group>
                    {trip.seats.map(seat => <Booking.SeatButton onClick={() => dispatch(pickSeat)} key={seat.id}>{seat.isAvailable? "Free":"Booked"}</Booking.SeatButton>)}
                </Booking.Group>
            </Booking.Pan>
            <Booking.Pan>
                <Booking.Title>
                    Book a seat to: <Booking.Span>{trip.destination}</Booking.Span>
                </Booking.Title>
                <Booking.SubTitle>Trip information</Booking.SubTitle>
                <Booking.Group>
                    <Booking.Detail>Departure time: {trip.departureTime}</Booking.Detail>
                    <Booking.Detail>Driver: {trip.driverName}</Booking.Detail>
                    <Booking.Detail>Driver's contact: {trip.driverContact}</Booking.Detail>
                    <Booking.Detail>Estimated duration: {trip.estimatedDuration}</Booking.Detail>
                    <Booking.Detail>Breaks: {trip.breaks}</Booking.Detail>
                    <Booking.Detail>{trip.price}Ar/seat</Booking.Detail>
                </Booking.Group>
                <Booking.Group>
                    <Booking.BookButton onClick={()=>setShowModal(true)}>Book {bookedSeats} seats</Booking.BookButton>
                    <Booking.Detail>Total: {}Ar</Booking.Detail>
                </Booking.Group>
            </Booking.Pan>
            {showModal && 
                <Booking.Modal>
                    <Booking.InnerModal>
                        <Booking.CloseButton onClick={() => setShowModal(false)}>X</Booking.CloseButton>
                        <Booking.ModalTitle>Booking confirmed!</Booking.ModalTitle>
                        <Booking.ModalText>
                            Thank you for trusting our service. Your booking has beed added to your account. You can review it there.
                        </Booking.ModalText>
                        <Booking.ButtonCheck onClick={() => dispatch(bookSeat(trip))}>
                            <Booking.Link to={`/account`}>Check your account</Booking.Link>
                        </Booking.ButtonCheck>
                    </Booking.InnerModal>
                </Booking.Modal>}
        </Booking>
    )
}
