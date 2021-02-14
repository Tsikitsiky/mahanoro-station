import React from 'react'
import { Button, Container, Date, Day, Group, Link, List, Seats, Span, Title, Trip, Time } from './style/tripDetail'

export default function TripDetail({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

TripDetail.Title = function TripDetailTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
TripDetail.List = function TripDetailList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}
TripDetail.Span = function TripDetailSpan({children, ...restProps}) {
    return <Span {...restProps}>{children}</Span>
}
TripDetail.Trip = function TripDetailTrip({children, ...restProps}) {
    return <Trip {...restProps}>{children}</Trip>
}
TripDetail.Group = function TripDetailGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
TripDetail.Day = function TripDetailDay({children, ...restProps}) {
    return <Day {...restProps}>{children}</Day>
}
TripDetail.Date = function TripDetailDate({children, ...restProps}) {
    return <Date {...restProps}>{children}</Date>
}
TripDetail.Time = function TripDetailTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}
TripDetail.Seats = function TripDetailSeats({children, ...restProps}) {
    return <Seats {...restProps}>{children}</Seats>
}
TripDetail.Button = function TripDetailButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
TripDetail.Link = function TripDetailLink({to,children, ...restProps}) {
    return <Link to={to} {...restProps}>{children}</Link>
}

