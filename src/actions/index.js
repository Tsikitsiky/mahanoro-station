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

export function bookSeat(trip) {
	return {
		type: "BOOK_SEAT",
		payload: trip
	}
}

export function pickSeat() {
	return {
		type: "PICK_SEAT",
	}
}

export function getPrice(price) {
	return {
		type: "GET_PRICE",
		payload: price
	}
}