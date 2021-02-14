import React from 'react'
import { Header } from '../components'

function HeaderContainer() {
    return (
        <Header>
            <Header.Title>Mahanoro Station</Header.Title>
            <Header.Account to="/myAccount">My account</Header.Account>
        </Header>
    )
}

export default HeaderContainer
