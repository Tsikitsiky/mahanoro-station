import React from 'react'
import { Link, Container, Title } from './styles/header'

export default function Header({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Header.Account = function HeaderAccount({to, children, ...restProps}) {
    return <Link to={to} {...restProps}>{children}</Link>
}


