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

function seats(state = {}, action) {
    switch (action.type) {
        case "PICK_SEAT":
            return {
                ...state,
                bookedSeats: state.bookedSeats + 1
            }
        case "GET_PRICE":
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }
        default:
            return state
    }
}

function updateUser(state={}, action) {
    switch (action.type) {
        case "SET_FIRST_NAME":
            return {
                ...state,
                firstName: state.payload
            }
        case "SET_LAST_NAME":
            return {
                ...state,
                lastName: state.payload
            }
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: state.payload
            }
    
        default:
            return state;
    }
}

const reducer = combineReducers({
    trips,
    booked,
    towns,
    seats,
    user: updateUser,
})

export default reducer