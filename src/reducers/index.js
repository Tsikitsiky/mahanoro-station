import { combineReducers } from 'redux';

function trips(state=[], action) {
    switch (action.type) {
        case "GET_TRIPS":
            return action.payload
        case "PICK_SEAT":{
            const newArray = state.map(trip => { 
                trip.seats.map(seat => {
                    if(seat.id == action.payload) {
                        return {
                            ...seat,
                            isAvailable: !seat.isAvailable
                        }
                    }
                })
                return trip
            }) 
            return newArray
        }
        default:
            return state
    }
}

function booked(state=[], action) {
    switch (action.type) {
        case "BOOK_SEAT":
            const newObject = Object.assign(action.payload, action.payload[booked] = action.seat)
            return [...state, newObject]
        case "CANCEL_TRIP":
            const newArray = state.filter(
            (item) => item.id !== action.payload
        );
        return [...newArray];
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
            case "RESET_SEATS": 
                return {
                    bookedSeats: 0,
                    totalPrice: 0,
                }
            case "UNBOOK":
                return {
                    ...state,
                    bookedSeats: state.bookedSeats -1,
                    totalPrice: state.totalPrice - action.payload
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
                firstName: action.payload
            }
        case "SET_LAST_NAME":
            return {
                ...state,
                lastName: action.payload
            }
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.payload
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