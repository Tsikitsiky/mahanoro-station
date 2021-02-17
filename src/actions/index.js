export function getTrips() {
	return async (dispatch) => {
		const response = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`);
		const trips = await response.json();
        console.log(response);
		dispatch({
			type: "GET_TRIPS",
			payload: trips,
		});
	};
}

export function getTripDetail() {
    return {
        type: "GET_TRIP_DETAIL",
    }
}

export function bookSeat(trip, seat) {
	return {
		type: "BOOK_SEAT",
		payload: trip,
		seat,
	}
}

export function pickSeat(id) {
	return {
		type: "PICK_SEAT",
		payload: id
	}
}

export function getPrice(price) {
	return {
		type: "GET_PRICE",
		payload: price
	}
}

export function changeFirstName(name) {
	return {
		type: "SET_FIRST_NAME",
		payload: name
	}
}

export function changeLastName(name) {
	return {
		type: "SET_LAST_NAME",
		payload: name
	}
}

export function changePhoneNbr(number) {
	return {
		type: "SET_PHONE_NUMBER",
		payload: number
	}
}

export function cancel(id) {
	return {
		type: "CANCEL_TRIP",
		payload: id
	}
}

export function resetSeats() {
	return {
		type: "RESET_SEATS",
	}
}

export function unBook(total) {
	return {
		type: "UNBOOK",
		payload: total
	}
}
