import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed } from '../components'
import {getTrips} from '../actions'

export default function FeedContainer() {
    const towns = useSelector(state => state.towns);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrips())
    }, [])
    const trips = useSelector(state => state.trips)
    console.log(trips);
    return (
        <Feed>
            <Feed.Title>Where are you going?</Feed.Title>
            <Feed.List>
                {towns.map(town => {
                    return (
                        <Feed.Town key={town}>
                            <Feed.Link to={`/trip/${town}`}>
                                <Feed.Name>{town}</Feed.Name>
                            </Feed.Link>
                        </Feed.Town>
                    )
                })}
                {/* <Feed.Town>
                    <Feed.Link to=''>
                        <Feed.Name>Antananarivo</Feed.Name>
                    </Feed.Link>
                </Feed.Town>
                <Feed.Town>
                    <Feed.Link to=''>
                        <Feed.Name>Vatomandry</Feed.Name>
                    </Feed.Link>
                </Feed.Town>
                <Feed.Town>
                    <Feed.Link to=''>
                        <Feed.Name>Toamasina</Feed.Name>
                    </Feed.Link>
                </Feed.Town>
                <Feed.Town>
                    <Feed.Link to=''>
                        <Feed.Name>Moramanga</Feed.Name>
                    </Feed.Link>
                </Feed.Town> */}
            </Feed.List>
        </Feed>
    )
}
