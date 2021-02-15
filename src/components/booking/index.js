import React from 'react'
import { BookButton, ButtonCheck, CloseButton, Container, Detail, Group, Info, InnerModal, Link, Modal, ModalText, ModalTitle, Pan, SeatButton, Span, SubTitle, Title } from './style/booking'

export default function Booking({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Booking.Pan = function BookingPan({children, ...restProps}) {
    return <Pan {...restProps}>{children}</Pan>
}
Booking.Title = function BookingTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Booking.SubTitle = function BookingSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Booking.Info = function BookingInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}
Booking.SeatButton = function BookingSeatButton({children, ...restProps}) {
    return <SeatButton {...restProps}>{children}</SeatButton>
}
Booking.BookButton= function BookinBookButton({children, ...restProps}) {
    return <BookButton {...restProps}>{children}</BookButton>
}
Booking.Detail= function BookinDetail({children, ...restProps}) {
    return <Detail {...restProps}>{children}</Detail>
}
Booking.Group= function BookinGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
Booking.Span= function BookinSpan({children, ...restProps}) {
    return <Span {...restProps}>{children}</Span>
}
Booking.Link= function BookinLink({to, children, ...restProps}) {
    return <Link to={to} {...restProps}>{children}</Link>
}
Booking.Modal= function BookingModal({children, ...restProps}) {
    return <Modal {...restProps}>{children}</Modal>
}
Booking.InnerModal= function BookingInnerModal({children, ...restProps}) {
    return <InnerModal {...restProps}>{children}</InnerModal>
}
Booking.ModalTitle= function BookingModalTitle({children, ...restProps}) {
    return <ModalTitle {...restProps}>{children}</ModalTitle>
}
Booking.ModalText= function BookingModalText({children, ...restProps}) {
    return <ModalText {...restProps}>{children}</ModalText>
}
Booking.ButtonCheck= function BookingButtonCheck({children, ...restProps}) {
    return <ButtonCheck {...restProps}>{children}</ButtonCheck>
}
Booking.CloseButton= function BookingCloseButton({children, ...restProps}) {
    return <CloseButton {...restProps}>{children}</CloseButton>
}