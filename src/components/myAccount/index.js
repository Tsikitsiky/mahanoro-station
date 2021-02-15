import React from 'react'
import { CancelButton, Container, Detail, Form, Group, Input, InputLabel, List, Pan, Span, SubTitle, Title, Trip, UpdateButton } from './style/myAccount'

export default function MyAccount({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

MyAccount.Title = function MyAccountTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

MyAccount.Pan = function MyAccountPan({children, ...restProps}) {
    return <Pan {...restProps}>{children}</Pan>
}

MyAccount.Span = function MyAccountSpan({children, ...restProps}) {
    return <Span {...restProps}>{children}</Span>
}

MyAccount.SubTitle = function MyAccountSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

MyAccount.Form = function MyAccountForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

MyAccount.Input = function MyAccountInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}
MyAccount.InputLabel = function MyAccountInputLabel({children, ...restProps}) {
    return <InputLabel {...restProps}>{children}</InputLabel>
}

MyAccount.List = function MyAccountList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

MyAccount.Trip = function MyAccountTrip({children, ...restProps}) {
    return <Trip {...restProps}>{children}</Trip>
}

MyAccount.Group = function MyAccountGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

MyAccount.Detail = function MyAccountDetail({children, ...restProps}) {
    return <Detail {...restProps}>{children}</Detail>
}

MyAccount.CancelButton = function MyAccountCancelButton({children, ...restProps}) {
    return <CancelButton {...restProps}>{children}</CancelButton>
}

MyAccount.UpdateButton = function MyAccountUpdateButton({children, ...restProps}) {
    return <UpdateButton {...restProps}>{children}</UpdateButton>
}
