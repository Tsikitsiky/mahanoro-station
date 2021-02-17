# Graded Project - Mahanoro Station

This app is built out with **redux**, **compound components** and **styled components**.

It allow us to reserve some seats in _"Taxi brousses"_ departing from Mahanoro station.

See: 
- [Demo]('https://github.com/Tsikitsiky/mahanoro-station')

 - [Live App](https://mahanoro-station-rs.netlify.app/)


## User story:

User is able to: 
- Pick a city from the city list
- See the available trips to that city, and pick one where seats are still availalable
- Select one or more seats in the car, and see how much it's going to cost
- Confirm the booking
- See their confirmed bookings on the 'My account'page
- Modify their own information, like name or phone number, on that same page.

## Design

The design is from this Figma link: https://www.figma.com/file/6gSAJpaedebKAUuaM4ekFR/Mahanoro-Station?node-id=4%3A38

## Data

The data is from this link : https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json

### What was hard form me
Updating the trips array when I clkick on a seat was hard for me. The isAvailable property couldn't be update. 
I think I need more explanation about updating nested array in redux.