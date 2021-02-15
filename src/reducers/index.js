import { combineReducers } from 'redux';

function trips(state=[], action) {
    switch (action.type) {
        case "GET_TRIPS":
            return action.payload
        // case "BOOK_SEAT":{
        //     const newArray = state.map(trip => {
        //         if(trip.id === action.payload.id) {
        //             return {...trip, 
        //                     seats: trip.seats.map(seat => {
        //                         if(seat.id === action.seatId) {
        //                             return{
        //                                 ...seat,
        //                                 isAvailable: !isAvailable
        //                             }
        //                         }
        //                     })
        //                 }
        //         }
        //         return song
        //     }) 
        //     return newArray
        // }
        default:
            return state
    }
}

function booked(state=[], action) {
    switch (action.type) {
        case "BOOK_SEAT":
            return [...state, action.payload]
        default:
            return state;
    }
}
function towns(state=[], action) {
    return state;
}

function pickSeat(state = 0, action) {
    switch (action.type) {
        case "PICK_SEAT":
            return state + 1
        default:
            return state
    }
}

const reducer = combineReducers({
    trips,
    booked,
    towns,
    pickSeat
})

export default reducer