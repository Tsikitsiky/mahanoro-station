import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Booking } from '../components';
import {bookSeat, pickSeat, getPrice} from '../actions'

export default function BookingContainer() {
    const trips = useSelector(state => state.trips);
    const bookedSeats = useSelector(state => state.seats.bookedSeats);
    const totalPrice = useSelector(state => state.seats.totalPrice)
    const {id} = useParams();
    const trip = trips.find(trip => trip.id == id);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <Booking>
            <Booking.Pan>
                <Booking.Title>
                    <img src="../icons/noto-v1_bus.svg" />
                </Booking.Title>
                <Booking.SubTitle>Pick a seat</Booking.SubTitle>
                <Booking.Group>
                    <Booking.Wrapper>
                    {trip.seats.map(seat => <Booking.SeatButton onClick={() => {
                        dispatch(pickSeat())
                        dispatch(getPrice(trip.price))
                        }} key={seat.id}></Booking.SeatButton>)}
                    </Booking.Wrapper>
                </Booking.Group>
            </Booking.Pan>
            <Booking.Pan>
                <Booking.Title>
                    Book a seat to:&nbsp; <Booking.Span>{trip.destination}</Booking.Span>
                </Booking.Title>
                <Booking.SubTitle>Trip information</Booking.SubTitle>
                <Booking.Group>
                    <Booking.Detail>Departure time: &nbsp;
                        <Booking.Info>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}, {new Date(trip.departureTime).toLocaleDateString()}</Booking.Info>
                    </Booking.Detail>
                    <Booking.Detail>Driver: &nbsp;
                        <Booking.Info>{trip.driverName}</Booking.Info>
                    </Booking.Detail>
                    <Booking.Detail>Driver's contact: &nbsp;
                        <Booking.Info>{trip.driverContact}</Booking.Info>
                    </Booking.Detail>
                    <Booking.Detail>Estimated duration: &nbsp;
                        <Booking.Info>{trip.estimatedDuration}</Booking.Info>
                    </Booking.Detail>
                    <Booking.Detail>Breaks: &nbsp;
                        <Booking.Info>{trip.breaks}</Booking.Info>
                    </Booking.Detail>
                    <Booking.Detail>{trip.price}Ar/seat</Booking.Detail>
                </Booking.Group>
                <Booking.Group>
                    <Booking.BookButton onClick={()=>setShowModal(true)}>Book {bookedSeats} seats</Booking.BookButton>
                    <Booking.Detail>Total: {totalPrice}&nbsp;Ar</Booking.Detail>
                </Booking.Group>
            </Booking.Pan>
            {showModal && 
                <Booking.Modal>
                    <Booking.InnerModal>
                        <Booking.CloseButton onClick={() => setShowModal(false)}>X</Booking.CloseButton>
                        <Booking.ModalTitle>Booking confirmed!</Booking.ModalTitle>
                        <Booking.ModalText>
                            Thank you for trusting our service. Your booking has been added to your account. You can review it there.
                        </Booking.ModalText>
                        <Booking.ButtonCheck onClick={() => dispatch(bookSeat(trip))}>
                            <Booking.Link to={`/account`}>Check your account</Booking.Link>
                        </Booking.ButtonCheck>
                    </Booking.InnerModal>
                </Booking.Modal>}
        </Booking>
    )
}
