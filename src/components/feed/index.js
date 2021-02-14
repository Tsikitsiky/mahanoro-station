import React from 'react'
import { Title, Container, List, Link, Town, Name } from './styles/feed'

export default function Feed({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Feed.Title = function FeedTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Feed.List = function FeedList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}
Feed.Link = function FeedLink({to,children, ...restProps}) {
    return <Link to={to} {...restProps}>{children}</Link>
}
Feed.Town = function FeedTown({children, ...restProps}) {
    return <Town {...restProps}>{children}</Town>
}

Feed.Name = function FeedName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}
