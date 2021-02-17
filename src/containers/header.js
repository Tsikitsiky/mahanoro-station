import React from 'react'
import { Header } from '../components'

function HeaderContainer() {
    return (
        <Header>
            <Header.Title to="/">Mahanoro Station</Header.Title>
            <Header.Account to="/account">My account</Header.Account>
        </Header>
    )
}

export default HeaderContainer
