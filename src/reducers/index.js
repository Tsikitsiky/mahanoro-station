import { combineReducers } from 'redux';

function trips(state=[], action) {
    switch (action.type) {
        case "GET_TRIPS":
            return action.payload
        default:
            return state
    }
}

function booked(state=[], action) {
    return state;
}
function towns(state=[], action) {
    return state;
}

const reducer = combineReducers({
    trips,
    booked,
    towns,
})

export default reducer