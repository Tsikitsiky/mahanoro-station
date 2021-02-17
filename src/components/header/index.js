import React from 'react'
import { Link, Container, Title } from './styles/header'

export default function Header({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Title = function HeaderTitle({to, children, ...restProps}) {
    return <Link to={to} {...restProps}>
            <Title {...restProps}>{children}</Title>
        </Link>
}

Header.Account = function HeaderAccount({to, children, ...restProps}) {
    return <Link to={to} {...restProps}>{children}</Link>
}


